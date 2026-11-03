"use client";

import { useState } from "react";
import UpdateExperienceDialog from "./UpdateExperienceDialog";
import DeleteExperienceDialog from "./DeleteExperienceDialog";

export default function ExperienceCard({ item }) {
  const [dialog, setDialog] = useState(null);
  return (
      <>
        <article className="rounded-xl border border-[#17251f] bg-[#17251f] p-6 text-white shadow-lg">
        <div className="flex items-start justify-between gap-4">
          <div><h3 className="text-xl font-bold tracking-tight">{item.role}</h3><p className="mt-1 text-sm font-semibold text-[#d6f36a]">{item.company}</p></div>
          <div className="flex gap-2">
              <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-sm transition hover:bg-white/10" type="button" aria-label={`Edit ${item.role}`} onClick={() => setDialog("update")}>✎</button>
              <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-sm transition hover:bg-white/10" type="button" aria-label={`Delete ${item.role}`} onClick={() => setDialog("delete")}>⌫</button>
          </div>
        </div>
        <p className="mt-4 text-xs font-bold uppercase tracking-wider text-[#d6f36a]">{item.dates}</p>
        <p className="my-4 text-sm leading-relaxed text-[#d0d8d1]">{item.description}</p>
        </article>
        {dialog === "update" && <UpdateExperienceDialog item={item} onClose={() => setDialog(null)} />}
        {dialog === "delete" && <DeleteExperienceDialog item={item} onClose={() => setDialog(null)} />}
      </>
    );
}