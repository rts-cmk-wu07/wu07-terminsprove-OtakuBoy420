import IsAuthenticatedContext from "../../contexts/isAuthenticatedContext";
import { useContext } from "react";
export default function LogOutButton() {
  const { setIsAuthenticated } = useContext(IsAuthenticatedContext);
  return (
    <button
      className="text-lg"
      onClick={() => {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "validUntil=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setIsAuthenticated(false);
      }}>
      Log out
    </button>
  );
}
