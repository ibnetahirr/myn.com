"use client";

import { useState, useRef, useEffect } from "react";
import styles from "../YogaAi.module.css";

type Msg = { id: number; from: "user" | "bot"; text: string; time: string };

export default function YogaAi() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const messagesRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Load messages
  useEffect(() => {
    const saved = localStorage.getItem("yogaChat");
    if (saved) setMessages(JSON.parse(saved));
    else
      setMessages([
        {
          id: 1,
          from: "bot",
          text: "👋 Hi! I’m your Yoga AI Assistant. How can I help you today?",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
  }, []);

  // Save messages & auto-scroll
  useEffect(() => {
    localStorage.setItem("yogaChat", JSON.stringify(messages));
    messagesRef.current?.scrollTo({ top: messagesRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (msgText?: string) => {
    const text = msgText ?? input;
    if (!text.trim()) return;

    const userMsg: Msg = {
      id: Date.now(),
      from: "user",
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    inputRef.current?.focus();
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();

      setTimeout(() => {
        const botMsg: Msg = {
          id: Date.now() + 1,
          from: "bot",
          text: data.reply,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
        setMessages((prev) => [...prev, botMsg]);

        if ("speechSynthesis" in window)
          window.speechSynthesis.speak(new SpeechSynthesisUtterance(botMsg.text));

        setLoading(false);
      }, 800);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 2,
          from: "bot",
          text: "⚠️ Error connecting to server. Please try again.",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage();
  };

  const startListening = () => {
    const SpeechRecognition =
      (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    if (!SpeechRecognition)
      return alert("Speech recognition not supported in this browser.");
    const rec = new SpeechRecognition();
    rec.lang = "en-US";
    rec.start();
    setListening(true);
    rec.onresult = (event: any) => setInput(event.results[0][0].transcript);
    rec.onend = () => setListening(false);
  };

  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem("yogaChat");
  };

  const quickReplies = ["Show yoga poses", "Meditation tips", "Morning routine"];

  // Sidebar button handlers
  const handleNewChat = () => {
    clearChat();
    setSidebarOpen(false);
  };
  const handleHistory = () => {
    alert("History feature coming soon!");
  };
  const handleProfile = () => {
    alert("Profile settings coming soon!");
  };

  return (
    <div><h3>Coming soon</h3></div>
    // <div className={styles.mainWrapper}>
    //   {/* Sidebar */}
    //   <div className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}>
    //     <button className={styles.closeSidebar} onClick={() => setSidebarOpen(false)}>
    //       ×
    //     </button>
    //     <h3>Settings</h3>
    //     <ul>
    //       <li onClick={handleProfile}>Profile</li>
    //       <li onClick={handleHistory}>History</li>
    //       <li onClick={handleNewChat}>New Chat</li>
    //     </ul>
    //   </div>

    //   {/* Chat Container */}
    //   <div className={`${styles.chatContainer} ${sidebarOpen ? styles.shifted : ""}`}>
    //     <div className={styles.topBar}>
    //       <button className={styles.menuBtn} onClick={() => setSidebarOpen(!sidebarOpen)}>
    //         ☰
    //       </button>
    //       Yoga AI Assistant
    //     </div>

    //     {/* Messages */}
    //     <div className={styles.messages} ref={messagesRef}>
    //       {messages.map((m) => (
    //         <div key={m.id} className={m.from === "user" ? styles.msgUser : styles.msgBot}>
    //           <div className={styles.msgBubble}>
    //             {m.text}
    //             <div className={styles.msgTime}>{m.time}</div>
    //           </div>
    //         </div>
    //       ))}
    //       {loading && <div className={styles.typing}>Yoga AI is thinking...</div>}
    //     </div>

    //     {/* Quick Replies */}
    //     <div className={styles.quickReplies}>
    //       {quickReplies.map((q) => (
    //         <button key={q} onClick={() => sendMessage(q)} className={styles.quickReplyBtn}>
    //           {q}
    //         </button>
    //       ))}
    //     </div>

    //     {/* Input */}
    //     <form className={styles.chatForm} onSubmit={handleSubmit}>
    //       <input
    //         ref={inputRef}
    //         type="text"
    //         placeholder="Ask about yoga poses or routines..."
    //         className={styles.input}
    //         value={input}
    //         onChange={(e) => setInput(e.target.value)}
    //         disabled={loading}
    //       />
    //       <button type="button" className={styles.micBtn} onClick={startListening}>
    //         {listening ? "🎙" : "🎤"}
    //       </button>
    //       <button type="submit" className={styles.sendBtn} disabled={loading || !input.trim()}>
    //         ➤
    //       </button>
    //     </form>
    //   </div>
    // </div>
  );
}
