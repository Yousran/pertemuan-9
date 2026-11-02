"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import CreateProjectDialog from "@/components/CreateProjectDialog";
import UpdateProjectDialog from "@/components/UpdateProjectDialog";
import DeleteProjectDialog from "@/components/DeleteProjectDialog";

const initialProjects = [
  { id: 1, title: "Fieldnotes", description: "A quiet space for collecting ideas and turning them into meaningful work.", thumbnail: "https://picsum.photos/seed/fieldnotes/900/480" },
  { id: 2, title: "Common Ground", description: "A new identity and digital home for a community-first coffee company.", thumbnail: "https://picsum.photos/seed/common-ground/900/480" },
  { id: 3, title: "Open Shelf", description: "Making independent publishing easier to discover, share, and support.", thumbnail: "https://picsum.photos/seed/open-shelf/900/480" },
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState(initialProjects);
  const [dialog, setDialog] = useState(null);

  function handleProjectCreate(values) {
    setProjects((current) => [...current, { ...values, id: Date.now() }]);
  }

  function handleProjectUpdate(id, values) {
    setProjects((current) => current.map((project) => project.id === id ? { ...project, ...values } : project));
  }

  function handleProjectDelete(id) {
    setProjects((current) => current.filter((project) => project.id !== id));
  }

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6" id="main-content">
      <header className="pt-16 sm:pt-20">
        <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-[#738a36]">Selected details</p>
        <h1 className="max-w-5xl text-5xl font-bold leading-none tracking-tight sm:text-6xl lg:text-7xl">Projects</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#65716a]">A collection of ideas brought to life with good people. Each project starts with a question and ends with something useful.</p>
      </header>
      <section className="pb-20" aria-label="Projects">
        <div className="mb-5 mt-12 flex items-end justify-between gap-6 max-sm:items-start">
          <h2 className="text-xl font-bold tracking-tight">Projects <span className="text-xs font-normal text-[#65716a]">({projects.length})</span></h2>
          <button className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#17251f] px-5 text-sm font-bold text-white transition hover:bg-[#2d4439]" type="button" onClick={() => setDialog({ type: "create" })}><span className="text-xl leading-none text-[#d6f36a]">+</span> Add project</button>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.length === 0 ? <p className="col-span-full rounded-2xl border border-dashed border-[#b9c1b7] px-5 py-12 text-center text-sm text-[#65716a]">Nothing here yet. Add your first project to get started.</p> : projects.map((project) => <ProjectCard key={project.id} project={project} onEdit={(record) => setDialog({ type: "update", record })} onDelete={(record) => setDialog({ type: "delete", record })} />)}
        </div>
      </section>
      {dialog?.type === "create" && <CreateProjectDialog onCreate={handleProjectCreate} onClose={() => setDialog(null)} />}
      {dialog?.type === "update" && <UpdateProjectDialog record={dialog.record} onUpdate={handleProjectUpdate} onClose={() => setDialog(null)} />}
      {dialog?.type === "delete" && <DeleteProjectDialog record={dialog.record} onDelete={handleProjectDelete} onClose={() => setDialog(null)} />}
    </main>
  );
}
