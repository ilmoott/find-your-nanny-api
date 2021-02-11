import bodyParser from 'body-parser';
import express, {json} from 'express';
import morgan from 'morgan'

// Importing routes

import vacinationRoutes from './routes/vacinations'
import documentationRoutes from './routes/documentations'

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(json());

// routes
app.use('/api/vacinations', vacinationRoutes)
app.use('/api/documentations', documentationRoutes)


export default app;
