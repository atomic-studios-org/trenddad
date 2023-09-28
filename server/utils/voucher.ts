const CORRECTVOUCHER = "DADDY10";

const checkCode = async (input: string): Promise<boolean> => {
    if (input === CORRECTVOUCHER) {
      return true;
    } else {
      return false;
    }
  };