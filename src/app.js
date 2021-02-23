import bodyParser from 'body-parser';
import express, {json} from 'express';
import morgan from 'morgan'

// Importing routes

import cancelJobsRoutes from './routes/cancelJobs'
import checkpointJobsRoutes from './routes/checkpointJobs'
import favoriteNanniesRoutes from './routes/favoriteNannies'
import usersRoutes from './routes/users'
import jobsStagesRoutes from './routes/jobsStages'
import paymentMethodsRoutes from './routes/paymentMethods'
import stagesRoutes from './routes/stages'
import statusJobsRoutes from './routes/statusJobs'
import tagsRoutes from './routes/tags'
import JobstagsRoutes from './routes/jobsTags'
import userDisponibilitiesRoutes from './routes/userDisponibilities'
import userDocumentationsRoutes from './routes/userDocumentation'
import userInterestedRoutes from './routes/userInterested'
import userPaymentMethodsRoutes from './routes/userPaymentMethods'
import userVacinationsRoutes from './routes/userVacinations'
import walletsRoutes from './routes/wallets'
import walletTransactionsRoutes from './routes/walletTransactions' 
import vacinationRoutes from './routes/vacinations'
import cancelJustifyRoutes from './routes/cancelJustify'
import gendersRoutes from './routes/genders'
import documentationRoutes from './routes/documentations'
import jobsRoutes from './routes/jobs'

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(json());

// routes
app.use('/api/cancel-jobs', cancelJobsRoutes)
app.use('/api/checkpoint-jobs', checkpointJobsRoutes)
app.use('/api/favorite-nannies', favoriteNanniesRoutes) 
app.use('/api/users', usersRoutes)
app.use('/api/vacinations', vacinationRoutes)
app.use('/api/documentations', documentationRoutes)
app.use('/api/cancel-justify', cancelJustifyRoutes)
app.use('/api/genders', gendersRoutes)
app.use('/api/jobs', jobsRoutes)
app.use('/api/job-stages', jobsStagesRoutes)
app.use('/api/job-tags', JobstagsRoutes)
app.use('/api/payment-methods', paymentMethodsRoutes)
app.use('/api/stages', stagesRoutes)
app.use('/api/status-jobs', statusJobsRoutes)
app.use('/api/tags', tagsRoutes)
app.use('/api/user-disponibilities', userDisponibilitiesRoutes)
app.use('/api/user-documentations', userDocumentationsRoutes)
app.use('/api/user-interested', userInterestedRoutes)
app.use('/api/user-payment-methods', userPaymentMethodsRoutes)
app.use('/api/user-vacinations', userVacinationsRoutes)
app.use('/api/wallets', walletsRoutes)
app.use('/api/wallet-transactions', walletTransactionsRoutes)


export default app;
