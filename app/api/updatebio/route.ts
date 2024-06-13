import { NextRequest } from "next/server";
import { prisma } from "@/db";
import { getServerSession } from "next-auth";

export async function POST(req: NextRequest) {
  const session = await getServerSession();
  const useremail = session?.user?.email;

  const { newBio } = await req.json();

  if (useremail) {
    const user = await prisma.user.findFirst({
      where: {
        email: useremail,
      },
    });
    if (user) {
      const updatedBio = await prisma.user.update({
        where: {
          email: user.email,
        },
        data: {
          bio: newBio,
        },
      });

      if (updatedBio) {
        return Response.json({ msg: "Bio updated" });
      }
    }
  }
  return Response.json({ msg: "Bio not updated" });
}
