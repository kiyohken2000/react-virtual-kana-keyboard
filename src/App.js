import React from "react";
import Routes from "./route/Routes";
import { InitializeContextProvider } from './contexts/InitializeContext'
import { UserContextProvider } from './contexts/UserContext'

export default function App() {
  return (
    <InitializeContextProvider>
      <UserContextProvider>
        <Routes />
      </UserContextProvider>
    </InitializeContextProvider>
  )
}