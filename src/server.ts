import express, { Router } from 'express';
import cors from 'cors';
import routes from './routes/routes';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3030;
const app = express();

app.use(express.json());
app.use(routes);
app.use(cors());

app.listen(PORT, () => {
  console.log(`[SERVER] Server is running on port ${PORT}`);
});


