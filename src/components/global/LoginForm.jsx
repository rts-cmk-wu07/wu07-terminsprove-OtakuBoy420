import Loader from "./Loader";
import { HiUser } from "@react-icons/all-files/hi/HiUser";
import { HiLockClosed } from "@react-icons/all-files/hi/HiLockClosed";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";
import { toast } from "react-toastify";
export default function LoginForm() {
  const { handleLogin, errorMessage, isLoading } = useLogin();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState("");
  const isPasswordValid = validationError.includes("password") && password.trim() === "";
  const isUsernameValid = validationError.includes("username") && username.trim() === "";
  function checkForEmptyFields() {
    // trim removes whitespace
    if (username.trim() === "" && password.trim() === "") {
      toast.error("Please enter a username and password");
      setValidationError("Please enter a username and password");
    } else if (username.trim() === "") {
      toast.error("Please enter a username");
      setValidationError("Please enter a username");
    } else if (password.trim() === "") {
      toast.error("Please enter a password");
      setValidationError("Please enter a password");
    } else {
      setValidationError("");
      handleLogin(username, password);
    }
  }
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2">
      <div className="relative w-full">
        <HiUser className="absolute left-1 translate-y-[52%] text-inputText" />
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          className={`w-full rounded-lg border-2  ${isUsernameValid ? "border-red-500" : "border-gray"} bg-inputBg py-1.5 pl-6 text-sm text-inputText focus:border-black focus:outline-none`}
          placeholder="Username"
          aria-label="Username Field"
        />
      </div>
      <div className="relative w-full">
        <HiLockClosed className="absolute left-1 translate-y-[55%] text-inputText" />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className={`w-full rounded-lg border-2  ${isPasswordValid ? "border-red-500" : "border-gray"} bg-inputBg py-1.5 pl-6 text-sm text-inputText focus:border-black focus:outline-none`}
          placeholder="Password"
          aria-label="Password Field"
        />
      </div>
      <button
        onClick={checkForEmptyFields}
        className="flex w-full items-center justify-center rounded-lg border-2 border-gray bg-inputBg py-1.5 px-5 text-sm text-inputText"
        aria-label="Log in button">
        {isLoading ? <Loader /> : "Log in"}
      </button>
      {validationError && <p className="text-center text-sm text-red-500">{validationError}</p>}
      {errorMessage && <p className="text-center text-sm text-red-500">{errorMessage}</p>}
    </div>
  );
}
