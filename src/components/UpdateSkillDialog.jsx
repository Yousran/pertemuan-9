"use client";

import { useState } from "react";

const fields = [
  { name: "name", label: "Skill" },
  { name: "category", label: "Category" },
  { name: "level", label: "Experience level" },
];

export default function UpdateSkillDialog({ record, onUpdate, onClose }) {
  const [values, setValues] = useState(Object.fromEntries(fields.map((field) => [field.name, record[field.name] ?? ""])));
  function handleSubmit(event) { event.preventDefault(); onUpdate(record.id, values); onClose(); }
  return (
    <div className="fixed inset-0 z-10 grid place-items-center overflow-y-auto bg-[#0e1813]/65 p-5 backdrop-blur-sm" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="my-auto max-h-screen w-full max-w-lg overflow-y-auto rounded-2xl border border-[#d9ded7] bg-[#fffefa] p-7 shadow-2xl" role="dialog" aria-modal="true" aria-labelledby="update-skill-title">
        <button className="float-right inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d9ded7] text-xl" type="button" aria-label="Close dialog" onClick={onClose}>×</button>
        <h2 className="text-2xl font-bold tracking-tight" id="update-skill-title">Update skill</h2>
        <form className="mt-5" onSubmit={handleSubmit}>
          {fields.map((field) => <div className="my-4 grid gap-2" key={field.name}><label className="text-xs font-extrabold" htmlFor={`update-skill-${field.name}`}>{field.label}</label><input className="w-full rounded-lg border border-[#cbd2c8] bg-white px-3 py-3 text-sm outline-none focus:border-[#718b31] focus:ring-4 focus:ring-[#d6f36a]/40" id={`update-skill-${field.name}`} required value={values[field.name] ?? ""} onChange={(event) => setValues({ ...values, [field.name]: event.target.value })} /></div>)}
          <div className="mt-6 flex justify-end gap-2"><button className="inline-flex min-h-10 items-center justify-center rounded-full border border-[#d9ded7] px-4 text-sm font-bold" type="button" onClick={onClose}>Cancel</button><button className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#17251f] px-4 text-sm font-bold text-white" type="submit">Save changes</button></div>
        </form>
      </section>
    </div>
  );
}