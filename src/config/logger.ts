// import plugins
import winston from "winston";

// import utils
import config from "./config";
import { SERVER_TYPE, DATE_FORMAT } from "../utils/constant";

// winston functions
const enumerateErrorFormat = winston.format((info: any) => {
  if (info instanceof Error) {
    Object.assign(info, { message: info.stack });
  }

  return info;
});

const logger = winston.createLogger({
  level: config.env === SERVER_TYPE.dev ? "debug" : "info",
  format: winston.format.combine(
    enumerateErrorFormat(),
    winston.format.colorize(),
    winston.format.splat(),
    winston.format.timestamp({ format: DATE_FORMAT.format1 }),
    winston.format.printf(
      ({ level, message, timestamp }: any) =>
        `${timestamp} -> ${level} -> ${message}`
    )
  ),
  transports: [
    new winston.transports.Console({
      stderrLevels: ["error"],
    }),
  ],
});

// exports
export default logger;
