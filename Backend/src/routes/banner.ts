import express, { Request, Response } from 'express';
import multer from 'multer';
import * as path from 'path';
import * as fs from 'fs';

export const bannersRouter = express.Router();

bannersRouter.use(express.json());

// Define the upload path
const uploadPath = path.join(__dirname, '../public/banners');

// Ensure the upload directory exists
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

// Multer storage config
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadPath);
  },
  filename: (_req, file, cb) => {
    // You can modify filename here if needed (e.g., with timestamp)
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// ✅ Correct usage with upload.array()
bannersRouter.post('/upload', upload.array('bannerImages', 5), (req: Request, res: Response) => {
  const files = req.files as Express.Multer.File[];

  if (!files || files.length === 0) {
    return res.status(400).json({ error: 'No files uploaded' });
  }

  // If you want to move files or log paths, do it here
  const savedPaths = files.map(file => {
    return {
      originalName: file.originalname,
      savedPath: file.path
    };
  });

  return res.status(200).json({
    message: 'Files uploaded successfully',
    files: savedPaths
  });
});


// // Create a new banner with multiple images
// bannersRouter.post('/addBanner', upload.array('bannerImages'), async (req: Request, res: Response) => {
//     try {
//         const { title, description } = req.body;
        
//         // Extract uploaded files
//         const imagePaths: string[] = req.files.map((file: Express.Multer.File) => file.path);

//         // Save banner details to the database
//         const result = await collections?.banners?.insertOne({ title, description, imagePaths });

//         if (result) {
//             return res.status(200).send({ status: 200, message: 'Banner added successfully' });
//         } else {
//             return res.status(500).send({ status: 500, message: 'Failed to add banner' });
//         }
//     } catch (error) {
//         console.error(error);
//         return res.status(400).send({ status: 400, message: error.message });
//     }
// });


// // Get all banners
// bannersRouter.get('/getAllBanners', async (req: Request, res: Response) => {
//     try {
//         const banners = await collections?.banners?.find({}).toArray();
//         return res.status(200).send({ status: 200, message: 'Banners retrieved successfully', data: banners });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).send({ status: 500, message: 'Failed to retrieve banners' });
//     }
// });

// // Get banner by ID
// bannersRouter.get('/getBanner/:id', async (req: Request, res: Response) => {
//     try {
//         const banner = await collections?.banners?.findOne({ _id: req.params.id });
//         if (banner) {
//             return res.status(200).send({ status: 200, message: 'Banner retrieved successfully', data: banner });
//         } else {
//             return res.status(404).send({ status: 404, message: 'Banner not found' });
//         }
//     } catch (error) {
//         console.error(error);
//         return res.status(500).send({ status: 500, message: 'Failed to retrieve banner' });
//     }
// });

// // Update banner by ID
// bannersRouter.put('/updateBanner/:id', async (req: Request, res: Response) => {
//     try {
//         const { title, description } = req.body;
//         const result = await collections?.banners?.updateOne(
//             { _id: req.params.id },
//             { $set: { title, description } }
//         );
//         if (result.modifiedCount !== 0) {
//             return res.status(200).send({ status: 200, message: 'Banner updated successfully' });
//         } else {
//             return res.status(404).send({ status: 404, message: 'Banner not found or no changes made' });
//         }
//     } catch (error) {
//         console.error(error);
//         return res.status(500).send({ status: 500, message: 'Failed to update banner' });
//     }
// });

// // Delete banner by ID
// bannersRouter.delete('/deleteBanner/:id', async (req: Request, res: Response) => {
//     try {
//         const result = await collections?.banners?.deleteOne({ _id: req.params.id });
//         if (result.deletedCount !== 0) {
//             return res.status(200).send({ status: 200, message: 'Banner deleted successfully' });
//         } else {
//             return res.status(404).send({ status: 404, message: 'Banner not found' });
//         }
//     } catch (error) {
//         console.error(error);
//         return res.status(500).send({ status: 500, message: 'Failed to delete banner' });
//     }
// });
