import { Link } from "react-router-dom";

export default function ClassSliderItem({ item }) {
  return (
    <li className="relative flex flex-col items-center justify-center">
      <Link to={`/class/${item.id}`}>
        <img src={item.asset.url} draggable={false} className="z-50 aspect-square h-24 max-w-none select-none rounded-lg object-cover" />
        <h4 className="my-2 w-24 truncate text-xs">{item.className}</h4>
      </Link>
    </li>
  );
}
