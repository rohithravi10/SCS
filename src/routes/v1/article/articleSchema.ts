import Joi from "joi";

export const createArticleAPIInputSchema = {
  body: Joi.object({
    title: Joi.string().required().max(256),
    content: Joi.string().required(),
    keywords: Joi.array().items(Joi.string()).required(),
    imageURL: Joi.string().uri({ allowRelative: false }).required(),
    createdBy: Joi.object({
      doctorId: Joi.string().required(),
      fullName: Joi.string().required(),
      specialists: Joi.string().required(),
      profileImageURL: Joi.string().optional(),
    }),
  }),
};

export const getArticlesInputSchema = {
  query: Joi.object({
    name: Joi.string().optional().allow(""),
    categoryType: Joi.string().optional(),
    limit: Joi.number().positive().optional(),
    offset: Joi.number().positive().optional(),
    _: Joi.any().optional(),
  }),
};

export const getArticleInputSchema = {
  params: Joi.object({
    articleId: Joi.string().required(),
  }),
};

export const votingArticleSchema = {
  params: Joi.object({
    articleId: Joi.string().required(),
  }),
};

export type CreateArticleInputType = {
  title: string;
  content: string;
  keywords: string[];
  imageURL: string;
  createdBy: {
    doctorId: string;
    fullName: string;
    specialists: string;
    profileImageURL?: string;
  };
};

export type GetArticlesInputType = {
  name?: string;
  categoryType?: string; //separated with comma;
  limit?: number;
  offset?: string;
};

export type GetArticleInputType = {
  articleId: string;
};

export type VotingArticleInputType = {
  articleId: string;
  userId: string;
  fullName: string;
  profilePictureURL?: string;
};
