import { ServerUnaryCall, sendUnaryData, } from "grpc";

interface OperationRequest {
    first: number,
    second: number,
}

interface ResultResponse {
    data: string,
}

export const addNumbers = (call: ServerUnaryCall<OperationRequest>, callback: sendUnaryData<ResultResponse>) => {
    const {first, second} = call.request
    const sum = first + second;
    return callback(null, {data: JSON.stringify({sum})})
}