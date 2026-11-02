import Image from "next/image";

export default function ProjectCard({ project, onEdit, onDelete }) {
  return (
    <article className="overflow-hidden rounded-xl border border-[#17251f] bg-[#17251f] text-white shadow-lg">
      <div className="relative aspect-video">
        <Image className="object-cover" src={project.thumbnail} alt={`${project.title} project preview`} fill unoptimized />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
          <div className="flex gap-2">
            <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-sm transition hover:bg-white/10" type="button" aria-label={`Edit ${project.title}`} onClick={() => onEdit(project)}>✎</button>
            <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-sm transition hover:bg-white/10" type="button" aria-label={`Delete ${project.title}`} onClick={() => onDelete(project)}>⌫</button>
          </div>
        </div>
        <p className="my-4 text-sm leading-relaxed text-[#d0d8d1]">{project.description}</p>
      </div>
    </article>
  );
}