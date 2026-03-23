import React, { useState, useRef, useEffect } from "react";

export default function Chatpot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hello 👋 How can I help you?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: input })
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: data.reply }
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "⚠️ Error connecting to AI" }
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* 🔥 Floating Button (LOGO بدل 💬) */}
      <div
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-[9999] cursor-pointer"
      >
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition">

          {/* LOGO */}
          <svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-8 h-8 text-white"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 5h-2v6h6v-2h-4V7z"
  />
</svg>

        </div>
      </div>

      {/* 🔥 Chat Box */}
      {open && (
        <div className="fixed bottom-24 right-6 w-96 bg-white rounded-2xl shadow-2xl z-[9999] flex flex-col overflow-hidden border">

          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-3 flex justify-between items-center">

            <div className="flex items-center ">
              
              <span className="text-sm font-semibold">kidney Ai</span>
            </div>

            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          {/* Messages */}
          <div className="p-3 h-72 overflow-y-auto flex flex-col gap-2 text-[15px]">

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`px-4 py-2.5 rounded-2xl max-w-[80%] shadow-sm ${
                  msg.role === "user"
                    ? "bg-blue-500 text-white self-end rounded-br-none"
                    : "bg-gray-100 text-gray-800 self-start rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {/* 🔥 Typing Animation */}
            {loading && (
              <div className="flex gap-1 self-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t p-2 flex gap-2 bg-white">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about kidney health..."
              className="flex-1 border rounded-full px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />

            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition shadow-md"
            >
              ➤
            </button>
          </div>

        </div>
      )}
    </>
  );
}