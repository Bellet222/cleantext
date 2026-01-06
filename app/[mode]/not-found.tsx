import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100 px-4">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">404</h1>
      <p className="text-xl sm:text-2xl mb-8 text-center">
        Инструмент не найден
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-linear-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
      >
        Вернуться на главную
      </Link>
    </div>
  );
}

