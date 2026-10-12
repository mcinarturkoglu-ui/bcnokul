"use client";

import {
  BCN_KNOWLEDGE_INDEX,
  FALLBACK_MESSAGE,
  KnowledgeDoc,
} from "@/data/bcnKnowledgeIndex";
import { INSTITUTION_INFO } from "@/data/bcnData";

export interface AssistantAction {
  type: "NAVIGATE" | "OPEN_ADMISSION_MODAL" | "CALL_PHONE" | "SCROLL_TO";
  label: string;
  payload: string; // url, modal type, phone, or element selector
}

export interface AssistantSource {
  title: string;
  route: string;
}

export interface AssistantResponse {
  answer: string;
  sources: AssistantSource[];
  actions: AssistantAction[];
  isFallback: boolean;
  confidenceScore: number;
}

// Turkish character mapping and normalization helper
export function normalizeTurkish(text: string): string {
  if (!text) return "";
  return text
    .toLocaleLowerCase("tr-TR")
    .replace(/[.,/#!$%^&*;:{}=\-_`~()?"'’]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Direct Action Intent Patterns
const ACTION_PATTERNS = [
  {
    regex: /(randevu|başvuru|form|ön kayıt|ziyaret)/i,
    action: {
      type: "OPEN_ADMISSION_MODAL" as const,
      label: "Kayıt & Randevu Formunu Aç",
      payload: "randevu",
    },
    defaultRoute: "/kayit-ve-kabul",
  },
  {
    regex: /(ara|telefon|numara|çağrı|müşteri hizmetleri)/i,
    action: {
      type: "CALL_PHONE" as const,
      label: `Hemen Ara (${INSTITUTION_INFO.phone})`,
      payload: INSTITUTION_INFO.phone.replace(/\s+/g, ""),
    },
    defaultRoute: "/iletisim",
  },
  {
    regex: /(iletişim|adres|nerede|harita|ulaşım|metro)/i,
    action: {
      type: "NAVIGATE" as const,
      label: "İletişim Sayfasına Git",
      payload: "/iletisim",
    },
    defaultRoute: "/iletisim",
  },
  {
    regex: /(lider|yönetim|müdür|adem bican|kadro)/i,
    action: {
      type: "NAVIGATE" as const,
      label: "Lider Ekibimiz Sayfasına Git",
      payload: "/lider-ekibimiz",
    },
    defaultRoute: "/lider-ekibimiz",
  },
  {
    regex: /(kampüs|tesis|laboratuvar|spor salonu|oditoryum)/i,
    action: {
      type: "NAVIGATE" as const,
      label: "Kampüs Olanaklarını İncele",
      payload: "/kampusumuz",
    },
    defaultRoute: "/kampusumuz",
  },
  {
    regex: /(başarı|şampiyon|fll|robotik|madalya|kupa)/i,
    action: {
      type: "NAVIGATE" as const,
      label: "Başarılarımızı İncele",
      payload: "/basarilarimiz",
    },
    defaultRoute: "/basarilarimiz",
  },
  {
    regex: /(anaokulu|okul öncesi|preschool|aurelia)/i,
    action: {
      type: "NAVIGATE" as const,
      label: "Aurelia Preschool Sayfasını Aç",
      payload: "/kademeler/aurelia-preschool",
    },
    defaultRoute: "/kademeler/aurelia-preschool",
  },
  {
    regex: /(ilkokul|pyp|moxo)/i,
    action: {
      type: "NAVIGATE" as const,
      label: "İlkokul Sayfasını Aç",
      payload: "/kademeler/ilkokul",
    },
    defaultRoute: "/kademeler/ilkokul",
  },
  {
    regex: /(ortaokul|lgs)/i,
    action: {
      type: "NAVIGATE" as const,
      label: "Ortaokul Sayfasını Aç",
      payload: "/kademeler/ortaokul",
    },
    defaultRoute: "/kademeler/ortaokul",
  },
  {
    regex: /(fen lisesi)/i,
    action: {
      type: "NAVIGATE" as const,
      label: "Fen Lisesi Sayfasını Aç",
      payload: "/kademeler/fen-lisesi",
    },
    defaultRoute: "/kademeler/fen-lisesi",
  },
  {
    regex: /(anadolu lisesi|lise)/i,
    action: {
      type: "NAVIGATE" as const,
      label: "Anadolu Lisesi Sayfasını Aç",
      payload: "/kademeler/anadolu-lisesi",
    },
    defaultRoute: "/kademeler/anadolu-lisesi",
  },
  {
    regex: /(kanada|ossd|çift diploma|ap|mun|uluslararası)/i,
    action: {
      type: "NAVIGATE" as const,
      label: "Uluslararası Programları Aç",
      payload: "/uluslararasi-programlar",
    },
    defaultRoute: "/uluslararasi-programlar",
  },
];

const STOP_WORDS = new Set([
  "nedir",
  "nelerdir",
  "nasil",
  "nasıl",
  "hangi",
  "nerede",
  "kimdir",
  "ne",
  "var",
  "mi",
  "mı",
  "mu",
  "mü",
  "ve",
  "ile",
  "için",
  "olan",
  "bir",
  "bu",
  "şu",
  "o",
  "kadar",
  "göre",
  "diye",
  "gibi",
  "icin",
]);

// Query search and ranking algorithm
export function searchKnowledgeIndex(query: string): {
  doc: KnowledgeDoc | null;
  score: number;
  secondaryDocs: KnowledgeDoc[];
} {
  const normQuery = normalizeTurkish(query);
  const allTokens = normQuery.split(" ").filter((t) => t.length > 1);
  const contentTokens = allTokens.filter((t) => !STOP_WORDS.has(t));

  if (contentTokens.length === 0 && allTokens.length === 0) {
    return { doc: null, score: 0, secondaryDocs: [] };
  }

  const tokensToSearch = contentTokens.length > 0 ? contentTokens : allTokens;

  const scoredDocs = BCN_KNOWLEDGE_INDEX.map((doc) => {
    let score = 0;
    let matchedTokenCount = 0;

    const normTitle = normalizeTurkish(doc.title);
    const titleWords = normTitle.split(" ");
    const normSummary = normalizeTurkish(doc.summary);
    const summaryWords = normSummary.split(" ");
    const normKeywords = doc.keywords.map(normalizeTurkish);

    // 1. Exact phrase matches in title or keywords
    if (normTitle.includes(normQuery)) score += 60;
    if (normKeywords.some((k) => k === normQuery || (normQuery.length > 4 && k.includes(normQuery)))) {
      score += 50;
    }

    // 2. Exact word / stem matching
    for (const token of tokensToSearch) {
      let tokenMatched = false;

      // Exact match or stem match in keywords
      if (
        normKeywords.some(
          (k) =>
            k === token ||
            k.split(" ").includes(token) ||
            (token.length >= 5 &&
              (k.startsWith(token.slice(0, 5)) || token.startsWith(k.slice(0, 5))))
        )
      ) {
        score += 25;
        tokenMatched = true;
      }
      // Exact match or stem match in title words
      else if (
        titleWords.some(
          (w) =>
            w === token ||
            (token.length >= 5 &&
              (w.startsWith(token.slice(0, 5)) || token.startsWith(w.slice(0, 5))))
        )
      ) {
        score += 20;
        tokenMatched = true;
      }
      // Exact match or stem match in summary words
      else if (
        summaryWords.some(
          (w) =>
            w === token ||
            (token.length >= 5 &&
              (w.startsWith(token.slice(0, 5)) || token.startsWith(w.slice(0, 5))))
        )
      ) {
        score += 10;
        tokenMatched = true;
      }

      if (tokenMatched) matchedTokenCount++;
    }

    // Penalize if only a small fraction of the query tokens matched
    const matchRatio = tokensToSearch.length > 0 ? matchedTokenCount / tokensToSearch.length : 0;
    if (matchRatio < 0.35 && tokensToSearch.length >= 2) {
      score = Math.floor(score * 0.3);
    }

    return { doc, score, matchRatio };
  });

  scoredDocs.sort((a, b) => b.score - a.score);

  const topMatch = scoredDocs[0];
  const isConfident = topMatch && topMatch.score >= 20;

  const secondaries = scoredDocs
    .slice(1, 3)
    .filter((d) => d.score >= 25)
    .map((d) => d.doc);

  return {
    doc: isConfident ? topMatch.doc : null,
    score: topMatch ? topMatch.score : 0,
    secondaryDocs: secondaries,
  };
}

// Generate structured response with guardrail verification
export async function processUserMessage(
  userQuery: string,
  currentRoute: string = "/"
): Promise<AssistantResponse> {
  const normalized = normalizeTurkish(userQuery);

  // Dedicated handling for tuition fee and prices (strictly no hallucination!)
  if (/(ücret|fiyat|fiyatlar|kaç para|kaç tl|maliyet|burs oranı|okul ücreti)/i.test(normalized)) {
    return {
      answer:
        "BCN Eğitim Kurumları'nda eğitim ve kayıt ücretleri; öğrencinin kademesine, bursluluk durumuna ve dönemsel kabul şartlarına göre belirlenmektedir. Web sitemizde sabit bir fiyat listesi yer almamakta olup; spekülatif veya doğrulanmamış rakamlar üretilmemektedir. Güncel kayıt ve burs olanakları hakkında en doğru bilgiyi almak için kayıt kabul ofisimizden randevu alabilir veya bizimle iletişime geçebilirsiniz.",
      sources: [
        {
          title: "Kayıt & Kabul Süreci",
          route: "/kayit-ve-kabul",
        },
        {
          title: "İletişim & Danışma",
          route: "/iletisim",
        },
      ],
      actions: [
        {
          type: "OPEN_ADMISSION_MODAL",
          label: "Kayıt & Randevu Formu Aç",
          payload: "randevu",
        },
        {
          type: "CALL_PHONE",
          label: `Hemen Ara (${INSTITUTION_INFO.phone})`,
          payload: INSTITUTION_INFO.phone.replace(/\s+/g, ""),
        },
      ],
      isFallback: false,
      confidenceScore: 100,
    };
  }

  // Check for navigation / action triggers
  let triggeredAction: AssistantAction | null = null;
  for (const pattern of ACTION_PATTERNS) {
    if (pattern.regex.test(normalized)) {
      if (
        /(aç|git|göster|yönlendir|başlat|bağlan|ara|nerede|al)/i.test(normalized) ||
        pattern.action.type === "OPEN_ADMISSION_MODAL" ||
        pattern.action.type === "CALL_PHONE"
      ) {
        triggeredAction = pattern.action;
        break;
      }
    }
  }

  // Search verified website knowledge
  const { doc, score, secondaryDocs } = searchKnowledgeIndex(userQuery);

  // Guardrail check: if low confidence or unrelated
  if (!doc || score < 20) {
    return {
      answer: FALLBACK_MESSAGE,
      sources: [
        {
          title: "İletişim & Danışma",
          route: "/iletisim",
        },
      ],
      actions: [
        {
          type: "NAVIGATE",
          label: "İletişim Sayfasına Git",
          payload: "/iletisim",
        },
        {
          type: "OPEN_ADMISSION_MODAL",
          label: "Randevu & Bilgi Formu Aç",
          payload: "randevu",
        },
      ],
      isFallback: true,
      confidenceScore: score,
    };
  }

  // Format verified answer
  const actions: AssistantAction[] = [];
  if (triggeredAction) {
    actions.push(triggeredAction);
  } else if (doc.actionType && doc.actionLabel && doc.actionPayload) {
    actions.push({
      type: doc.actionType,
      label: doc.actionLabel,
      payload: doc.actionPayload,
    });
  }

  // Ensure contact action if relevant
  if (
    doc.category === "admission" &&
    !actions.some((a) => a.type === "OPEN_ADMISSION_MODAL")
  ) {
    actions.push({
      type: "OPEN_ADMISSION_MODAL",
      label: "Hemen Randevu Al",
      payload: "randevu",
    });
  }

  const sources: AssistantSource[] = [{ title: doc.title, route: doc.route }];
  secondaryDocs.forEach((sd) => {
    if (!sources.some((s) => s.route === sd.route)) {
      sources.push({ title: sd.title, route: sd.route });
    }
  });

  return {
    answer: doc.content,
    sources,
    actions,
    isFallback: false,
    confidenceScore: score,
  };
}

// Client-side Alibaba PageAgent Runner
export interface PageAgentConfigState {
  apiKey?: string;
  baseURL?: string;
  model?: string;
  enabled: boolean;
}

let activePageAgent: any = null;

export async function getOrInitPageAgent(config?: PageAgentConfigState) {
  if (typeof window === "undefined") return null;

  if (!config?.enabled || !config.apiKey) {
    return null;
  }

  try {
    const { PageAgent } = await import("page-agent");
    if (!activePageAgent) {
      activePageAgent = new PageAgent({
        apiKey: config.apiKey,
        baseURL: config.baseURL || "https://dashscope.aliyuncs.com/compatible-mode/v1",
        model: config.model || "qwen-turbo",
        language: "en-US",
        experimentalLlmsTxt: true,
      });
    }
    return activePageAgent;
  } catch (err) {
    console.warn("Alibaba PageAgent could not be loaded directly:", err);
    return null;
  }
}
