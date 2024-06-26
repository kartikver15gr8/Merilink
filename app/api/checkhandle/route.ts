import { prisma } from "@/db";
import { getServerSession } from "next-auth";

import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const session = await getServerSession();
  const userEmail = session?.user?.email;
  const { userhandle } = await req.json();

  const handle = await prisma.user.findFirst({
    where: {
      profilehandle: userhandle,
    },
  });

  if (handle) {
    return Response.json({ message: "already exists", status: true });
  }

  return Response.json({ message: "you can use this handle", status: false });
}
