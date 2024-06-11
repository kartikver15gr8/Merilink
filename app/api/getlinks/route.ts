import { NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/db";

export async function GET(req: NextRequest) {
  const session = await getServerSession();
  const userEmail = session?.user?.email;

  if (userEmail) {
    const user = await prisma.user.findFirst({
      where: {
        email: userEmail,
      },
    });

    if (user) {
      const links = await prisma.links.findFirst({
        where: {
          userId: user.id,
        },
      });

      if (links) {
        return Response.json(links);
      }
    }
  }
}
