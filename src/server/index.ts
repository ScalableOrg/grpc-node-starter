const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
import dotenv from "dotenv";
dotenv.config();

import { addNumbers } from "./controllers";

const { PROTO_LOCATION, GRPC_CLIENT_PORT } = process.env;

const packageDefinition = protoLoader.loadSync(PROTO_LOCATION);
const pkg = grpc.loadPackageDefinition(packageDefinition).testProj;


const server = new grpc.Server();
server.addService(pkg.Arithmetic.service, { addNumbers });
server.bind(`127.0.0.1:${GRPC_CLIENT_PORT}`, grpc.ServerCredentials.createInsecure());
server.start();
console.info(
  `***\n
    Arithmetic service started successfully on localhost:${GRPC_CLIENT_PORT}
    \n***`,
);
