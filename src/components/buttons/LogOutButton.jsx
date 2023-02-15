import IsAuthenticatedContext from "../../contexts/isAuthenticatedContext";
import { useContext } from "react";
import { toast } from "react-toastify";
export default function LogOutButton() {
  const { setIsAuthenticated } = useContext(IsAuthenticatedContext);
  return (
    <button
      className="rounded-xl border-2 py-1 px-6  text-lg"
      onClick={() => {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "validUntil=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setIsAuthenticated(false);
        toast.success("You have successfully logged out!");
      }}>
      Log out
    </button>
  );
}
