import { BrowserRouter, Routes, Route } from "react-router-dom";
import { basename } from "../../config";
import Login from "../../screens/login/Login";

export default function LoginNavigation() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}