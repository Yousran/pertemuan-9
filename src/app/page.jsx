import Link from "next/link";

const featuredWork = [
  { number: "01", title: "Fieldnotes", category: "Product design · 2025" },
  { number: "02", title: "Common Ground", category: "Brand & digital · 2024" },
  { number: "03", title: "Open Shelf", category: "Web experience · 2024" },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6">
      <section className="grid grid-cols-1 items-center gap-10 py-20 lg:grid-cols-3 lg:gap-12 lg:py-32">
        <div>
          <p className="mb-4 text-xs font-extrabold uppercase tracking-widest text-[#738a36]">Independent designer &amp; builder · Jakarta</p>
          <h1 className="max-w-4xl text-5xl font-bold leading-none tracking-tight sm:text-6xl lg:text-7xl">Making digital things feel a little more <span className="underline decoration-[#9bb34b] decoration-4 underline-offset-4">human.</span></h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#65716a]">I&apos;m Anu, a designer who likes clear ideas, thoughtful details, and building things that make everyday life better.</p>
          <div className="mt-8 flex items-center gap-5">
            <Link className="inline-flex min-h-12 items-center rounded-full bg-[#17251f] px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#2d4439]" href="/projects">Explore my work <span className="ml-3 text-lg text-[#d6f36a]">↗</span></Link>
            <a className="text-sm font-extrabold hover:underline" href="mailto:hello@example.com">Get in touch</a>
          </div>
        </div>
        <aside className="w-full rounded-2xl bg-[#17251f] p-6 text-white lg:col-span-1 lg:rotate-2" aria-label="About Ari">
          <div className="grid size-20 place-items-center rounded-full bg-[#d6f36a] text-2xl font-black text-[#17251f]">AP</div>
          <p className="mb-1 mt-6 text-xs text-[#b9c5bc]">CURRENTLY AVAILABLE FOR</p>
          <strong className="text-lg">Good collaborations</strong>
          <small className="mt-2 block leading-6 text-[#b9c5bc]">Product design, creative direction, and the occasional deep-dive prototype.</small>
        </aside>
      </section>
      <section className="pb-20 pt-16">
        <div className="mb-5 flex items-end justify-between gap-5">
          <div><p className="mb-2 text-xs font-extrabold uppercase tracking-widest text-[#738a36]">A few recent things</p><h2 className="text-2xl font-bold tracking-tight">Selected work</h2></div>
          <Link className="text-xs font-extrabold text-[#597323] hover:underline" href="/projects">All projects ↗</Link>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {featuredWork.map((work) => <article className="min-h-40 rounded-xl bg-[#17251f] p-5 text-white" key={work.number}><span className="text-xs font-extrabold text-[#d6f36a]">{work.number} / 03</span><h3 className="mb-1 mt-6 text-lg font-bold">{work.title}</h3><p className="m-0 text-xs text-[#b9c5bc]">{work.category}</p></article>)}
        </div>
      </section>
    </main>
  );
}
