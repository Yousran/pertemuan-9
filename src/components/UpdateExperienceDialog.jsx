"use client";

export default function UpdateExperienceDialog({ item, onClose }) {
  return (
    <div className="fixed inset-0 z-10 grid place-items-center overflow-y-auto bg-[#0e1813]/65 p-5 backdrop-blur-sm" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="my-auto max-h-screen w-full max-w-lg overflow-y-auto rounded-2xl border border-[#d9ded7] bg-[#fffefa] p-7 shadow-2xl" role="dialog" aria-modal="true" aria-labelledby="update-experience-title">
        <button className="float-right inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d9ded7] text-xl" type="button" aria-label="Close dialog" onClick={onClose}>×</button>
        <h2 className="text-2xl font-bold tracking-tight" id="update-experience-title">Update experience</h2>
        <form className="mt-5">
          <input type="hidden" name="id" value={item.id} />
          <div className="my-4 grid gap-2">
            <label className="text-xs font-extrabold" htmlFor="update-experience-role">Role / position</label>
            <input className="w-full rounded-lg border border-[#cbd2c8] bg-white px-3 py-3 text-sm outline-none focus:border-[#718b31] focus:ring-4 focus:ring-[#d6f36a]/40" 
              id="update-experience-role" name="role" defaultValue={item.role} required />
          </div>
          <div className="my-4 grid gap-2">
            <label className="text-xs font-extrabold" htmlFor="update-experience-company">Company</label>
            <input className="w-full rounded-lg border border-[#cbd2c8] bg-white px-3 py-3 text-sm outline-none focus:border-[#718b31] focus:ring-4 focus:ring-[#d6f36a]/40" 
              id="update-experience-company" name="company" defaultValue={item.company} required />
          </div>
          <div className="my-4 grid gap-2">
            <label className="text-xs font-extrabold" htmlFor="update-experience-dates">Dates</label>
            <input className="w-full rounded-lg border border-[#cbd2c8] bg-white px-3 py-3 text-sm outline-none focus:border-[#718b31] focus:ring-4 focus:ring-[#d6f36a]/40" 
              id="update-experience-dates" name="dates" defaultValue={item.dates} required />
          </div>
          <div className="my-4 grid gap-2">
            <label className="text-xs font-extrabold" htmlFor="update-experience-description">Description</label>
            <textarea className="min-h-24 w-full resize-y rounded-lg border border-[#cbd2c8] bg-white px-3 py-3 text-sm outline-none focus:border-[#718b31] focus:ring-4 focus:ring-[#d6f36a]/40" 
              id="update-experience-description" name="description" defaultValue={item.description} required />
          </div>
          <div className="mt-6 flex justify-end gap-2"><button className="inline-flex min-h-10 items-center justify-center rounded-full border border-[#d9ded7] px-4 text-sm font-bold" type="button" onClick={onClose}>Cancel</button><button className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#17251f] px-4 text-sm font-bold text-white" type="submit">Save changes</button></div>
        </form>
      </section>
    </div>
  );
}