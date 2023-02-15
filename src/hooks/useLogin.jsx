import { useContext, useState } from "react";
import IsAuthenticatedContext from "../contexts/isAuthenticatedContext";

import { toast } from "react-toastify";
export default function useLogin() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { setIsAuthenticated } = useContext(IsAuthenticatedContext);

  const handleLogin = async (username, password) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_AUTH_URI}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      if (response.ok) {
        const data = await response.json();

        document.cookie = `token=${data.token};path=/;SameSite=None;Secure;`;
        document.cookie = `userId=${data.userId};path=/;SameSite=None;Secure;`;
        document.cookie = `validUntil=${data.validUntil};path=/;SameSite=None;Secure;`;
        setIsAuthenticated(true);
        toast.success("You have successfully logged in!");
      } else {
        setErrorMessage(response.status === 401 ? "Invalid username or password" : "Something went wrong, please try again later");
        toast.error(response.status === 401 ? "Invalid username or password" : "Something went wrong, please try again later");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong, please try again later");
    } finally {
      setIsLoading(false);
    }
  };

  return { handleLogin, errorMessage, isLoading };
}
