export default function WhiteButton({ title, onClick, className }) {
  return (
    <button className={"shadow-3xl z-20 flex items-center justify-center rounded-l-lg bg-white py-3 px-3 leading-5 shadow-primary " + className} onClick={onClick}>
      <span className="text-base">{title}</span>
    </button>
  );
}
