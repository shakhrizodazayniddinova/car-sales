import { Link } from "react-router-dom";
import { Home, Store, Edit } from "lucide-react";

export default function Aside() {
  return (
    <aside className="w-[340px] h-screen bg-gray-50 pt-[35%] pl-[24px] shadow-md">
      <nav>
        <ul className="space-y-6">
          {/* Asosiy */}
          <li className="flex items-center space-x-4 text-gray-500 hover:text-black">
            <Home size={24} className="text-black" />
            
            <Link href="/user" className="text-[15px] font-medium">
              Asosiy
            </Link>
          </li>
          {/* E'lonlar */}
          <li className="flex items-center space-x-4 text-gray-500 hover:text-black">
            <Store size={24} className="text-black" />
            
            <Link href="/elonlar" className="text-[15px] font-medium">
              E'lonlar
            </Link>
          </li>
          {/* Savollar */}
          <li className="flex items-center space-x-4 text-gray-500 hover:text-black">
            <Edit size={24} className="text-black" />
            
            <Link href="/savollar" className="text-[15px] font-medium">
              Savollar
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
