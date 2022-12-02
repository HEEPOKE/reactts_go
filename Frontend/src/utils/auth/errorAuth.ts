export const errorAuth = (err: any) => {
  if (err?.response?.data?.err) {
    throw err.response.data.err;
  }
  throw err;
};

