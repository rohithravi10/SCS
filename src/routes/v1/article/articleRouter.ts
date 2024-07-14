import { Router } from "express";
import {
  articleVotingController,
  createArticleController,
  getArticleController,
  getArticlesController,
} from "./articleController";
import { validateSchema } from "../../../middleware/validate";
import {
  createArticleAPIInputSchema,
  getArticleInputSchema,
  getArticlesInputSchema,
} from "./articleSchema";
import { END_POINT } from "../../../utils/apiURL";

const articleRoutes = Router();

articleRoutes.post(
  END_POINT.createArticle,
  validateSchema(createArticleAPIInputSchema),
  createArticleController
);

articleRoutes.get(
  END_POINT.getArticles,
  validateSchema(getArticlesInputSchema),
  getArticlesController
);

articleRoutes.get(
  END_POINT.getArticle,
  validateSchema(getArticleInputSchema),
  getArticleController
);

articleRoutes.patch(
  END_POINT.voting,
  validateSchema(getArticleInputSchema),
  articleVotingController
);

export default articleRoutes;
