import { NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/db";

export async function POST(req: NextRequest) {
  const session = await getServerSession();
  const userEmail = session?.user?.email;
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

  if (userEmail) {
    const user = await prisma.user.findFirst({
      where: {
        email: userEmail,
      },
    });
    if (user) {
      const updatedlinks = await prisma.links.upsert({
        where: {
          userId: user.id,
        },
        update: {
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
        create: {
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
      if (updatedlinks) {
        return Response.json({ msg: "links updated!" });
      }
    }
  }
  return Response.json({ msg: "links not updated!" });
}
