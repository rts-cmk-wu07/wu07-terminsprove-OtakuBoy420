import { HiUser } from "@react-icons/all-files/hi/HiUser"
import { HiLockClosed } from "@react-icons/all-files/hi/HiLockClosed"
export default function LoginForm() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2">
      <div className="relative w-full">
        <HiUser className="absolute left-1 translate-y-[52%] text-[#acacac]" />
        <input
          type="text"
          className="w-full rounded-lg border-2 border-gray bg-[#f1f0f5] py-1.5 pl-6 text-sm text-[#acacac] focus:border-black focus:outline-none"
          placeholder="Username"
          aria-label="Username Field"
        />
      </div>
      <div className="relative w-full">
        <HiLockClosed className="absolute left-1 translate-y-[55%] text-[#acacac]" />
        <input
          type="password"
          className="w-full rounded-lg border-2 border-gray bg-[#f1f0f5] py-1.5 pl-6 text-sm text-[#acacac] focus:border-black focus:outline-none"
          placeholder="Password"
          aria-label="Password Field"
        />
      </div>
      <button className="w-full rounded-lg border-2 border-gray bg-[#f1f0f5] py-1.5 px-5 text-sm text-[#acacac]" aria-label="Log in button">
        Log in
      </button>
    </div>
  )
}
