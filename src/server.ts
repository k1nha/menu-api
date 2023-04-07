import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import routes from './routes/routes';

dotenv.config();

const PORT = process.env.PORT || 3030;
const app = express();

app.use(express.json());
app.use(routes);
app.use(cors());

app.listen(PORT, () => {
  console.log(`[SERVER] Server is running on port ${PORT}`);
});
