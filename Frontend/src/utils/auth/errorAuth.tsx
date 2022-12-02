import React from "react";

const errorAuth = (error: any) => {
  if (error?.response?.data?.error) {
    throw error.response.data.error;
  }
  throw error;
};

export default errorAuth;
