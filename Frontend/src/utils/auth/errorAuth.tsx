import React from "react";

export const errorAuth = (error: any) => {
  if (error?.response?.data?.error) {
    throw error.response.data.error;
  }
  throw error;
};

