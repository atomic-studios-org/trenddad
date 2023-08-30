import db from "../../drizzle/db";
import { voucher } from "../../drizzle/schema";
import { getServerSession } from "#auth";
import { Session } from "next-auth";
import { and, eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event);
  if (!session?.user?.email) {
    throw createError({
      statusCode: 403,
      statusMessage: "User is not authenticated, please sign in",
    });
  }
  const { input } = await readBody(event);
  const isCorrectCode = await $fetch("/api/check-voucher", {
    method: "POST",
    body: { input: input },
  });
  if (isCorrectCode) {
    await activateCode(session);
    return true;
  } else {
    throw createError({
      statusCode: 403,
      statusMessage: "The code you've provided was not correct",
    });
  }
});

const activateCode = async (session: Session): Promise<void> => {
  const isActive = await db
    .select()
    .from(voucher)
    .where(
      and(
        eq(voucher.email, session.user?.email as string),
        eq(voucher.isactivated, true)
      )
    );
  if (isActive[0]) {
    throw createError({
      statusCode: 403,
      statusMessage: "The code was already activated",
    });
  } else {
    await db
      .insert(voucher)
      .values({ email: session.user?.email, isactivated: true });
  }
};
