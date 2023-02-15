import { useContext, useEffect, useState } from "react";
import ImagePlaceholder from "../global/ImagePlaceholder";
import WhiteButton from "../buttons/WhiteButton";
import axios from "axios";
import IsAuthenticatedContext from "../../contexts/isAuthenticatedContext";
import { toast } from "react-toastify";
export default function ClassDetailsHero({ classData, id }) {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { isAuthenticated } = useContext(IsAuthenticatedContext);
  const token = document?.cookie?.split("=")[1]?.split(";")[0];
  const userId = document?.cookie?.split("=")[2]?.split(";")[0];
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
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
        <h1 className="text-shadow w-[65%] pl-4 text-xl leading-10 text-white">{classData?.className}</h1>
        {isAuthenticated ? (
          <WhiteButton
            title={isSignedUp ? "Leave" : "Sign Up"}
            className="h-fit"
            onClick={() => {
              if (isSignedUp) {
                axios
                  .delete(`${import.meta.env.VITE_API_URI}/users/${userId}/classes/${id}`, { headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" } })
                  .then((response) => {
                    console.log(response);
                  });
                setIsSignedUp(false);
                toast.success("You have successfully left this class!");
                return;
              }
              axios
                .post(`${import.meta.env.VITE_API_URI}/users/${userId}/classes/${id}`, {}, { headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" } })
                .then((response) => {
                  console.log(response);
                });
              setIsSignedUp(true);
              toast.success("You have successfully signed up for this class!");
            }}
          />
        ) : null}
      </div>
    </article>
  );
}
