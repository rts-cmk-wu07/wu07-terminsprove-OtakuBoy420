export default function Loader({ size }) {
  return (
    <div
      className={`${size ? `h-${size} w-${size} border-${size > 20 ? "4" : "2"}` : "h-5 w-5 border-2"} m-auto animate-spin rounded-full border-solid border-inputText border-t-transparent`}
    />
  );
}
