import express from 'express';
import mongoose from 'mongoose';
import groceryRoutes from './routes/groceryRoutes';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/grocery', groceryRoutes);

// MongoDB connection
mongoose
  .connect('mongodb+srv://jobinmathew0407:1inTMTEXbf0bIfdh@cluster0.89enj5b.mongodb.net/', {
   
   
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

export default app;