import { Request, Response } from "express";
import { operationsRPC } from "./includes/proto";

export const add = async (req: Request, res: Response) => {
  const { first, second } = req.body;
  try {
    const addition = await operationsRPC.addNumbers({first, second});
    return res.json({result: JSON.parse(addition.data)});
  } catch (error) {
    return res.json({error: "There was an error"});
  }
  
};

export const subtract = (req: Request, res: Response) => {
  const { first, second } = req.body;
  res.json({ first, second });
};

export const divide = (req: Request, res: Response) => {
  const { first, second } = req.body;
  res.json({ first, second });
};

export const multiply = (req: Request, res: Response) => {
  const { first, second } = req.body;
  res.json({ first, second });
};
