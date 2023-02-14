import { Outlet } from "react-router";
import Navigation from "./components/global/Navigation";

export default function Layout() {
  return (
    <div className="flex h-screen w-screen flex-col overflow-y-auto overflow-x-hidden bg-white">
      <Navigation />
      <main className="h-fit p-5">
        <Outlet />
      </main>
    </div>
  );
}
