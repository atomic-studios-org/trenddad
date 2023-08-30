const CORRECTVOUCHER = "DADDY10";

export default defineEventHandler(async (event) => {
  const { input } = await readBody(event);
  const response = await checkCode(input);
  return response;
});

const checkCode = async (input: string): Promise<boolean> => {
  if (input === CORRECTVOUCHER) {
    return true;
  } else {
    return false;
  }
};
