import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const app: express.Express = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

import * as controllers from './controllers';

app.post('/add', controllers.add);
app.post('/subtract', controllers.subtract);
app.post('/multiply', controllers.multiply);
app.post('/divide', controllers.divide);

app.use((_req: Request, res: Response) => {
  res.status(404).send({ error: "Not found" });
});

app.listen(process.env.SERVER_PORT, () => {

    process.on('uncaughtException', (err) => {
      console.error(err, 'Uncaught Exception thrown');
      process.exit(1);
    });
    console.log(`***\n Application started successfully on localhost:${process.env.SERVER_PORT}\n***`);
  });

  export default app;