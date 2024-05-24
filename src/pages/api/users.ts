// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getFile, sendMessage } from "@/lib/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  statuscode: number;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await sendMessage(req.body, (status: boolean) => {
    if (status) {
      res.status(200).json({ statuscode: 200, message: "success" });
    } else {
      res.status(400).json({ statuscode: 400, message: "Failed" });
    }
  });
}
