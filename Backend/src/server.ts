import  express from 'express';
import { connectToDatabase } from './services/database.service';
import { carsRouter } from './routes/cars.router';
import { driverRouters } from './routes/driver.routes';
import { carsImagesRouter } from './routes/carImages.route';
import  cors from 'cors';
import { authRouter } from './routes/auth.router';
import { carBrandsRouter } from './routes/carBrands.router';
import { carcapacitiesRouter } from './routes/carcapacities.router';
import { cardocumentsRouter } from './routes/cardocuments.router';
import { carfaqsRouter } from './routes/carfaqs.router';
import { carFeaturesRouter } from './routes/carFeatures.router';
import { carInquiryRouter } from './routes/carInquirys.router';
import { carLocationRouter } from './routes/carlocation.router';
import { carModelRouter } from './routes/carModels.router';
import { carServiceRouter } from './routes/carservices';
import { CategoryesRouter } from './routes/categoryes.router';
import { SettingsRouter } from './routes/setting.route';
import { bannersRouter } from './routes/banner';
import carRoutes from './routes/carRoutes';
import * as dotenv from 'dotenv';
import * as log4js from 'log4js';
import * as bodyParser from 'body-parser';
import  morgan from 'morgan';
dotenv.config();

const port = normalizePort(process.env.PORT || '4000');

const app = express();

log4js.configure({
  appenders: { serviceprAdmin: { type: 'file', filename: 'servicepr-admin.log' } },
  categories: { default: { appenders: ['serviceprAdmin'], level: 'info' } },
});

const logger = log4js.getLogger('serviceprAdmin');

const corsOptions = {
  origin: ['*', 'https://injazrent.ae', 'http://localhost:3000', 'http://localhost:3001', 'localhost:3000','https://wwww.injazrent.ae', 'https://dev.injazrent.ae', 'https://www.dev.injazrent.ae'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}

// eslint-disable-next-line 
app.use(morgan('dev'));

app.use(cors(corsOptions));

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

connectToDatabase()
  .then(() => {
    app.use(
      '/user',
      carsRouter,
      carBrandsRouter,
      authRouter,
      carcapacitiesRouter,
      cardocumentsRouter,
      carfaqsRouter,
      carFeaturesRouter,
      carsImagesRouter,
      carInquiryRouter,
      carLocationRouter,
      carModelRouter,
      carServiceRouter,
      CategoryesRouter,
      driverRouters
    );

    app.use('/driver', driverRouters);

    app.use('/admin', SettingsRouter, bannersRouter);
    
    app.use('/testing', carRoutes)



    app.listen(port, () => {
      logger.info(`Server started at http://localhost:${port}`);
      console.log(`Server started at http://localhost:${port}`);
    });
  })
  .catch((error: Error) => {
    logger.error('Database connection failed ', error);
    process.exit();
  });

function normalizePort(val: string): number | string | boolean {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}
app.get('/', (req, res) => {
  res.send('API is running...');
});
