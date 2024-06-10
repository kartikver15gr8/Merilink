import { NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/db";
export async function POST(req: NextRequest) {
  const session = await getServerSession();
  const {
    instagram,
    twitter,
    linkedin,
    github,
    youtube,
    figma,
    hashnode,
    medium,
    producthunt,
    gumroad,
    substack,
    twitch,
  } = await req.json();
  const useremail = session?.user?.email;

  if (useremail) {
    const user = await prisma.user.findFirst({
      where: {
        email: useremail,
      },
    });

    if (user) {
      const links = await prisma.links.create({
        data: {
          userHandle: user.profilehandle,
          userId: user.id,
          instagram: instagram,
          twitter: twitter,
          twitch: twitch,
          linkedin: linkedin,
          youtube: youtube,
          gumroad: gumroad,
          producthunt: producthunt,
          medium: medium,
          substack: substack,
          figma: figma,
          github: github,
          hashnode: hashnode,
        },
      });
      if (links) {
        return Response.json("done");
      }
    }
  }
  return Response.json("not done!");
}
