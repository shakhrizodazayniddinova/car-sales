import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-indigo-600">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mt-4">
          Oops! Sahifa topilmadi.
        </p>
        <p className="text-gray-600 mt-2">
          Siz izlagan sahifa mavjud emas yoki o'chirilgan.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-indigo-700"
        >
          Asosiy sahifaga qaytish
        </Link>
      </div>
    </div>
  );
}
