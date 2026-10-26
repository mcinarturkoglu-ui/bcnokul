import { ChevronDown } from "lucide-react";

// Shared form styling: every input and select is the same 48px height, with a visible border
export const fieldClass =
  "w-full h-12 px-3.5 text-[15px] text-[#17263D] bg-white border border-slate-300 rounded-xl placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-shadow";
export const selectClass = `${fieldClass} appearance-none pr-10 cursor-pointer`;
export const textareaClass = fieldClass.replace("h-12", "min-h-32 py-3");
export const labelClass = "block text-sm font-medium text-slate-800 mb-1.5";
export const fieldIconClass = "w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none";
export const checkboxClass = "mt-0.5 size-5 shrink-0 rounded border-slate-400 text-[#1E3A8A] focus:ring-[#1E3A8A]";

export function Optional() {
  return <span className="font-normal text-slate-500"> (isteğe bağlı)</span>;
}

export function SelectChevron() {
  return (
    <ChevronDown
      className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
      aria-hidden="true"
    />
  );
}
