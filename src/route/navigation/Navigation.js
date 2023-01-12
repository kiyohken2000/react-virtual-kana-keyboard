import { BrowserRouter, Routes, Route } from "react-router-dom";
import { basename } from "../../config";
import Home from '../../screens/home/Home'
import Detail from '../../screens/detail/Detail'

export default function Navigation() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}