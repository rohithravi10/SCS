/*************************************************
 * Medbot Microservices - Doctor
 * app.ts
 * Created by Maniratnam on 26/03/2024
 * Copyright
 *************************************************/

// import plugins
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import httpStatus from "http-status";
import compression from "compression";

// import utils
import router from "./routes/v1";
import ApiError from "./utils/apiError";
import { errorMessage, infoMessage } from "./utils/apiMessage";

// initiate app
const app = express();

// helps secure your application by setting various HTTP headers to prevent common security vulnerabilities, such as cross-site scripting (XSS), content security policy (CSP), and more
app.use(helmet());

// It parses the incoming request body containing JSON data and makes it available in req.body for subsequent middleware or route handlers to access
app.use(express.json());

// It parses data submitted through HTML forms with Content-Type of application/x-www-form-urlencoded. The extended: true option allows for parsing nested objects in the URL-encoded data
app.use(express.urlencoded({ extended: true }));

// It helps reduce the size of the response body and improve the performance of web applications by reducing network bandwidth usage
app.use(compression());

// CORS is a security mechanism that allows web browsers to make cross-origin HTTP requests safely. This middleware adds appropriate CORS headers to the HTTP responses
app.use(cors());

// CORS preflight request handler for all routes
app.options("*", cors());

// router
app.get("/", async (req, res) => {
  res.send(infoMessage.welcomeMessage);
});
app.use("/api/v1", router);
app.use((req: Request, res: Response, next: NextFunction) => {
  return next(new ApiError(httpStatus.NOT_FOUND, errorMessage[404]));
});

// exports
export default app;
