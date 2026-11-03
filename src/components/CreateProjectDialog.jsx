"use client";

import { useState } from "react";

export default function CreateProjectDialog({ onCreate, onClose }) {
  const [values, setValues] = useState({ title: "", description: "", thumbnail: "" });

  function handleSubmit(event) {
    event.preventDefault();
    onCreate(values);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-10 grid place-items-center overflow-y-auto bg-[#0e1813]/65 p-5 backdrop-blur-sm" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="my-auto max-h-screen w-full max-w-lg overflow-y-auto rounded-2xl border border-[#d9ded7] bg-[#fffefa] p-7 shadow-2xl" role="dialog" aria-modal="true" aria-labelledby="create-project-title">
        <button className="float-right inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d9ded7] text-xl" type="button" aria-label="Close dialog" onClick={onClose}>×</button>
        <h2 className="text-2xl font-bold tracking-tight" id="create-project-title">Add project</h2>
        <p className="mb-5 mt-2 text-sm leading-6 text-[#65716a]">Add the details for this new project.</p>
        <form onSubmit={handleSubmit}>
          <div className="my-4 grid gap-2"><label className="text-xs font-extrabold" htmlFor="create-project-title-input">Project title</label><input className="w-full rounded-lg border border-[#cbd2c8] bg-white px-3 py-3 text-sm outline-none focus:border-[#718b31] focus:ring-4 focus:ring-[#d6f36a]/40" id="create-project-title-input" required value={values.title} onChange={(event) => setValues({ ...values, title: event.target.value })} /></div>
          <div className="my-4 grid gap-2"><label className="text-xs font-extrabold" htmlFor="create-project-description">Description</label><textarea className="min-h-24 w-full resize-y rounded-lg border border-[#cbd2c8] bg-white px-3 py-3 text-sm outline-none focus:border-[#718b31] focus:ring-4 focus:ring-[#d6f36a]/40" id="create-project-description" required value={values.description} onChange={(event) => setValues({ ...values, description: event.target.value })} /></div>
          <div className="my-4 grid gap-2"><label className="text-xs font-extrabold" htmlFor="create-project-thumbnail">Thumbnail image URL</label><input className="w-full rounded-lg border border-[#cbd2c8] bg-white px-3 py-3 text-sm outline-none focus:border-[#718b31] focus:ring-4 focus:ring-[#d6f36a]/40" id="create-project-thumbnail" type="url" required value={values.thumbnail} onChange={(event) => setValues({ ...values, thumbnail: event.target.value })} /></div>
          <div className="mt-6 flex justify-end gap-2">
            <button className="inline-flex min-h-10 items-center justify-center rounded-full border border-[#d9ded7] px-4 text-sm font-bold text-[#17251f] hover:bg-[#eeece5]" type="button" onClick={onClose}>Cancel</button>
            <button className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#17251f] px-4 text-sm font-bold text-white hover:bg-[#2d4439]" type="submit">Create project</button>
          </div>
        </form>
      </section>
    </div>
  );
}