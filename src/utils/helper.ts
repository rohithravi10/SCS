/*************************************************
 * Medbot Microservices - Doctor
 * helper.ts
 * Created by Maniratnam on 26/03/2024
 * Copyright
 *************************************************/

// import plugins
import httpStatus from "http-status";
import { Request, Response } from "express";

// import utils
import ApiError from "./apiError";
import { errorMessage } from "./apiMessage";
import redisClient from "../config/redisClient";

// helper functions
const onSet_CacheData = async (req: Request, data: any) => {
  const key = req.originalUrl;
  return await redisClient.set(key, JSON.stringify(data)).then(async () => {
    await redisClient.expire(key, 3600);
  });
};

// Api Response related functions
const onSend_CatchResponse = (res: Response) => {
  res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
    message: errorMessage.somethingWentWrong,
    success: false,
    data: new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      errorMessage.somethingWentWrong
    ),
  });
};

// exports
export { onSet_CacheData, onSend_CatchResponse };
