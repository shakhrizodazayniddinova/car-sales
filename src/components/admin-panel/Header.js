import { Bell, User } from "lucide-react"; // for Lucide-react icons

export default function Header() {
  return (
    <header className="flex justify-between items-center px-4 py-2 bg-white border-b border-gray-200">
      {/* Chap tomondagi tugma */}
      <div className="flex items-center gap-2">
        <button className="h-[48px] w-[192px] flex items-center justify-center gap-2 text-white bg-blue-600 rounded-[12px] hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
          <User size={24} />
          <span style={{fontSize: '15px'}}>Asosiyga qaytish</span>
        </button>
      </div>

      {/* O'ng tomondagi belgi va avatar */}
      <div className="flex items-center gap-4">
        {/* Notification bell */}
        <div className="relative">
          <Bell size={24} className="text-gray-500 hover:text-gray-700 cursor-pointer" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        {/* Avatar */}
        <div className="w-10 h-10 flex items-center justify-center">
          <img
            src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
            alt="Avatar"
            className="w-full h-full object-cover cursor-pointer rounded-full"
          />
        </div>
      </div>
    </header>
  );
}
