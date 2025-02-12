import { Link, useLocation } from "react-router-dom";
import { Home, Store, Edit } from "lucide-react";

export default function Aside() {
  const location = useLocation();

  const getLinkStyle = (path) => {
    return location.pathname === path ? "text-black" : "text-gray-500";
  }

  return (
    <aside className="w-[340px] h-screen bg-gray-50 pt-[35%] pl-[24px] shadow-md">
      <nav>
        <ul className="space-y-6">
          {/* Asosiy */}
          <li className={`flex items-center space-x-4 hover:text-black ${getLinkStyle("/user")}`}>
            <Home size={24} className="text-black" />
            
            <Link to="/user" className="text-[15px] font-medium">
              Asosiy
            </Link>
          </li>

          {/* E'lonlar */}
          <li className={`flex items-center space-x-4 hover:text-black ${getLinkStyle("/elonlar")}`}>
            <Store size={24} className="text-black" />
            
            <Link to="/elonlar" className="text-[15px] font-medium">
              E'lonlar
            </Link>
          </li>

          {/* Savollar */}
          <li className={`flex items-center space-x-4 hover:text-black ${getLinkStyle("/savollar")}`}>
            <Edit size={24} className="text-black" />
            
            <Link to="/savollar" className="text-[15px] font-medium">
              Savollar
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
