import { ObjectId } from "mongodb";

export interface File {
  _id: ObjectId;
  filename: string;
  size: number;
  type: string;
  uploadDate: Date;
  content: Buffer;
}
