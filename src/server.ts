import express from 'express';
import cors from 'cors';
import routes from './routes/routes';

export class App {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.router();
    this.middleware();
  }

  private middleware() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  private router() {
    this.server.use(routes);
  }
}
