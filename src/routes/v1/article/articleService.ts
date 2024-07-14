import { FilterQuery } from "mongoose";
import articlesModel from "../../../model/article";
import {
  CreateArticleInputType,
  GetArticleInputType,
  GetArticlesInputType,
  VotingArticleInputType,
} from "./articleSchema";

export const onCreateArticle = async (input: CreateArticleInputType) => {
  return await articlesModel.create({
    title: input.title,
    content: input.content,
    keywords: input.keywords,
    imageURL: input.imageURL,
    createdBy: {
      doctorId: input.createdBy.doctorId,
      fullName: input.createdBy.fullName,
      profilePictureURL: input.createdBy.profileImageURL,
      specialists: input.createdBy.specialists,
    },
  });
};

export const onGetArticles = async (input: GetArticlesInputType) => {
  const filterConditions: FilterQuery<CreateArticleInputType> = {};
  if (input.name && input.name !== "") {
    filterConditions["title"] = {
      $regex: new RegExp(input.name, "i"),
    };
  }
  if (input.categoryType) {
    filterConditions["keywords"] = {
      $in: input.categoryType.split(","),
    };
  }
  return await articlesModel.find(filterConditions).select("-content");
};

export const onGetArticle = async (input: GetArticleInputType) => {
  return await articlesModel.findById(input.articleId);
};

export const onVoteArticle = async (input: VotingArticleInputType) => {
  const article = await articlesModel.findById(input.articleId);
  const userIndex = article?.likes?.findIndex(
    (user) => String(user.userId) === input.userId
  );
  if (userIndex === undefined) {
    article?.set("likes", [
      {
        profilePictureURL: input.profilePictureURL,
        fullName: input.fullName,
        userId: input.userId,
      },
    ]);
  } else if (userIndex < 0) {
    article?.likes?.push({
      profilePictureURL: input.profilePictureURL,
      fullName: input.fullName,
      userId: input.userId,
    });
  } else {
    article?.likes?.splice(userIndex, 1);
  }

  return await article?.save();
};
