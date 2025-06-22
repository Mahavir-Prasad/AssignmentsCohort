import { useState } from "react";

export function Paragenerator() {
  const [input, setInput] = useState(0);
  const [para, setPara] = useState("");
  const [loading, setLoading] = useState(false);

  async function generate() {
    const count = parseInt(input);
    if (isNaN(count) || count <= 0) {
      setPara("Please enter a valid number.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`https://random-word-api.herokuapp.com/word?number=${count}`);
      const data = await res.json();
      setPara(data.join(" ") + ".");
    } catch {
      setPara("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-800 flex justify-center py-6 px-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-[1000px]">
        <h2 className="text-2xl font-bold mb-4 text-center">Paragraph Generator</h2>

        <div className="flex mb-4">
          <input
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter number of words"
            className="mr-4 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            onClick={generate}
            disabled={loading}
            className="h-10 rounded-md bg-slate-800 px-6 text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 hover:bg-slate-700 disabled:opacity-50"
          >
            {loading ? "Loading..." : "Generate"}
          </button>
        </div>

        {para ? (
          <p className="text-gray-700 bg-gray-100 p-4 rounded text-sm break-words">
            {para}
          </p>
        ) : null}
      </div>
    </div>
  );
}
