import { Route, Routes } from "react-router"
import NavigationTitleContext from "../../contexts/NavigationTitleContext"
import Layout from "../../Layout"
import Home from "../../pages/Home"
import { useLocation } from "react-router"
import { useState } from "react"
import NotFound from "../../pages/NotFound"
export default function Router() {
  const location = useLocation()
  const [navigationTitle, setNavigationTitle] = useState("Home")
  return (
    <NavigationTitleContext.Provider
      value={{
        navigationTitle,
        setNavigationTitle,
      }}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </NavigationTitleContext.Provider>
  )
}
