import React, { createContext, useState } from "react";

export const InitializeContext = createContext();

export const InitializeContextProvider = (props) => {
  const [isInitialized, setIsInitialized] = useState(false)

  return (
    <InitializeContext.Provider
      value={{
        isInitialized, setIsInitialized
      }}
    >
      {props.children}
    </InitializeContext.Provider>
  )
}