import { useState } from "react";

export function Bgchanger() {
  const [bgcolor, setBgcolor] = useState("white");

  return (
    <div className={`flex flex-col items-center justify-center h-screen gap-4 bg-${bgcolor}`}>
      <div className="flex gap-2">
        <button
          onClick={() => setBgcolor("black")}
          className="px-5 py-2 rounded-full bg-black text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200"
        >
          Black
        </button>
        <button
          onClick={() => setBgcolor("yellow-300")}
          className="px-5 py-2 rounded-full bg-yellow-300 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200"
        >
          Yellow
        </button>
        <button
          onClick={() => setBgcolor("red-500")}
          className="px-5 py-2 rounded-full bg-red-500 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200"
        >
          Red
        </button>
        <button
          onClick={() => setBgcolor("purple-500")}
          className="px-5 py-2 rounded-full bg-purple-500 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200"
        >
          Purple
        </button>
        <button
          onClick={() => setBgcolor("green-500")}
          className="px-5 py-2 rounded-full bg-green-500 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200"
        >
          Green
        </button>
        <button
          onClick={() => setBgcolor("pink-500")}
          className="px-5 py-2 rounded-full bg-pink-500 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200"
        >
          Pink
        </button>
        <button
          onClick={() => setBgcolor("orange-500")}
          className="px-5 py-2 rounded-full bg-orange-500 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200"
        >
          Orange
        </button>
      </div>
    </div>
  );
}
