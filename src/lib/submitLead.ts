// Sends a form to Formspree. The form id comes from NEXT_PUBLIC_FORMSPREE_ID;
// without it the forms show a direct-contact fallback instead of a fake success.
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export const isLeadFormConfigured = Boolean(FORMSPREE_ID);

export type LeadFormStatus = "idle" | "sending" | "error" | "unconfigured";

export async function submitLead(form: HTMLFormElement, subject: string): Promise<void> {
  if (!FORMSPREE_ID) {
    throw new Error("NEXT_PUBLIC_FORMSPREE_ID is not set");
  }

  const data = new FormData(form);
  data.set("_subject", subject);

  const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
    method: "POST",
    headers: { Accept: "application/json" },
    body: data,
  });

  if (!res.ok) {
    throw new Error(`Formspree responded with ${res.status}`);
  }
}
