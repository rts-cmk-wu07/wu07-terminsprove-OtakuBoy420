import leaveClass from "../../functions/leaveClass";
import signUpForClass from "../../functions/signUpForClass";
import WhiteButton from "./WhiteButton";
export default function SignUpButton({ setUserSavedDays, userSavedDays, classData, userData, isSignedUp, setIsSignedUp, userId, token, classId }) {
  return (
    <WhiteButton
      animated
      delay="0.1"
      title={isSignedUp ? "Leave" : "Sign Up"}
      className="h-fit"
      onClick={() => {
        if (isSignedUp) {
          leaveClass(classId, setIsSignedUp, token, userId, setUserSavedDays, userSavedDays, classData);
        } else signUpForClass(classData, classId, setIsSignedUp, token, userId, setUserSavedDays, userSavedDays);
      }}
    />
  );
}
