import { Route, Routes } from "react-router"
import Layout from "../../Layout"
import Home from "../../pages/Home"

export default function Router() {
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}
