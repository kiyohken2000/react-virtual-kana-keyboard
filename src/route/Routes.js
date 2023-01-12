import React, { useContext } from "react";
import { InitializeContext } from "../contexts/InitializeContext";
import { UserContext } from '../contexts/UserContext'
import Initialize from "../screens/initialize/Initialize";
import Navigation from "./navigation/Navigation";
import LoginNavigation from "./navigation/LoginNavigation";

export default function Routes() {
  const { isInitialized } = useContext(InitializeContext)
  const { user } = useContext(UserContext)

  if(!isInitialized) {
    return (
      <Initialize />
    )
  }

  return (
    <>
    {user?
      <Navigation />
      :
      <LoginNavigation />
    }
    </>
  )
}