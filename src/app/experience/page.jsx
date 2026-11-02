"use client";

import { useState } from "react";
import ExperienceCard from "@/components/ExperienceCard";
import CreateExperienceDialog from "@/components/CreateExperienceDialog";
import UpdateExperienceDialog from "@/components/UpdateExperienceDialog";
import DeleteExperienceDialog from "@/components/DeleteExperienceDialog";

const initialExperience = [
  { id: 1, role: "Senior Product Designer", company: "Northstar Studio", dates: "2023 — Present", description: "Leading product design for early-stage teams, from first sketches to polished launches." },
  { id: 2, role: "Product Designer", company: "Common Practice", dates: "2020 — 2023", description: "Designed accessible digital products and helped establish a collaborative design practice." },
  { id: 3, role: "Visual Designer", company: "Studio Kecil", dates: "2018 — 2020", description: "Built visual identities and web experiences for independent businesses and cultural projects." },
];

export default function ExperiencePage() {
  const [experience, setExperience] = useState(initialExperience);
  const [dialog, setDialog] = useState(null);

  function handleExperienceCreate(values) {
    setExperience((current) => [...current, { ...values, id: Date.now() }]);
  }

  function handleExperienceUpdate(id, values) {
    setExperience((current) => current.map((item) => item.id === id ? { ...item, ...values } : item));
  }

  function handleExperienceDelete(id) {
    setExperience((current) => current.filter((item) => item.id !== id));
  }

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6" id="main-content">
      <header className="pt-16 sm:pt-20">
        <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-[#738a36]">Selected details</p>
        <h1 className="max-w-5xl text-5xl font-bold leading-none tracking-tight sm:text-6xl lg:text-7xl">Experience</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#65716a]">The roles and teams that have shaped how I think, work, and make things with people.</p>
      </header>
      <section className="pb-20" aria-label="Experience">
        <div className="mb-5 mt-12 flex items-end justify-between gap-6 max-sm:items-start">
          <h2 className="text-xl font-bold tracking-tight">Experience <span className="text-xs font-normal text-[#65716a]">({experience.length})</span></h2>
          <button className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#17251f] px-5 text-sm font-bold text-white transition hover:bg-[#2d4439]" type="button" onClick={() => setDialog({ type: "create" })}><span className="text-xl leading-none text-[#d6f36a]">+</span> Add experience</button>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {experience.length === 0 ? <p className="col-span-full rounded-2xl border border-dashed border-[#b9c1b7] px-5 py-12 text-center text-sm text-[#65716a]">Nothing here yet. Add your first experience to get started.</p> : experience.map((item) => <ExperienceCard key={item.id} item={item} onEdit={(record) => setDialog({ type: "update", record })} onDelete={(record) => setDialog({ type: "delete", record })} />)}
        </div>
      </section>
      {dialog?.type === "create" && <CreateExperienceDialog onCreate={handleExperienceCreate} onClose={() => setDialog(null)} />}
      {dialog?.type === "update" && <UpdateExperienceDialog record={dialog.record} onUpdate={handleExperienceUpdate} onClose={() => setDialog(null)} />}
      {dialog?.type === "delete" && <DeleteExperienceDialog record={dialog.record} onDelete={handleExperienceDelete} onClose={() => setDialog(null)} />}
    </main>
  );
}
