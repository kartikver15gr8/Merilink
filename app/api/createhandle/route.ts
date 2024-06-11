import { NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/db";
export async function POST(req: NextRequest) {
  const session = await getServerSession();
  const { handle } = await req.json();

  const userEmail = session?.user?.email;

  if (userEmail) {
    const user = await prisma.user.findFirst({
      where: {
        email: userEmail,
      },
    });
    if (user) {
      const updatedUser = await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          profilehandle: handle,
        },
      });
      if (updatedUser) {
        return Response.json({ msg: "User handle updated" });
      }
    }
  }
}
