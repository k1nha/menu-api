import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export const connection = mysql.createPool({  
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  port: process.env.MYSQL_PORT_DOCKER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB
}); 