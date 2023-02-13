import { HiMenuAlt3 } from "@react-icons/all-files/hi/HiMenuAlt3"
import { IoTriangleSharp } from "@react-icons/all-files/io5/IoTriangleSharp"
import { useContext } from "react"
import NavigationTitleContext from "../../contexts/NavigationTitleContext"
export default function Navigation() {
  const { navigationTitle } = useContext(NavigationTitleContext)
  return (
    <header className="flex items-center justify-between bg-white p-4">
      <div className="flex w-full items-center justify-between">
        <IoTriangleSharp className="text-lg text-gray" />
        <h1 className="text-[1.75rem] text-black">{navigationTitle ? navigationTitle : ""}</h1>
        <HiMenuAlt3 className="text-lg text-gray" />
      </div>
    </header>
  )
}
