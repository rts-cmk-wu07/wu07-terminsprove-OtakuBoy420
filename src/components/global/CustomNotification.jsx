import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CustomToastContainer() {
  return (
    <ToastContainer
      position="bottom-center"
      autoClose={1500}
      toastStyle={{
        background: "#fff",
        color: "black",
        fontSize: "0.75rem",
        fontWeight: "500",
        borderRadius: "15px",
        paddingInline: "1rem",
        marginInline: "0.5rem",
        marginTop: "1rem",
        marginBottom: "1rem",
      }}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
}
