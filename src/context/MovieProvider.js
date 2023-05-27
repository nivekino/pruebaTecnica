import React, { useState } from "react";
import { MovieContext } from "./MovieContext";
import axios from "axios";

export const MovieProvider = ({ children }) => {

  return (
    <MovieContext.Provider
      value={{
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
