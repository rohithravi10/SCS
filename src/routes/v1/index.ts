/*************************************************
 * Medbot Microservices - Doctor
 * index.ts
 * Created by Maniratnam on 26/03/2024
 * Copyright
 *************************************************/

// import plugins
import express from "express";

// import utils
import articleRoute from "./article/articleRouter";

// router configurations
const router = express.Router();

const defaultRoutes = [
  {
    path: "/articles",
    route: articleRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

// exports
export default router;
