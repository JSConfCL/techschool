import mongoose from 'mongoose';
import { MONGO_URL } from '../../../config/constants.js';

mongoose.connect(MONGO_URL).then(() => {
    console.log('MongoDB connected');
}).catch((error) => {
    console.log('MongoDB connection error', error);
});
