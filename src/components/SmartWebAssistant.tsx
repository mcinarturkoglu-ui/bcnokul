"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Sparkles,
  Send,
  X,
  ExternalLink,
  RotateCcw,
  ShieldCheck,
  Phone,
  Calendar,
  Compass,
  Settings,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import { useModal } from "@/context/ModalContext";
import {
  processUserMessage,
  AssistantAction,
  AssistantSource,
  PageAgentConfigState,
} from "@/lib/pageAgentService";
import { SUGGESTED_QUESTIONS } from "@/data/bcnKnowledgeIndex";

interface ChatMessage {
  id: string;
  sender: "assistant" | "user";
  text: string;
  sources?: AssistantSource[];
  actions?: AssistantAction[];
  isFallback?: boolean;
  timestamp: string;
}

const INITIAL_MESSAGE: ChatMessage = {
  id: "msg-welcome",
  sender: "assistant",
  text: "Merhaba! 👋\nWeb sitemize hoş geldiniz. Size nasıl yardımcı olabilirim?\nHizmetlerimiz, başvurular ve merak ettiğiniz diğer konularda bana sorular sorabilirsiniz.",
  sources: [],
  actions: [
    {
      type: "OPEN_ADMISSION_MODAL",
      label: "Randevu Formu Aç",
      payload: "randevu",
    },
    {
      type: "NAVIGATE",
      label: "İletişim Bilgileri",
      payload: "/iletisim",
    },
  ],
  timestamp: "Şimdi",
};

