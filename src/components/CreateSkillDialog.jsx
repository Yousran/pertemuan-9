"use client";

import { useState } from "react";

export default function CreateSkillDialog() {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({ name: "", category: "", level: "" });
  if (!open) return <button className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#17251f] px-5 text-sm font-bold text-white transition hover:bg-[#2d4439]" type="button" onClick={() => setOpen(true)}><span className="text-xl leading-none text-[#d6f36a]">+</span> Add skill</button>;
  function close() { setOpen(false); }
  return (
    <div className="fixed inset-0 z-10 grid place-items-center overflow-y-auto bg-[#0e1813]/65 p-5 backdrop-blur-sm" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
      <section className="my-auto max-h-screen w-full max-w-lg overflow-y-auto rounded-2xl border border-[#d9ded7] bg-[#fffefa] p-7 shadow-2xl" role="dialog" aria-modal="true" aria-labelledby="create-skill-title">
        <button className="float-right inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d9ded7] text-xl" type="button" aria-label="Close dialog" onClick={close}>×</button>
        <h2 className="text-2xl font-bold tracking-tight" id="create-skill-title">Add skill</h2>
        <form className="mt-5" onSubmit={close}>
          <div className="my-4 grid gap-2"><label className="text-xs font-extrabold" htmlFor="create-skill-name">Skill</label><input className="w-full rounded-lg border border-[#cbd2c8] bg-white px-3 py-3 text-sm outline-none focus:border-[#718b31] focus:ring-4 focus:ring-[#d6f36a]/40" id="create-skill-name" required value={values.name} onChange={(event) => setValues({ ...values, name: event.target.value })} /></div>
          <div className="my-4 grid gap-2"><label className="text-xs font-extrabold" htmlFor="create-skill-category">Category</label><input className="w-full rounded-lg border border-[#cbd2c8] bg-white px-3 py-3 text-sm outline-none focus:border-[#718b31] focus:ring-4 focus:ring-[#d6f36a]/40" id="create-skill-category" required value={values.category} onChange={(event) => setValues({ ...values, category: event.target.value })} /></div>
          <div className="my-4 grid gap-2"><label className="text-xs font-extrabold" htmlFor="create-skill-level">Experience level</label><input className="w-full rounded-lg border border-[#cbd2c8] bg-white px-3 py-3 text-sm outline-none focus:border-[#718b31] focus:ring-4 focus:ring-[#d6f36a]/40" id="create-skill-level" required value={values.level} onChange={(event) => setValues({ ...values, level: event.target.value })} /></div>
          <div className="mt-6 flex justify-end gap-2"><button className="inline-flex min-h-10 items-center justify-center rounded-full border border-[#d9ded7] px-4 text-sm font-bold" type="button" onClick={close}>Cancel</button><button className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#17251f] px-4 text-sm font-bold text-white" type="submit">Create skill</button></div>
        </form>
      </section>
    </div>
  );
}