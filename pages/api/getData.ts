import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";
// import { getSession } from 'next-auth/react'

export default async function leaveGroup(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //   const session = await getSession({ req })
  const db = (await clientPromise).db(process.env.MONGODB_DB);

  //   if (session) {
  if (true) {
    // const email = session.user.email
    const email = "minsooerickim@gmail.com";
    await db
      .collection("users")
      .updateOne({ email: email }, { $set: { gid: "" } });

    const user = await db.collection("users").findOne({ email: email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({ diagnoses: user.diagnoses || [] });
  } else {
    res.status(401).json({});
  }
}
