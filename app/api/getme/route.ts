import { NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/db";

export async function GET() {
  const session = await getServerSession();
  const useremail = session?.user?.email;

  if (useremail) {
    const user = await prisma.user.findFirst({
      where: {
        email: useremail,
      },
    });

    if (user) {
      return Response.json(user);
    }
  }
  return Response.json({ msg: "No user found" });
}