export default function SmartWebAssistant() {
  const router = useRouter();
  const pathname = usePathname();
  const { openAdmission } = useModal();

  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [isTyping, setIsTyping] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Alibaba Page Agent optional BYO config
  const [pageAgentConfig, setPageAgentConfig] = useState<PageAgentConfigState>({
    enabled: false,
    apiKey: "",
    baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1",
    model: "qwen-plus",
  });

  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Restore messages from sessionStorage on initial mount for continuous session
  useEffect(() => {
    try {
      const savedMessages = sessionStorage.getItem("bcn_chat_history");
      if (savedMessages) {
        setMessages(JSON.parse(savedMessages));
      }
      const savedConfig = localStorage.getItem("bcn_pageagent_config");
      if (savedConfig) {
        setPageAgentConfig(JSON.parse(savedConfig));
      }
    } catch {
      // ignore
    }
  }, []);

  // Save messages to sessionStorage when updated
  useEffect(() => {
    try {
      if (messages.length > 0) {
        sessionStorage.setItem("bcn_chat_history", JSON.stringify(messages));
      }
    } catch {
      // ignore
    }
  }, [messages]);

  // Scroll to bottom on new message or typing state change
  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputVal).trim();
    if (!text || isTyping) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString("tr-TR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setIsTyping(true);

    try {
      // Process query using Verified RAG & Action Dispatcher
      const result = await processUserMessage(text, pathname);

      // Short delay for natural typing rhythm
      await new Promise((resolve) => setTimeout(resolve, 350));

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: "assistant",
        text: result.answer,
        sources: result.sources,
        actions: result.actions,
        isFallback: result.isFallback,
        timestamp: new Date().toLocaleTimeString("tr-TR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-err-${Date.now()}`,
          sender: "assistant",
          text: "Bağlantı sırasında bir hata oluştu. Lütfen tekrar deneyiniz veya iletişim sayfamızdan bize ulaşınız.",
          sources: [{ title: "İletişim", route: "/iletisim" }],
          actions: [
            {
              type: "NAVIGATE",
              label: "İletişim Sayfasına Git",
              payload: "/iletisim",
            },
          ],
          isFallback: true,
          timestamp: "Şimdi",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleActionClick = (action: AssistantAction) => {
    switch (action.type) {
      case "NAVIGATE":
        router.push(action.payload);
        // keep open or minimize on mobile
        if (window.innerWidth < 640) setIsOpen(false);
        break;
      case "OPEN_ADMISSION_MODAL":
        openAdmission();
        if (window.innerWidth < 640) setIsOpen(false);
        break;
      case "CALL_PHONE":
        window.location.href = `tel:${action.payload}`;
        break;
      case "SCROLL_TO":
        const target = document.querySelector(action.payload);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
          if (window.innerWidth < 640) setIsOpen(false);
        }
        break;
    }
  };

  const handleResetChat = () => {
    setMessages([INITIAL_MESSAGE]);
    sessionStorage.removeItem("bcn_chat_history");
  };

  const savePageAgentConfig = (cfg: PageAgentConfigState) => {
    setPageAgentConfig(cfg);
    localStorage.setItem("bcn_pageagent_config", JSON.stringify(cfg));
    setIsSettingsOpen(false);
  };

  return (
    <>
      {/* Floating Launcher Pill Button (Prominent & Luxury) */}
      <aside aria-label="BCN Akıllı Web Asistanı Bileşeni">
      <div className="fixed bottom-20 right-3 sm:bottom-24 sm:right-6 z-40">
        <motion.button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className={`flex items-center gap-2.5 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full shadow-2xl transition-all duration-300 border border-white/20 backdrop-blur-md cursor-pointer ${
            isOpen
              ? "bg-[#17263D] text-white ring-2 ring-[#C59B27]/40"
              : "bg-gradient-to-r from-[#17263D] via-[#1E3A8A] to-[#17263D] text-white hover:shadow-[#1E3A8A]/40"
          }`}
          aria-label="BCN Akıllı Asistanı Aç"
        >
          <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-[#C59B27] to-amber-300 flex items-center justify-center text-[#17263D] shadow-inner font-bold">
            <Sparkles className="w-4 h-4 text-[#17263D] animate-spin-slow" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#17263D]" />
          </div>

          <div className="text-left hidden sm:block">
            <div className="text-xs font-bold tracking-wide flex items-center gap-1.5 text-white">
              <span>BCN Asistan</span>
              <span className="text-[9px] font-semibold uppercase px-1.5 py-0.5 rounded-full bg-[#C59B27] text-slate-900 tracking-wider">
                AI
              </span>
            </div>
            <div className="text-[10px] text-slate-300 font-medium">
              Doğrulanmış Web Rehberi
            </div>
          </div>

          <span className="sm:hidden text-xs font-bold pr-1">Asistan</span>
        </motion.button>
      </div>

      {/* Main Chat Interface Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-24px)] sm:w-[420px] max-w-[440px] h-[84vh] sm:h-[600px] max-h-[640px] bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200/90 flex flex-col overflow-hidden text-[#17263D] font-sans"
          >
            {/* Window Header */}
            <header className="relative px-5 py-4 bg-gradient-to-r from-[#17263D] via-[#1E3A8A] to-[#17263D] text-white flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#C59B27] to-amber-200 p-0.5 shadow-md flex items-center justify-center">
                  <div className="w-full h-full rounded-[14px] bg-[#17263D] flex items-center justify-center text-amber-400">
                    <Bot className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold tracking-tight text-white">
                      BCN Akıllı Web Asistanı
                    </h3>
                    <span className="inline-flex items-center gap-1 text-[9px] font-semibold uppercase px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Canlı
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#C59B27]" />
                    Doğrulanmış Site İçerik Motoru
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 text-slate-300">
                <button
                  type="button"
                  onClick={handleResetChat}
                  title="Sohbeti Temizle"
                  className="p-1.5 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                  aria-label="Sohbeti Temizle"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsSettingsOpen(true)}
                  title="Page Agent Ayarları"
                  className="p-1.5 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                  aria-label="Ayarlar"
                >
                  <Settings className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  title="Kapat"
                  className="p-1.5 hover:text-white hover:bg-white/10 rounded-lg transition-colors ml-1 cursor-pointer"
                  aria-label="Asistanı Kapat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </header>

            {/* Sub-header Notice / Page Context */}
            <div className="px-4 py-2 bg-slate-50 border-b border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1 font-medium">
                <Compass className="w-3 h-3 text-[#1E3A8A]" />
                Aktif Sayfa:{" "}
                <span className="text-[#17263D] font-semibold">{pathname}</span>
              </span>
              <span className="text-[10px] text-slate-400">
                Alibaba Page Agent v1.12
              </span>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 text-xs scrollbar-thin scrollbar-thumb-slate-200">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl p-3.5 leading-relaxed shadow-sm ${
                      msg.sender === "user"
                        ? "bg-[#17263D] text-white rounded-br-none"
                        : msg.isFallback
                        ? "bg-amber-50/80 text-amber-950 border border-amber-200 rounded-bl-none"
                        : "bg-slate-100/90 text-slate-800 border border-slate-200/80 rounded-bl-none"
                    }`}
                  >
                    <div className="whitespace-pre-line font-normal text-[12.5px]">
                      {msg.text}
                    </div>

                    {/* Sources Badge */}
                    {msg.sources && msg.sources.length > 0 && (
                      <div className="mt-3 pt-2.5 border-t border-slate-200/60 flex flex-wrap gap-1.5 items-center">
                        <span className="text-[10px] font-semibold text-slate-500">
                          Kaynak:
                        </span>
                        {msg.sources.map((s, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => {
                              router.push(s.route);
                              if (window.innerWidth < 640) setIsOpen(false);
                            }}
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white text-[#1E3A8A] font-semibold text-[10.5px] border border-blue-200 hover:bg-blue-50 transition-colors shadow-2xs cursor-pointer"
                          >
                            <span>{s.title}</span>
                            <ExternalLink className="w-2.5 h-2.5 text-blue-500" />
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Direct Action Buttons */}
                    {msg.actions && msg.actions.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {msg.actions.map((act, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => handleActionClick(act)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#17263D] to-[#1E3A8A] text-white font-bold text-[11px] shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
                          >
                            {act.type === "OPEN_ADMISSION_MODAL" && (
                              <Calendar className="w-3 h-3 text-amber-400" />
                            )}
                            {act.type === "NAVIGATE" && (
                              <ArrowRight className="w-3 h-3 text-blue-300" />
                            )}
                            {act.type === "CALL_PHONE" && (
                              <Phone className="w-3 h-3 text-emerald-400" />
                            )}
                            <span>{act.label}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <span className="text-[10px] text-slate-400 mt-1 px-1">
                    {msg.timestamp}
                  </span>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-2xl w-fit border border-slate-200 text-slate-500 text-xs">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#1E3A8A] animate-bounce" />
                    <span
                      className="w-2 h-2 rounded-full bg-[#C59B27] animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className="w-2 h-2 rounded-full bg-[#17263D] animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                  <span className="text-[11px] font-medium text-slate-600">
                    Doğrulanmış bilgiler taranıyor...
                  </span>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Suggested Chips Carousel */}
            {messages.length <= 3 && !isTyping && (
              <div className="px-4 py-2 border-t border-slate-100 bg-slate-50/70">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#C59B27]" />
                  Önerilen Hızlı Sorular
                </div>
                <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                  {SUGGESTED_QUESTIONS.map((q, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSendMessage(q)}
                      className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-[11px] hover:border-[#1E3A8A] hover:text-[#1E3A8A] hover:bg-blue-50/50 transition-all cursor-pointer font-medium shadow-2xs"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-white border-t border-slate-100 flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Örn: Kanada OSSD nedir, randevu nasıl alınır?"
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30 focus:border-[#1E3A8A] transition-all font-medium"
              />

              <button
                type="submit"
                disabled={!inputVal.trim() || isTyping}
                className="w-10 h-10 rounded-xl bg-[#17263D] text-white flex items-center justify-center hover:bg-[#1E3A8A] active:scale-95 disabled:opacity-40 disabled:pointer-events-none transition-all shadow-md cursor-pointer"
                aria-label="Gönder"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            {/* Footer Tag */}
            <footer className="px-4 py-1.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                Sıfır Maliyet • Yerel Doğrulanmış RAG Motoru
              </span>
              <button
                type="button"
                onClick={() => setIsSettingsOpen(true)}
                className="hover:text-slate-600 transition-colors cursor-pointer"
              >
                Model Ayarı
              </button>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Settings Modal (Alibaba PageAgent Configuration) */}
      <AnimatePresence>
        {isSettingsOpen && (
          <div className="fixed inset-0 z-60 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-slate-200 text-slate-800"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#1E3A8A] flex items-center justify-center">
                    <Settings className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#17263D]">
                      Alibaba Page Agent Ayarları
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      Özerk Tarayıcı & Model Entegrasyonu
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsSettingsOpen(false)}
                  className="p-1 text-slate-400 hover:text-slate-600 rounded-lg cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-4 space-y-4 text-xs">
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-[11px] leading-relaxed">
                  <span className="font-bold">Aktif Çalışma Modu:</span> Varsayılan
                  olarak web sitemiz{" "}
                  <strong>ücretsiz ve sıfır API maliyeti</strong> olan BCN Doğrulanmış
                  İçerik & Eylem Motorunu kullanır. Dilerseniz kendi OpenAI / Qwen /
                  Ollama modelinizi bağlayabilirsiniz.
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-700">
                    Özerk DOM Ajanı (Page Agent)
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="enablePageAgent"
                      checked={pageAgentConfig.enabled}
                      onChange={(e) =>
                        setPageAgentConfig({
                          ...pageAgentConfig,
                          enabled: e.target.checked,
                        })
                      }
                      className="w-4 h-4 rounded text-[#1E3A8A]"
                    />
                    <label
                      htmlFor="enablePageAgent"
                      className="text-slate-600 font-medium cursor-pointer"
                    >
                      Harici Model / Alibaba DashScope API Bağlantısını Etkinleştir
                    </label>
                  </div>
                </div>

                {pageAgentConfig.enabled && (
                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                        Model Base URL (OpenAI / Qwen / Ollama)
                      </label>
                      <input
                        type="text"
                        value={pageAgentConfig.baseURL}
                        onChange={(e) =>
                          setPageAgentConfig({
                            ...pageAgentConfig,
                            baseURL: e.target.value,
                          })
                        }
                        placeholder="https://dashscope.aliyuncs.com/compatible-mode/v1"
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                        API Anahtarı (API Key)
                      </label>
                      <input
                        type="password"
                        value={pageAgentConfig.apiKey}
                        onChange={(e) =>
                          setPageAgentConfig({
                            ...pageAgentConfig,
                            apiKey: e.target.value,
                          })
                        }
                        placeholder="sk-..."
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs"
                      />
                      <span className="text-[10px] text-slate-400 mt-0.5 block">
                        API anahtarınız yalnızca tarayıcınızın yerel depolama
                        alanında saklanır.
                      </span>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                        Model Adı
                      </label>
                      <input
                        type="text"
                        value={pageAgentConfig.model}
                        onChange={(e) =>
                          setPageAgentConfig({
                            ...pageAgentConfig,
                            model: e.target.value,
                          })
                        }
                        placeholder="qwen-plus / gpt-4o-mini / llama3"
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsSettingsOpen(false)}
                  className="px-4 py-2 rounded-xl text-slate-600 font-semibold text-xs hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  İptal
                </button>
                <button
                  type="button"
                  onClick={() => savePageAgentConfig(pageAgentConfig)}
                  className="px-4 py-2 rounded-xl bg-[#17263D] text-white font-semibold text-xs hover:bg-[#1E3A8A] transition-colors cursor-pointer"
                >
                  Ayarları Kaydet
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      </aside>
    </>
  );
}
