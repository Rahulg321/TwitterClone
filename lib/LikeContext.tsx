"use client";

import React, { useState, useEffect } from "react";
import { Provider } from "@lyket/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider
      apiKey="pt_ac7b001e382908780b6407c7a4fe70"
      theme={{
        colors: {
          text: "gray",
        },
      }}
    >
      {children}
    </Provider>
  );
};

export default Providers;
