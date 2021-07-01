/* eslint-disable @typescript-eslint/no-misused-promises */
import { Document, Schema, Model, model } from "mongoose";
import CourseModel, { CourseDocument } from "./Course";
import UserModel, { UserDocument } from "./User";

const CertificationSchema: Schema<
  CertificationDocument,
  CertificationBaseModel
> = new Schema<CertificationDocument, CertificationBaseModel>({
  name: {
    type: String,
    required: false,
  },
  desc: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: false,
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course",
    required: true,
    validate: {
      // eslint-disable-next-line @typescript-eslint/return-await
      async validator(_id: number, _: any) {
        return await CourseModel.exists({ _id });
      },
      message: "Course doesn't exists",
    },
  },
  manager: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    validate: {
      // eslint-disable-next-line @typescript-eslint/return-await
      async validator(_id: number, _: any) {
        return await UserModel.exists({ _id });
      },
      message: "Manager doesn't exists",
    },
  },
});

interface Certification {
  name: string;
  desc: string;
  tags: number;
}

export interface CertificationDocument extends Certification, Document {
  course: CourseDocument["_id"];
  manager: UserDocument["_id"];
}

export interface CertificationBaseModel extends Model<CertificationDocument> {}

export default model<CertificationDocument, CertificationBaseModel>(
  "Certification",
  CertificationSchema
);
