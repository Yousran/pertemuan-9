"use client";

import { useState } from "react";
import SkillCard from "@/components/SkillCard";
import CreateSkillDialog from "@/components/CreateSkillDialog";
import UpdateSkillDialog from "@/components/UpdateSkillDialog";
import DeleteSkillDialog from "@/components/DeleteSkillDialog";

const initialSkills = [
  { id: 1, name: "Product design", category: "Design", level: "Advanced" },
  { id: 2, name: "Prototyping", category: "Design", level: "Advanced" },
  { id: 3, name: "Frontend development", category: "Development", level: "Intermediate" },
  { id: 4, name: "Creative direction", category: "Strategy", level: "Advanced" },
];

export default function SkillsPage() {
  const [skills, setSkills] = useState(initialSkills);
  const [dialog, setDialog] = useState(null);

  function handleSkillCreate(values) {
    setSkills((current) => [...current, { ...values, id: Date.now() }]);
  }

  function handleSkillUpdate(id, values) {
    setSkills((current) => current.map((skill) => skill.id === id ? { ...skill, ...values } : skill));
  }

  function handleSkillDelete(id) {
    setSkills((current) => current.filter((skill) => skill.id !== id));
  }

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6" id="main-content">
      <header className="pt-16 sm:pt-20">
        <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-[#738a36]">Selected details</p>
        <h1 className="max-w-5xl text-5xl font-bold leading-none tracking-tight sm:text-6xl lg:text-7xl">Skills</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#65716a]">A toolkit built across design, technology, and collaboration. Always learning, always adding a new instrument to the mix.</p>
      </header>
      <section className="pb-20" aria-label="Skills">
        <div className="mb-5 mt-12 flex items-end justify-between gap-6 max-sm:items-start">
          <h2 className="text-xl font-bold tracking-tight">Skills <span className="text-xs font-normal text-[#65716a]">({skills.length})</span></h2>
          <button className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#17251f] px-5 text-sm font-bold text-white transition hover:bg-[#2d4439]" type="button" onClick={() => setDialog({ type: "create" })}><span className="text-xl leading-none text-[#d6f36a]">+</span> Add skill</button>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {skills.length === 0 ? <p className="col-span-full rounded-2xl border border-dashed border-[#b9c1b7] px-5 py-12 text-center text-sm text-[#65716a]">Nothing here yet. Add your first skill to get started.</p> : skills.map((skill) => <SkillCard key={skill.id} skill={skill} onEdit={(record) => setDialog({ type: "update", record })} onDelete={(record) => setDialog({ type: "delete", record })} />)}
        </div>
      </section>
      {dialog?.type === "create" && <CreateSkillDialog onCreate={handleSkillCreate} onClose={() => setDialog(null)} />}
      {dialog?.type === "update" && <UpdateSkillDialog record={dialog.record} onUpdate={handleSkillUpdate} onClose={() => setDialog(null)} />}
      {dialog?.type === "delete" && <DeleteSkillDialog record={dialog.record} onDelete={handleSkillDelete} onClose={() => setDialog(null)} />}
    </main>
  );
}
