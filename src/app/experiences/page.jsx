import CreateExperienceDialog from "@/components/CreateExperienceDialog";
import ExperienceCard from "@/components/ExperienceCard";


export default function ExperiencesPage() {
  const experiences = [
    { id: 1, role: "Senior Product Designer", company: "Northstar Studio", dates: "2023 — Present", description: "Leading product design for early-stage teams, from first sketches to polished launches." },
    { id: 2, role: "Product Designer", company: "Common Practice", dates: "2020 — 2023", description: "Designed accessible digital products and helped establish a collaborative design practice." },
    { id: 3, role: "Visual Designer", company: "Studio Kecil", dates: "2018 — 2020", description: "Built visual identities and web experiences for independent businesses and cultural projects." },
  ];

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6" id="main-content">
      <header className="pt-16 sm:pt-20">
        <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-[#738a36]">Selected details</p>
        <h1 className="max-w-5xl text-5xl font-bold leading-none tracking-tight sm:text-6xl lg:text-7xl">Experience</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#65716a]">The roles and teams that have shaped how I think, work, and make things with people.</p>
      </header>
      <section className="pb-20" aria-label="Experience">
        <div className="mb-5 mt-12 flex items-end justify-between gap-6 max-sm:items-start">
          <h2 className="text-xl font-bold tracking-tight">Experiences <span className="text-xs font-normal text-[#65716a]">
            ({experiences.length})</span></h2>
          <CreateExperienceDialog/>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {experiences.length === 0 
          ? <p className="col-span-full rounded-2xl border border-dashed border-[#b9c1b7] px-5 py-12 text-center text-sm text-[#65716a]">Nothing here yet. Add your first experience to get started.</p> 
          : experiences.map((item) => 
          <ExperienceCard key={item.id} item={item} />
          )}
        </div>
      </section>
    </main>
  );
}
