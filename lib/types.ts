export type UserType = {
  id: string;
  emailVerified: Date | null;
  image: string | null;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  password: string | null;
  name: string | null;
  avatar: string | null;
  profilehandle: string | null;
};

export type LinksType = {
  figma: string | null;
  github: string | null;
  gumroad: string | null;
  hashnode: string | null;
  id: 1;
  instagram: string | null;
  linkedin: string | null;
  medium: string | null;
  producthunt: string | null;
  substack: string | null;
  twitch: string | null;
  twitter: string | null;
  userHandle: string | null;
  userId: string;
  youtube: string | null;
};
