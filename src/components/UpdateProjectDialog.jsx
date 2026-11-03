"use client";

import { useState } from "react";

export default function UpdateProjectDialog({ record, onUpdate, onClose }) {
  const [values, setValues] = useState({ title: record.title ?? "", description: record.description ?? "", thumbnail: record.thumbnail ?? "" });

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    onUpdate(Number(formData.get("id")), { title: formData.get("title"), description: formData.get("description"), thumbnail: formData.get("thumbnail") });
    onClose();
  }

  return (
    <div className="fixed inset-0 z-10 grid place-items-center overflow-y-auto bg-[#0e1813]/65 p-5 backdrop-blur-sm" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="my-auto max-h-screen w-full max-w-lg overflow-y-auto rounded-2xl border border-[#d9ded7] bg-[#fffefa] p-7 shadow-2xl" role="dialog" aria-modal="true" aria-labelledby="update-project-title">
        <button className="float-right inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d9ded7] text-xl" type="button" aria-label="Close dialog" onClick={onClose}>×</button>
        <h2 className="text-2xl font-bold tracking-tight" id="update-project-title">Update project</h2>
        <p className="mb-5 mt-2 text-sm leading-6 text-[#65716a]">Update the project details and save your changes.</p>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="id" value={record.id} />
          <div className="my-4 grid gap-2"><label className="text-xs font-extrabold" htmlFor="update-project-title-input">Project title</label><input className="w-full rounded-lg border border-[#cbd2c8] bg-white px-3 py-3 text-sm outline-none focus:border-[#718b31] focus:ring-4 focus:ring-[#d6f36a]/40" id="update-project-title-input" name="title" required value={values.title} onChange={(event) => setValues({ ...values, title: event.target.value })} /></div>
          <div className="my-4 grid gap-2"><label className="text-xs font-extrabold" htmlFor="update-project-description">Description</label><textarea className="min-h-24 w-full resize-y rounded-lg border border-[#cbd2c8] bg-white px-3 py-3 text-sm outline-none focus:border-[#718b31] focus:ring-4 focus:ring-[#d6f36a]/40" id="update-project-description" name="description" required value={values.description} onChange={(event) => setValues({ ...values, description: event.target.value })} /></div>
          <div className="my-4 grid gap-2"><label className="text-xs font-extrabold" htmlFor="update-project-thumbnail">Thumbnail image URL</label><input className="w-full rounded-lg border border-[#cbd2c8] bg-white px-3 py-3 text-sm outline-none focus:border-[#718b31] focus:ring-4 focus:ring-[#d6f36a]/40" id="update-project-thumbnail" name="thumbnail" type="url" required value={values.thumbnail} onChange={(event) => setValues({ ...values, thumbnail: event.target.value })} /></div>
          <div className="mt-6 flex justify-end gap-2">
            <button className="inline-flex min-h-10 items-center justify-center rounded-full border border-[#d9ded7] px-4 text-sm font-bold text-[#17251f] hover:bg-[#eeece5]" type="button" onClick={onClose}>Cancel</button>
            <button className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#17251f] px-4 text-sm font-bold text-white hover:bg-[#2d4439]" type="submit">Save changes</button>
          </div>
        </form>
      </section>
    </div>
  );
}