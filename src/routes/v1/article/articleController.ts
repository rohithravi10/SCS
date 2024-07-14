import { Request, Response } from "express";
import {
  onCreateArticle,
  onGetArticle,
  onGetArticles,
  onVoteArticle,
} from "./articleService";
import { successMessage } from "../../../utils/apiMessage";
import { onSend_CatchResponse } from "../../../utils/helper";

export const createArticleController = async (req: Request, res: Response) => {
  try {
    const article = req.body;
    const data = await onCreateArticle(article);
    return res.json({
      message: successMessage.success,
      success: true,
      data: data ?? null,
    });
  } catch (error) {
    onSend_CatchResponse(res);
  }
};

export const getArticlesController = async (req: Request, res: Response) => {
  try {
    const { name, categoryType } = req.query;
    const articles = await onGetArticles({
      name: name as string,
      categoryType: categoryType as string,
    });
    return res.json({
      message: successMessage.success,
      success: true,
      data: articles ?? null,
    });
  } catch (error) {
    onSend_CatchResponse(res);
  }
};

export const getArticleController = async (req: Request, res: Response) => {
  try {
    const { articleId } = req.params;
    const article = await onGetArticle({ articleId });
    return res.json({
      message: successMessage.success,
      success: true,
      data: article ?? null,
    });
  } catch (error) {
    onSend_CatchResponse(res);
  }
};

export const articleVotingController = async (req: Request, res: Response) => {
  try {
    const { articleId } = req.params;
    const user = {
      userId: "663cac7e8132202d74c81ec8",
      fullName: "Ben mark",
      profilePictureURL: "12345",
    };
    const response = await onVoteArticle({
      articleId,
      fullName: user.fullName,
      userId: user.userId,
    });
    return res.json({
      message: successMessage.success,
      success: true,
      data: response ?? null,
    });
  } catch (error) {
    return res.json({ error });
  }
};
