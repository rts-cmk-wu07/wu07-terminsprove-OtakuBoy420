import axios from "axios";
import { toast } from "react-toastify";
export default function leaveClass(classId, setIsSignedUp, token, userId, setUserSavedDays, userSavedDays, classData) {
  axios.delete(`${import.meta.env.VITE_API_URI}/users/${userId}/classes/${classId}`, { headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" } });
  setIsSignedUp(false);
  setUserSavedDays(userSavedDays.filter((day) => day !== classData?.classDay));
  toast.success("You have successfully left this class!", {
    className: "toast-bottom-message",
  });

  return;
}
