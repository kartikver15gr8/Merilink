import { NextRequest } from "next/server";
import { prisma } from "@/db";
import { getServerSession } from "next-auth";

export default async function POST(req: NextRequest) {
  const session = await getServerSession();
  const { userhandle } = await req.json();

  const links = await prisma.links.findFirst({
    where: {
      userHandle: userhandle,
    },
  });
  if (links) {
    return Response.json(links);
  }
  return Response.json({ msg: "No links" });
}
