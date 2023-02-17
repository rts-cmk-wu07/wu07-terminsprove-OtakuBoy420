import { useContext, useEffect, useState } from "react";
import ImagePlaceholder from "../global/ImagePlaceholder";
import IsAuthenticatedContext from "../../contexts/isAuthenticatedContext";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";
import SignUpButton from "../buttons/SignUpButton";
export default function ClassDetailsHero({ classData, classId, userData, userId, token }) {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { isAuthenticated } = useContext(IsAuthenticatedContext);
  const [userSavedDays, setUserSavedDays] = useState([]);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  useEffect(() => {
    if (!userData) return;
    setUserSavedDays(userData?.classes?.map((userClassData) => userClassData?.classDay));
  }, [userData]);

  useEffect(() => {
    if (!classData) return;
    if (classData?.users?.map((user) => user.id)?.includes(Number(userId))) {
      setIsSignedUp(true);
    }
  }, [classData]);
  return (
    <article className="relative flex h-[60vh] flex-col">
      {!imageLoaded && <ImagePlaceholder size="[60vh]" />}
      <img onLoad={handleImageLoad} className={imageLoaded ? "absolute top-0 h-[60vh] w-full object-cover" : "hidden"} src={classData?.asset?.url} />
      <div className="absolute left-0 bottom-4 flex w-full items-end justify-between gap-1">
        <motion.h1 initial="hidden" whileInView="show" variants={textVariant(0.1)} className="text-shadow w-[65%] pl-4 text-xl leading-10 text-white">
          {classData?.className}
        </motion.h1>
        {isAuthenticated ? (
          <SignUpButton
            setUserSavedDays={setUserSavedDays}
            userSavedDays={userSavedDays}
            classData={classData}
            userData={userData}
            isSignedUp={isSignedUp}
            setIsSignedUp={setIsSignedUp}
            classId={classId}
            userId={userId}
            token={token}
          />
        ) : null}
      </div>
    </article>
  );
}
