// import plugins
import Joi from "joi";
import * as path from "path";
import dotenv from "dotenv";

// import utils
import { SERVER_TYPE } from "../utils/constant";

// env congig
dotenv.config({ path: path.join(__dirname, "../../.env.dev") });

// schema
const schema = Joi.object()
  .keys({
    PORT: Joi.number().default(3000),
    NODE_ENV: Joi.string()
      .valid(
        SERVER_TYPE.local,
        SERVER_TYPE.dev,
        SERVER_TYPE.stage,
        SERVER_TYPE.prod
      )
      .required(),

    REDIS_CONNECTION_STRING: Joi.string().required(),
    MONGODB_CONNECTION_STRING: Joi.string().required(),
  })
  .unknown();

// const values
const { value, error } = schema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  throw new Error(`Environment config validation error: ${error.message}`);
}

// exports
export = {
  port: value.PORT,
  env: value.NODE_ENV,

  redis_connection_string: value.REDIS_CONNECTION_STRING,
  mongodb_connection_string: value.MONGODB_CONNECTION_STRING,
};
