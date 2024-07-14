/*************************************************
 * Medbot Microservices - Doctor
 * doctorModel.ts
 * Created by Venkatesh on 06/05/2024
 * Copyright
 *************************************************/

// import plugins
import mongoose from "mongoose";

// article schemas

const likesSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
    userType: "",
  },
  fullName: {
    type: String,
    required: true,
  },
  profilePictureURL: {
    type: String,
    required: false,
  },
});

const createdBySchema = new mongoose.Schema(
  {
    doctorId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    profilePictureURL: {
      type: String,
      required: false,
    },
    specialists: {
      type: String,
      required: false,
    },
  },
  { _id: false }
);

const articleSchema = new mongoose.Schema(
  {
    title: {
      trim: true,
      type: String,
    },
    content: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
    likes: [likesSchema],
    createdBy: createdBySchema,
    keywords: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: {
      currentTime: () => {
        let date = new Date();
        let newDate = new Date(
          date.getTime() + date.getTimezoneOffset() * 60 * 1000 * -1
        );
        return newDate;
      },
    },
  }
);

// create model
const articlesModel = mongoose.model("articles_model", articleSchema);

// exports
export default articlesModel;
