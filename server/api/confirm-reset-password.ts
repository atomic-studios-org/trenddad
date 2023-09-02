import db from "../../drizzle/db";
import { forgotpassword, user } from "../../drizzle/schema";
import * as nodemailer from "nodemailer";
import { generateResetPassword } from "../../utils/templatePasswordReset";
import { and, eq } from "drizzle-orm";
import * as bcrypt from "bcrypt";

export default defineEventHandler(async (event) => {
  const { email, password, code } = await readBody(event);

  const isCorrectCode = await checkCode(email, code);
  if (!isCorrectCode) {
    throw createError({
      statusCode: 403,
      statusMessage: "The code you provided was not right.",
    });
  }
  await changePassword(password);
  await clearData(email)

  return true;
});

const checkCode = async (email: string, code: string) => {
  const user = await db
    .select()
    .from(forgotpassword)
    .where(and(eq(forgotpassword.email, email), eq(forgotpassword.code, code)));
    console.log(user[0])
  return user[0];
};

const changePassword = async (password: string): Promise<void> => {
  const salt = await bcrypt.genSalt();
  const hashed = await bcrypt.hash(password, salt);
  await db.update(user).set({ password: hashed });
};

const clearData = async (email: string): Promise<void> => {
await db.delete(forgotpassword).where(eq(forgotpassword.email, email))
}
