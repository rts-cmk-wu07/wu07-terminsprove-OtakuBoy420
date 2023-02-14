export default function Loader({ size }) {
  return <div className={`${size ? `h-${size} w-${size}` : "h-5 w-5"} animate-spin  rounded-full border-2 border-solid border-inputText border-t-transparent`} />;
}
