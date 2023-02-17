import axios from "axios";
import { toast } from "react-toastify";
export default function signUpForClass(classData, classId, setIsSignedUp, token, userId, setUserSavedDays, userSavedDays) {
  if (userSavedDays.includes(classData?.classDay)) {
    toast.error(`You're already signed up for a class on ${classData?.classDay ? classData?.classDay : "this day"}`, {
      className: "toast-bottom-message",
      autoClose: 5000,
    });
    return;
  }
  axios.post(`${import.meta.env.VITE_API_URI}/users/${userId}/classes/${classId}`, {}, { headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" } });
  setIsSignedUp(true);
  setUserSavedDays([...userSavedDays, classData?.classDay]);
  toast.success("You have successfully signed up for this class!", {
    className: "toast-bottom-message",
  });
  return;
}
