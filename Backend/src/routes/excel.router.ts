import express, { Request, Response } from 'express';
import { existsSync, writeFileSync } from 'fs';

import { ExcelService, Booking } from '../utils/excelService';

const app = express();
const port = 3000;

app.use(express.json());

const filePath = './bookings.xlsx';

if (!existsSync(filePath)) {

  writeFileSync(filePath, '');
}

const excelService = new ExcelService(filePath);
excelService.init().then(() => {
  app.post('/bookings', (req: Request, res: Response) => {
    const newBooking: Booking = req.body;

    // Assuming newBooking is a valid Booking object
    excelService.addBooking(newBooking)
      .then(() => res.status(201).send('Booking added to Excel sheet'))
      .catch((error) => {
        console.error(error);
        res.status(500).send('Internal Server Error');
      });
  });

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
});
