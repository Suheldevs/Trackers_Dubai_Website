import * as bcrypt from 'bcrypt';
import * as express from 'express';
import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import * as nodemailer from 'nodemailer';
import { CarInquiry } from '../models/carInquiry';
import { collections } from '../services/database.service';
import { sendWhatsAppmessage } from '../services/whatsapp';
export const carInquiryRouter = express.Router();

carInquiryRouter.use(express.json());

carInquiryRouter.get(
  '/getAllcontactenquiries',
  async (req: Request, res: Response) => {
    try {
      console.log(req.params.id);

      const result = await collections?.users?.find().toArray();
      if (result) {
        return res.status(201).send({
          status: 201,
          message: 'getAllcontactenquiries',
          data: result || {},
        });
      } else {
        return res
          .status(400)
          .send({ status: 201, message: 'No data found', data: result });
      }
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ status: 500, message: 'Internal server Error' });
    }
  },
);

carInquiryRouter.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Find the user with the provided email in the database
    const user = await collections?.users?.findOne({ email });
    console.log(user);
    if (!user) {
      return res.status(404).send({
        status: 404,
        message: 'User not found. Please check your email or sign up.',
      });
    }

    const passwordMatch = await bcrypt.compareSync(password, user.password);
    console.log(passwordMatch, 'passwordMatchpasswordMatch');
    if (!passwordMatch) {
      return res.status(401).send({
        status: 401,
        message: 'Invalid password. Please check your password and try again.',
      });
    }

    return res.status(200).send({ status: 200, message: 'Login successful!' });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ status: 500, message: 'Internal Server Error' });
  }
});

async function generateBookingId() {
  try {
    const counter = await collections?.carInquiry?.findOneAndUpdate(
      {},
      { $inc: { lastBookingId: 1 } },
    );

    if (counter.value) {
      const newBookingId =
        'INJ' + counter.value.lastBookingId.toString().padStart(6, '0');
      return newBookingId;
    } else {
      await collections?.carInquiry?.insertOne({ lastBookingId: 1 });
      return 'INJ000001';
    }
  } catch (error) {
    console.error('Error generating booking ID:', error);
    return null;
  }
}

carInquiryRouter.post(
  '/whatsappInquiry',
  async (req: Request, res: Response) => {
    try {
      const { msg } = req.body;
      const transporterOptions = {
        host: 'smtp.hostinger.com',
        secure: false,
        secureConnection: false,
        tls: {
          ciphers: 'SSLv3',
        },
        port: 587,
        auth: {
          user: 'info@injazrent.ae',
          pass: 'Info@2016',
        },
      } as nodemailer.TransportOptions;

      const transporter = nodemailer.createTransport(transporterOptions);

      const mailOptions = {
        from: 'info@injazrent.ae',
        to: 'info@injazrent.ae',
        subject: 'INQUIRY Successfully CREATED',
        html: `
          <html>
            <body>
              <h2>Inquiry Details:</h2>
             <pre>${msg}</pre>
            </body>
          </html>
        `,
      };

      transporter.sendMail(mailOptions, (error: any, info: any) => {
        if (error) {
          console.error('Error sending email:', error);
        } else {
          console.log('Email sent:', info.response);
          return res.status(201).send({
            status: 201,
            message: `Successfully created a inquiry  and sent email `,
          });
        }
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ status: 500, message: 'Internal Server Error' });
    }
  },
);

