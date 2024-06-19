import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/db";
import { getServerSession } from "next-auth";

export async function POST(req: NextRequest) {
  const session = await getServerSession();
  const userEmail = session?.user?.email;

  const { searchParams } = new URL(req.url);
  const handle = searchParams.get("handle");

  if (!handle) {
    return NextResponse.json(
      { error: "Missing query parameter: handle" },
      { status: 400 }
    );
  }

  const user = await prisma.user.findFirst({
    where: { profilehandle: handle },
  });

  if (!user?.profilehandle) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const links = await prisma.links.findUnique({
    where: {
      userHandle: user.profilehandle,
    },
  });

  // if (!links) {
  //   return NextResponse.json({ error: "Links not found" }, { status: 404 });
  // }

  return NextResponse.json({ user, links });
}
