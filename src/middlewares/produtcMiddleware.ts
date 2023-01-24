import { Request, response, Response } from 'express';

export const validate = (req: Request, res: Response, next) => {
  const { title, price, descripton } = req.body;

  if (title === undefined && price === undefined && descripton === undefined) {
    res.status(400).json({ message: "All fields is required!" })
  }

  if (title === '' && price === '' && descripton === '') {
    res.status(400).json({ message: "None fields can be empty" })
  }
  
  next();
};