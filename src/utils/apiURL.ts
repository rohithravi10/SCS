/*************************************************
 * Medbot Microservices - Doctor
 * URL.ts
 * Created by Maniratnam on 26/03/2024
 * Copyright
 *************************************************/

// URL's
const END_POINT = {
  createArticle: "/",
  getArticles: "/",
  getArticle: "/:articleId",
  voting: "/like/:articleId",
};

const INTERNAL_END_POINT = {};

// exports
export { END_POINT, INTERNAL_END_POINT };
