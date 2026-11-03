"use client";

export default function DeleteExperienceDialog({ item, onClose }) {
  return (
    <div className="fixed inset-0 z-10 grid place-items-center bg-[#0e1813]/65 p-5 backdrop-blur-sm" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="w-full max-w-lg rounded-2xl border border-[#d9ded7] bg-[#fffefa] p-7 shadow-2xl" role="alertdialog" aria-modal="true" aria-labelledby="delete-experience-title">
        <h2 className="text-2xl font-bold tracking-tight" id="delete-experience-title">Delete experience?</h2>
        <p className="my-3 text-sm leading-6 text-[#65716a]">Remove <strong className="text-[#17251f]">{item.role}</strong>? This action can&apos;t be undone.</p>
        <form className="mt-6 flex justify-end gap-2">
          <input type="hidden" name="id" value={item.id} />
          <button className="inline-flex min-h-10 items-center justify-center rounded-full border border-[#d9ded7] px-4 text-sm font-bold text-[#17251f] hover:bg-[#eeece5]" type="button" onClick={onClose}>Keep experience</button>
          <button className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#aa342e] px-4 text-sm font-bold text-white hover:bg-[#86251f]" type="submit">Delete experience</button>
        </form>
      </section>
    </div>
  );
}
