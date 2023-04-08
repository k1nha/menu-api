import { Request, Response, NextFunction } from 'express';

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const { title, price, descripton } = req.body;
  try {
    if (
      title === undefined &&
      price === undefined &&
      descripton === undefined
    ) {
      res.status(400).json({ message: 'All fields is required!' });
    }

    if (title === '' && price === '' && descripton === '') {
      res.status(400).json({ message: 'None fields can be empty' });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: err,
    });
  }

  next();
};
