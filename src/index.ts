import dotenv from 'dotenv';
import { App } from './server';

dotenv.config();

const PORT = process.env.PORT || 3030;

new App().server.listen(PORT, () => {
  console.log(`[SERVER] Server is running on port ${PORT}`);
});
