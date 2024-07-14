/*************************************************
 * Medbot Microservices - Doctor
 * index.ts
 * Created by Maniratnam on 11/03/2024
 * Copyright
 *************************************************/

// import utils
import app from "./app";
import config from "./config/config";
import logger from "./config/logger";
import onConnect_MongoDB from "./config/mongoClient";
import articlesModel from "./model/article";

// initial values
let server: any;
logger.info(`Running on server : ${config.env}`);

// event functions
(async () => {
  try {
    onConnect_MongoDB().then(async (data: any) => {
      if (data) {
        onInitiate_Model();
        await redisClient.connect();
        server = app.listen(config.port, async () => {
          logger.info(`Listern to port ${config.port}`);
        });
      }
    });
  } catch (error) {
    logger.error(error);
  }
})();

const onInitiate_Model = () => {
  articlesModel;
};

const onExit_Handler = () => {
  if (server) {
    server.close(() => {
      logger.info("server closed");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const onHandle_Error = (error: string) => {
  logger.error(error);
  onExit_Handler();
};

const onHandle_SIGTERM = () => {
  logger.info("SIGTERM received");
  onExit_Handler();
};

// error handling
process.on("warning", (e) => logger.warn(e.stack));
process.on("uncaughtException", onHandle_Error); // handle uncaught exceptions, which are errors that are not caught and handled by any specific try...catch block or an error handler function
process.on("unhandledRejection", onHandle_Error); // handle unhandled Promise rejections
process.on("SIGTERM", onHandle_SIGTERM); //it's a request for the process to gracefully shut down, allowing it to clean up resources and exit in an orderly manner.
