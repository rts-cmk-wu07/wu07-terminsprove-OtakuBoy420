import { HiMenuAlt3 } from "@react-icons/all-files/hi/HiMenuAlt3"
import { IoTriangleSharp } from "@react-icons/all-files/io5/IoTriangleSharp"
export default function Navigation() {
  return (
    <header className="flex items-center justify-between bg-white p-4">
      <div className="flex w-full items-center justify-between">
        <IoTriangleSharp className="text-xl text-gray" />
        <h1 className="text-xl  text-black">Title</h1>
        <HiMenuAlt3 className="text-xl text-gray" />
      </div>
    </header>
  )
}
