const caller = require("grpc-caller");

const { PROTO_LOCATION } = process.env;

export const operationsRPC = caller(
`127.0.0.1:${process.env.GRPC_CLIENT_PORT}`,
PROTO_LOCATION,
'Arithmetic',
);

console.log(`Listening to ARITHMETIC RPC at localhost: ${process.env.GRPC_CLIENT_PORT}`);