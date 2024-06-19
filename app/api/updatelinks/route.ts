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
          linkedin: linkedin,
          github: github,
          youtube: youtube,
          figma: figma,
          hashnode: hashnode,
          medium: medium,
          producthunt: producthunt,
          gumroad: gumroad,
          substack: substack,
          twitch: twitch,
        },
        create: {
          userHandle: user.profilehandle,
          userId: user.id,
          instagram: instagram,
          twitter: twitter,
          linkedin: linkedin,
          github: github,
          youtube: youtube,
          figma: figma,
          hashnode: hashnode,
          medium: medium,
          producthunt: producthunt,
          gumroad: gumroad,
          substack: substack,
          twitch: twitch,
        },
      });
      if (updatedlinks) {
        return Response.json({ msg: "links updated!" });
      }
    }
  }
  return Response.json({ msg: "links not updated!" });
}
