import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Github, Linkedin, Cloud, Database, Boxes, GraduationCap, Briefcase, MapPin } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ria Thapa — Inventory Systems Engineer" },
      { name: "description", content: "Ria Thapa — Software engineer specializing in inventory management systems built with Java, Spring Boot and AWS. 2+ years of experience." },
      { property: "og:title", content: "Ria Thapa — Inventory Systems Engineer" },
      { property: "og:description", content: "Java, Spring Boot, AWS. Building inventory platforms that scale." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
});

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-foreground bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-xl font-bold tracking-tight">RT<span className="blink">_</span></a>
        <nav className="hidden gap-8 text-sm font-medium md:flex">
          <a href="#work" className="hover:underline underline-offset-4">Work</a>
          <a href="#stack" className="hover:underline underline-offset-4">Stack</a>
          <a href="#about" className="hover:underline underline-offset-4">About</a>
          <a href="#contact" className="hover:underline underline-offset-4">Contact</a>
        </nav>
        <a href="#contact" className="card-brutal card-brutal-hover inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold">
          Hire me <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-7xl px-6 pt-20 pb-32">
      <div className="mb-10 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        <span className="inline-flex h-2 w-2 rounded-full bg-foreground" />
        Available for opportunities · Q2 2026
      </div>

      <h1 className="text-mega">
        Ria
        <br />
        Thapa<span className="text-foreground/20">.</span>
      </h1>

      <div className="mt-12 grid gap-10 md:grid-cols-12">
        <p className="md:col-span-7 md:col-start-1 text-2xl leading-tight font-medium md:text-3xl">
          Backend engineer building <span className="bg-foreground px-2 text-background">inventory systems</span> that don't lose count — in Java, Spring Boot and AWS.
        </p>
        <div className="md:col-span-4 md:col-start-9 space-y-4 self-end font-mono text-sm">
          <div className="flex justify-between border-b border-foreground/20 pb-2"><span className="text-muted-foreground">ROLE</span><span>Software Engineer</span></div>
          <div className="flex justify-between border-b border-foreground/20 pb-2"><span className="text-muted-foreground">FOCUS</span><span>Inventory Mgmt</span></div>
          <div className="flex justify-between border-b border-foreground/20 pb-2"><span className="text-muted-foreground">EXP</span><span>2+ years</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">DEGREE</span><span>M.Sc.</span></div>
        </div>
      </div>

      <div className="mt-20 flex flex-wrap items-center gap-4">
        <a href="#work" className="card-brutal card-brutal-hover inline-flex items-center gap-3 rounded-md bg-foreground px-7 py-4 text-base font-semibold text-background">
          See selected work <ArrowUpRight className="h-5 w-5" />
        </a>
        <a href="#contact" className="card-brutal card-brutal-hover inline-flex items-center gap-3 rounded-md bg-background px-7 py-4 text-base font-semibold">
          Get in touch
        </a>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Java", "Spring Boot", "AWS", "PostgreSQL", "Kafka", "Docker", "REST APIs", "Microservices"];
  const row = [...items, ...items, ...items];
  return (
    <section className="border-y-2 border-foreground bg-foreground py-6 text-background overflow-hidden">
      <div className="marquee-track flex w-max gap-12 font-display text-4xl font-bold md:text-6xl">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            {t} <span className="text-background/40">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

const projects = [
  {
    n: "01",
    title: "Real-Time Stock Ledger",
    desc: "Event-driven inventory ledger handling 50K+ SKU updates/min with idempotent writes and audit trails.",
    tags: ["Spring Boot", "Kafka", "PostgreSQL"],
  },
  {
    n: "02",
    title: "Warehouse Allocation Engine",
    desc: "Rule-based allocation across multi-region warehouses, cutting fulfillment misses by 38%.",
    tags: ["Java", "AWS Lambda", "DynamoDB"],
  },
  {
    n: "03",
    title: "Replenishment Forecaster",
    desc: "Demand forecasting service feeding purchase orders; deployed on ECS with auto-scaling.",
    tags: ["Spring Boot", "AWS ECS", "S3"],
  },
];

function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-28">
      <div className="mb-16 flex items-end justify-between">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">§ 01 — Selected Work</p>
          <h2 className="text-huge">Things I've shipped.</h2>
        </div>
        <span className="hidden font-mono text-sm text-muted-foreground md:block">(03 projects)</span>
      </div>

      <div className="space-y-8">
        {projects.map((p) => (
          <article key={p.n} className="card-brutal card-brutal-hover group grid gap-6 rounded-lg p-8 md:grid-cols-12 md:p-10">
            <div className="md:col-span-2">
              <span className="font-mono text-sm text-muted-foreground">{p.n}</span>
            </div>
            <div className="md:col-span-7">
              <h3 className="text-3xl font-bold md:text-5xl">{p.title}</h3>
              <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">{p.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="border border-foreground px-3 py-1 font-mono text-xs">{t}</span>
                ))}
              </div>
            </div>
            <div className="flex items-start justify-end md:col-span-3">
              <div className="grid h-16 w-16 place-items-center rounded-full border-2 border-foreground transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-7 w-7" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const stack = [
  { icon: Boxes, name: "Java", note: "Core language · JDK 17+" },
  { icon: Database, name: "Spring Boot", note: "REST · Data · Security" },
  { icon: Cloud, name: "AWS", note: "EC2 · ECS · Lambda · S3" },
];

function Stack() {
  return (
    <section id="stack" className="border-t-2 border-foreground bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">§ 02 — Stack</p>
        <h2 className="text-huge mb-16">Tools of the trade.</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {stack.map((s) => (
            <div key={s.name} className="card-brutal card-brutal-hover rounded-lg bg-background p-8">
              <s.icon className="mb-8 h-10 w-10" strokeWidth={1.5} />
              <h3 className="text-3xl font-bold">{s.name}</h3>
              <p className="mt-2 font-mono text-sm text-muted-foreground">{s.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-28">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">§ 03 — About</p>
          <h2 className="text-huge">A bit about me.</h2>
        </div>
        <div className="md:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/80">
          <p>
            I'm a software engineer focused on the messy, high-stakes corner of commerce: keeping inventory honest. Wrong counts cost real money, so I obsess over consistency, idempotency and clean APIs.
          </p>
          <p>
            With a Master's degree and 2+ years in production, I've shipped services that talk to warehouses, ERPs and storefronts — most of them running on AWS, all of them written with Java and Spring Boot.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="card-brutal rounded-lg p-5">
              <GraduationCap className="mb-3 h-6 w-6" />
              <p className="font-mono text-xs uppercase text-muted-foreground">Education</p>
              <p className="mt-1 font-semibold">Master's Degree</p>
            </div>
            <div className="card-brutal rounded-lg p-5">
              <Briefcase className="mb-3 h-6 w-6" />
              <p className="font-mono text-xs uppercase text-muted-foreground">Experience</p>
              <p className="mt-1 font-semibold">2+ Years · Inventory</p>
            </div>
            <div className="card-brutal rounded-lg p-5">
              <Cloud className="mb-3 h-6 w-6" />
              <p className="font-mono text-xs uppercase text-muted-foreground">Cloud</p>
              <p className="mt-1 font-semibold">AWS Deployments</p>
            </div>
            <div className="card-brutal rounded-lg p-5">
              <MapPin className="mb-3 h-6 w-6" />
              <p className="font-mono text-xs uppercase text-muted-foreground">Status</p>
              <p className="mt-1 font-semibold">Open to work</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t-2 border-foreground bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-background/60">§ 04 — Contact</p>
        <h2 className="text-mega">Let's<br />talk.</h2>

        <div className="mt-16 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <a href="mailto:riathapa.cs@gmail.com" className="group inline-flex items-center gap-4 text-3xl font-bold md:text-5xl">
              riathapa.cs@gmail.com
              <ArrowUpRight className="h-10 w-10 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />
            </a>
            <p className="mt-6 max-w-md text-background/70">
              Got an inventory system that's groaning under load, or a green-field Spring Boot project? I'd love to hear about it.
            </p>
          </div>
          
          <div className="md:col-span-4 md:col-start-9 flex flex-col gap-3 font-mono text-sm">
            <a href="https://www.linkedin.com/in/riathapa/" className="flex items-center justify-between border-b border-background/30 py-3 hover:text-background"><span className="flex items-center gap-3"><Linkedin className="h-4 w-4" /> LinkedIn</span> <ArrowUpRight className="h-4 w-4" /></a>
            <a href="https://github.com/know-riaa" className="flex items-center justify-between border-b border-background/30 py-3 hover:text-background"><span className="flex items-center gap-3"><Github className="h-4 w-4" /> GitHub</span> <ArrowUpRight className="h-4 w-4" /></a>
            <a href="mailto:riathapa.cs@gmail.com" className="flex items-center justify-between border-b border-background/30 py-3 hover:text-background"><span className="flex items-center gap-3"><Mail className="h-4 w-4" /> Email</span> <ArrowUpRight className="h-4 w-4" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-background/20">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6 font-mono text-xs text-background/60">
          <span>© 2026 Ria Thapa</span>
          <span>Built with Java in mind · Shipped with care</span>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Work />
      <Stack />
      <About />
      <Contact />
    </main>
  );
}
