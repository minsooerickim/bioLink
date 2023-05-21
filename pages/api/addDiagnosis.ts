import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function countUsers(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = (await clientPromise).db(process.env.MONGODB_DB);
  const { diagnosisName } = req.body;

  await db
    .collection("users")
    .updateOne(
      { email: "minsooerickim@gmail.com" },
      { $push: { diagnoses: diagnosisName } }
    );

  res.status(200).json({});
}
