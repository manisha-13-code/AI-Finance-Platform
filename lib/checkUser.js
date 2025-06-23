import { currentUser } from "@clerk/nextjs/server";
import db from './prisma';

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) return null;

  try {
    // 🔍 Look up by clerkUserId first
    const existingUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (existingUser) {
      return existingUser;
    }

    const name = `${user.firstName || ''} ${user.lastName || ''}`.trim();
    const email = user.emailAddresses?.[0]?.emailAddress;

    // 🛡️ Make sure email is not null or undefined
    if (!email) throw new Error("Email not found on Clerk user");

    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name,
        imageUrl: user.imageUrl,
        email,
      },
    });

    return newUser;

  } catch (error) {
    console.error("checkUser error:", error.message);
    return null;
  }
};
