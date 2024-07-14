// import plugins
import mongoose from "mongoose";

// import utils
import config from "./config";
import logger from "./logger";

// event functions
const onConnect_MongoDB = async () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(config.mongodb_connection_string)
      .then(() => {
        resolve(true);
        logger.info("mongodb connected");
      })
      .catch((error: any) => {
        logger.error(`mongodb error: ${error}`);
        reject(error);
        process.exit(1);
      });
  });
};

// exports
export default onConnect_MongoDB;
