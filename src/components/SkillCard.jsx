export default function SkillCard({ skill, onEdit, onDelete }) {
  return (
    <article className="rounded-xl border border-[#17251f] bg-[#17251f] p-6 text-white shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div><h3 className="text-xl font-bold tracking-tight">{skill.name}</h3><p className="mt-1 text-sm font-semibold text-[#d6f36a]">{skill.category}</p></div>
        <div className="flex gap-2">
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-sm transition hover:bg-white/10" type="button" aria-label={`Edit ${skill.name}`} onClick={() => onEdit(skill)}>✎</button>
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-sm transition hover:bg-white/10" type="button" aria-label={`Delete ${skill.name}`} onClick={() => onDelete(skill)}>⌫</button>
        </div>
      </div>
      <p className="my-4 text-sm leading-relaxed text-[#d0d8d1]">{skill.level}</p>
    </article>
  );
}