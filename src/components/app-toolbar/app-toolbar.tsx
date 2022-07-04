//import "./app-toolbar.scss";
import { Link } from "react-router-dom";

type AppToolbarProps = {
  nick: string;
};

export function AppToolbar(props: AppToolbarProps) {
  return (
    <nav className="w-full bg-gray-800 fixed top-0">
      <div className="container mx-auto px-2">
        <div className="relative flex items-center justify-between h-12">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <label className="text-white font-semibold">elenchus</label>
            </div>
            <div className="flex space-x-4 ml-8">
              <Link
                to="/box"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Files
              </Link>

              <Link
                to="/admin/user"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Administration
              </Link>
            </div>
          </div>
          <div className="right-0 flex pr-2">
            <span className="text-white">{props.nick}</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
