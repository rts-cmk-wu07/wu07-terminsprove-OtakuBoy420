import { HiUser } from "@react-icons/all-files/hi/HiUser";
import { HiLockClosed } from "@react-icons/all-files/hi/HiLockClosed";
import { useState } from "react";
import { useCookies } from "react-cookie";
export default function LoginForm() {
  const [cookies, setCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  function handleLogin() {
    // trim removes whitespace
    if (username.trim() === "" && password.trim() === "") {
      setErrorMessage("Please enter a username and password");
    } else if (username.trim() === "") {
      setErrorMessage("Please enter a username");
    } else if (password.trim() === "") {
      setErrorMessage("Please enter a password");
    } else {
      setErrorMessage("");
    }
  }
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2">
      <div className="relative w-full">
        <HiUser className="absolute left-1 translate-y-[52%] text-[#acacac]" />
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          className={
            errorMessage.includes("username") && username.trim() === ""
              ? "w-full rounded-lg border-2 border-red-500 bg-[#f1f0f5] py-1.5 pl-6 text-sm text-[#acacac] focus:border-black focus:outline-none"
              : "w-full rounded-lg border-2 border-gray bg-[#f1f0f5] py-1.5 pl-6 text-sm text-[#acacac] focus:border-black focus:outline-none"
          }
          placeholder="Username"
          aria-label="Username Field"
        />
      </div>
      <div className="relative w-full">
        <HiLockClosed className="absolute left-1 translate-y-[55%] text-[#acacac]" />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className={
            errorMessage.includes("password") && password.trim() === ""
              ? "w-full rounded-lg border-2 border-red-500 bg-[#f1f0f5] py-1.5 pl-6 text-sm text-[#acacac] focus:border-black focus:outline-none"
              : "w-full rounded-lg border-2 border-gray bg-[#f1f0f5] py-1.5 pl-6 text-sm text-[#acacac] focus:border-black focus:outline-none"
          }
          placeholder="Password"
          aria-label="Password Field"
        />
      </div>
      <button onClick={handleLogin} className="w-full rounded-lg border-2 border-gray bg-[#f1f0f5] py-1.5 px-5 text-sm text-[#acacac]" aria-label="Log in button">
        Log in
      </button>
      {errorMessage && <p className="text-center text-sm text-red-500">{errorMessage}</p>}
    </div>
  );
}