carInquiryRouter.post('/createInquiry', async (req: Request, res: Response) => {
  try {
    const {
      name,
      carName,
      startDate,
      endDate,
      pickUpLoc,
      dropLocation,
      phoneNumber,
      email,
      message,
      deliveryMode,
      packages,
      brand,
      model,
      pickupTime,
      dropTime,
    } = req.body;
    const status = 'New';
    const statusMessage = 'Received new inquiry';
    const statusChangedBy = 'admin';
    const bookingCreated = new Date();
    const bookingUpdated = new Date();
    const isNewCar = true;
    function formatBookingId(id) {
      return id.toString().padStart(6, '0');
    }

    const bookingIdfromdb = await generateBookingId();
    if (!bookingIdfromdb) {
      return res
        .status(500)
        .send({ status: 500, message: 'Failed to generate booking ID.' });
    }
    const newBookingId = formatBookingId(bookingIdfromdb + 1);
    const inquiry = new CarInquiry(
      newBookingId,
      name,
      carName,
      startDate,
      isNewCar,
      endDate,
      pickUpLoc,
      dropLocation,
      phoneNumber,
      message,
      deliveryMode,
      email,
      packages,
      brand,
      model,
      status,
      pickupTime,
      dropTime,
      statusMessage,
      statusChangedBy,
      bookingCreated,
      bookingUpdated,
    );
    inquiry['email'] = email;
    console.log('🚀 ~ carInquiryRouter.post ~ inquiry:', inquiry);

    const result = await collections?.carInquiry?.insertOne(inquiry);
    console.log('🚀 ~ carInquiryRouter.post ~ result:', result);

    if (result) {
      const transporterOptions = {
        host: 'smtp.hostinger.com',
        secure: false,
        secureConnection: false,
        tls: {
          ciphers: 'SSLv3',
        },
        port: 587,
        auth: {
          user: 'info@injazrent.ae',
          pass: 'Info@2016',
        },
      } as nodemailer.TransportOptions;

      const transporter = nodemailer.createTransport(transporterOptions);

      const mailOptions = {
        from: 'info@injazrent.ae',
        to: 'info@injazrent.ae',
        subject: 'INQUIRY Successfully CREATED',
        html: `
            <html>
              <body>
                <h2>Inquiry Details:</h2>
                <table>
                  <tr>
                    <td><strong>Name:</strong></td>
                    <td>${name}</td>
                  </tr>
                  <tr>
                    <td><strong>Car:</strong></td>
                    <td>${brand}, ${model}</td>
                  </tr>
                  <tr>
                    <td><strong>Start Date:</strong></td>
                    <td>${startDate}</td>
                  </tr>
                  <tr>
                    <td><strong>End Date:</strong></td>
                    <td>${endDate}</td>
                  </tr>
                  <tr>
                    <td><strong>Pickup Location:</strong></td>
                    <td>${pickUpLoc}</td>
                  </tr>
                  <tr>
                    <td><strong>Drop Location:</strong></td>
                    <td>${dropLocation}</td>
                  </tr>
                  <tr>
                  <td><strong>Drop Location:</strong></td>
                  <td>${pickupTime}</td>
                </tr>
                <tr>
                <td><strong>Drop Location:</strong></td>
                <td>${dropTime}</td>
              </tr>
                  <tr>
                    <td><strong>Phone Number:</strong></td>
                    <td>${phoneNumber}</td>
                  </tr>
                  <tr>
                    <td><strong>Message:</strong></td>
                    <td>${message}</td>
                  </tr>
                  <tr>
                  <td><strong>Booking Id number:</strong></td>
                  <td>${newBookingId}</td>
                </tr>
                
                </table>
              </body>
            </html>
          `,
      };

      transporter.sendMail(mailOptions, (error: any, info: any) => {
        if (error) {
          console.error('Error sending email:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });

      const ResponseData = await collections?.carInquiry?.findOne({
        _id: result.insertedId,
      });

      sendWhatsAppmessage({
        message: `New Enquiry received :  \n ${JSON.stringify(
          ResponseData,
          null,
          2,
        )}`,
      });

      return res.status(201).send({
        status: 201,
        message: `Successfully created a inquiry  and sent email `,
        result: ResponseData || {},
      });
    } else {
      return res
        .status(500)
        .send({ status: 500, message: 'Failed to create a inquiry.' });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ status: 500, message: 'Internal Server Error' });
  }
});
carInquiryRouter.get('/getInquiry/:id', async (req: Request, res: Response) => {
  try {
    console.log(req.params.id);
    const objectId = new ObjectId(req.params.id);
    console.log(objectId);

    const result = await collections?.carInquiry?.findOne({ _id: objectId });
    if (result) {
      return res.status(201).send({
        status: 201,
        message: 'data get scussfully',
        data: result || {},
      });
    } else {
      return res
        .status(400)
        .send({ status: 201, message: 'No data found', data: result });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ status: 500, message: 'Internal server Error' });
  }
});
carInquiryRouter.delete(
  '/deleteInquiry/:id',
  async (req: Request, res: Response) => {
    try {
      console.log('Request recieved here:---->', req.params.id);
      const objectId = new ObjectId(req.params.id);

      const result = await collections?.carInquiry?.deleteOne({
        _id: objectId,
      });
      console.log(result);

      return res.status(201).send({
        status: 201,
        data: result,
        message: `Delete Inquiry is done with ${req.params.id}`,
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ status: 500, message: 'Internal Server Error' });
    }
  },
);
carInquiryRouter.patch(
  '/updateInquiry/:id',
  async (req: Request, res: Response) => {
    try {
      const {
        carName,
        startDate,
        endDate,
        isNewCar,
        pickUpLoc,
        dropLocation,
        phoneNumber,
        area,
        message,
        deliveryMode,
        name,
        email,
        packages,
        brand,
        model,
        status,
        statusMessage,
        statusChangedBy,
      } = req.body;

      const objectId = new ObjectId(req.params.id);

      const updateFields = {
        carName,
        startDate,
        endDate,
        isNewCar,
        pickUpLoc,
        dropLocation,
        phoneNumber,
        area,
        message,
        deliveryMode,
        name,
        email,
        packages,
        brand,
        model,
        status,
        statusMessage,
        statusChangedBy,
      };

      const result = await collections?.carInquiry?.findOneAndUpdate(
        { _id: objectId },
        { $set: updateFields },
      );

      if (result && result.value) {
        return res.status(200).send({
          status: 200,
          message: 'Inquiry updated successfully',
          data: result.value,
        });
      } else {
        return res.status(404).send({
          status: 404,
          message: 'Inquiry not found',
        });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).send({
        status: 500,
        message: 'Internal Server Error',
      });
    }
  },
);

carInquiryRouter.get('/getInquirys', async (req: Request, res: Response) => {
  try {
    const result = await collections?.carInquiry?.find().toArray();

    if (result) {
      return res.status(201).send({
        status: 201,
        message: 'getInquirys sucessfully',
        data: result,
      });
    } else {
      return res
        .status(400)
        .send({ status: 201, message: 'No data found', data: result });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ status: 500, message: 'Internal Server Error' });
  }
});
