import { r as reactExports, T as jsxRuntimeExports } from "./server-BKv9Kaly.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$9 = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
];
const ArrowUpRight = createLucideIcon("arrow-up-right", __iconNode$9);
const __iconNode$8 = [
  [
    "path",
    {
      d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",
      key: "lc1i9w"
    }
  ],
  ["path", { d: "m7 16.5-4.74-2.85", key: "1o9zyk" }],
  ["path", { d: "m7 16.5 5-3", key: "va8pkn" }],
  ["path", { d: "M7 16.5v5.17", key: "jnp8gn" }],
  [
    "path",
    {
      d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",
      key: "8zsnat"
    }
  ],
  ["path", { d: "m17 16.5-5-3", key: "8arw3v" }],
  ["path", { d: "m17 16.5 4.74-2.85", key: "8rfmw" }],
  ["path", { d: "M17 16.5v5.17", key: "k6z78m" }],
  [
    "path",
    {
      d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",
      key: "1xygjf"
    }
  ],
  ["path", { d: "M12 8 7.26 5.15", key: "1vbdud" }],
  ["path", { d: "m12 8 4.74-2.85", key: "3rx089" }],
  ["path", { d: "M12 13.5V8", key: "1io7kd" }]
];
const Boxes = createLucideIcon("boxes", __iconNode$8);
const __iconNode$7 = [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
];
const Briefcase = createLucideIcon("briefcase", __iconNode$7);
const __iconNode$6 = [
  ["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]
];
const Cloud = createLucideIcon("cloud", __iconNode$6);
const __iconNode$5 = [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
];
const Database = createLucideIcon("database", __iconNode$5);
const __iconNode$4 = [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
];
const Github = createLucideIcon("github", __iconNode$4);
const __iconNode$3 = [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0"
    }
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]
];
const GraduationCap = createLucideIcon("graduation-cap", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
];
const Linkedin = createLucideIcon("linkedin", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode);
function Nav() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-50 border-b-2 border-foreground bg-background/90 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "font-display text-xl font-bold tracking-tight", children: [
      "RT",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "blink", children: "_" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden gap-8 text-sm font-medium md:flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#work", className: "hover:underline underline-offset-4", children: "Work" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#stack", className: "hover:underline underline-offset-4", children: "Stack" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#about", className: "hover:underline underline-offset-4", children: "About" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "hover:underline underline-offset-4", children: "Contact" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", className: "card-brutal card-brutal-hover inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold", children: [
      "Hire me ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
    ] })
  ] }) });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative mx-auto max-w-7xl px-6 pt-20 pb-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-2 w-2 rounded-full bg-foreground" }),
      "Available for opportunities · Q2 2026"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-mega", children: [
      "Ria",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "Thapa",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/20", children: "." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid gap-10 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "md:col-span-7 md:col-start-1 text-2xl leading-tight font-medium md:text-3xl", children: [
        "Backend engineer building ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-foreground px-2 text-background", children: "inventory systems" }),
        " that don't lose count — in Java, Spring Boot and AWS."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-4 md:col-start-9 space-y-4 self-end font-mono text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-foreground/20 pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "ROLE" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Software Engineer" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-foreground/20 pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "FOCUS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Inventory Mgmt" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-foreground/20 pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "EXP" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "2+ years" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "DEGREE" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "M.Sc." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20 flex flex-wrap items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#work", className: "card-brutal card-brutal-hover inline-flex items-center gap-3 rounded-md bg-foreground px-7 py-4 text-base font-semibold text-background", children: [
        "See selected work ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-5 w-5" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "card-brutal card-brutal-hover inline-flex items-center gap-3 rounded-md bg-background px-7 py-4 text-base font-semibold", children: "Get in touch" })
    ] })
  ] });
}
function Marquee() {
  const items = ["Java", "Spring Boot", "AWS", "PostgreSQL", "Kafka", "Docker", "REST APIs", "Microservices"];
  const row = [...items, ...items, ...items];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y-2 border-foreground bg-foreground py-6 text-background overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "marquee-track flex w-max gap-12 font-display text-4xl font-bold md:text-6xl", children: row.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-12", children: [
    t,
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-background/40", children: "✦" })
  ] }, i)) }) });
}
const projects = [{
  n: "01",
  title: "Real-Time Stock Ledger",
  desc: "Event-driven inventory ledger handling 50K+ SKU updates/min with idempotent writes and audit trails.",
  tags: ["Spring Boot", "Kafka", "PostgreSQL"]
}, {
  n: "02",
  title: "Warehouse Allocation Engine",
  desc: "Rule-based allocation across multi-region warehouses, cutting fulfillment misses by 38%.",
  tags: ["Java", "AWS Lambda", "DynamoDB"]
}, {
  n: "03",
  title: "Replenishment Forecaster",
  desc: "Demand forecasting service feeding purchase orders; deployed on ECS with auto-scaling.",
  tags: ["Spring Boot", "AWS ECS", "S3"]
}];
function Work() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "work", className: "mx-auto max-w-7xl px-6 py-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16 flex items-end justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground", children: "§ 01 — Selected Work" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-huge", children: "Things I've shipped." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden font-mono text-sm text-muted-foreground md:block", children: "(03 projects)" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: projects.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "card-brutal card-brutal-hover group grid gap-6 rounded-lg p-8 md:grid-cols-12 md:p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-sm text-muted-foreground", children: p.n }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold md:text-5xl", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xl text-base text-muted-foreground md:text-lg", children: p.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: p.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "border border-foreground px-3 py-1 font-mono text-xs", children: t }, t)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-end md:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-16 w-16 place-items-center rounded-full border-2 border-foreground transition-transform group-hover:rotate-45", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-7 w-7" }) }) })
    ] }, p.n)) })
  ] });
}
const stack = [{
  icon: Boxes,
  name: "Java",
  note: "Core language · JDK 17+"
}, {
  icon: Database,
  name: "Spring Boot",
  note: "REST · Data · Security"
}, {
  icon: Cloud,
  name: "AWS",
  note: "EC2 · ECS · Lambda · S3"
}];
function Stack() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "stack", className: "border-t-2 border-foreground bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground", children: "§ 02 — Stack" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-huge mb-16", children: "Tools of the trade." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-3", children: stack.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-brutal card-brutal-hover rounded-lg bg-background p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "mb-8 h-10 w-10", strokeWidth: 1.5 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold", children: s.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-mono text-sm text-muted-foreground", children: s.note })
    ] }, s.name)) })
  ] }) });
}
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "mx-auto max-w-7xl px-6 py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-16 md:grid-cols-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground", children: "§ 03 — About" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-huge", children: "A bit about me." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/80", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "I'm a software engineer focused on the messy, high-stakes corner of commerce: keeping inventory honest. Wrong counts cost real money, so I obsess over consistency, idempotency and clean APIs." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "With a Master's degree and 2+ years in production, I've shipped services that talk to warehouses, ERPs and storefronts — most of them running on AWS, all of them written with Java and Spring Boot." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-brutal rounded-lg p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "mb-3 h-6 w-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase text-muted-foreground", children: "Education" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-semibold", children: "Master's Degree" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-brutal rounded-lg p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "mb-3 h-6 w-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase text-muted-foreground", children: "Experience" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-semibold", children: "2+ Years · Inventory" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-brutal rounded-lg p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Cloud, { className: "mb-3 h-6 w-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase text-muted-foreground", children: "Cloud" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-semibold", children: "AWS Deployments" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-brutal rounded-lg p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mb-3 h-6 w-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase text-muted-foreground", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-semibold", children: "Open to work" })
        ] })
      ] })
    ] })
  ] }) });
}
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "border-t-2 border-foreground bg-foreground text-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 font-mono text-xs uppercase tracking-widest text-background/60", children: "§ 04 — Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-mega", children: [
        "Let's",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "talk."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 grid gap-10 md:grid-cols-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:riathapa.cs@gmail.com", className: "group inline-flex items-center gap-4 text-3xl font-bold md:text-5xl", children: [
            "riathapa.cs@gmail.com",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-10 w-10 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-md text-background/70", children: "Got an inventory system that's groaning under load, or a green-field Spring Boot project? I'd love to hear about it." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-4 md:col-start-9 flex flex-col gap-3 font-mono text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.linkedin.com/in/riathapa/", className: "flex items-center justify-between border-b border-background/30 py-3 hover:text-background", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-4 w-4" }),
              " LinkedIn"
            ] }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://github.com/know-riaa", className: "flex items-center justify-between border-b border-background/30 py-3 hover:text-background", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" }),
              " GitHub"
            ] }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:riathapa.cs@gmail.com", className: "flex items-center justify-between border-b border-background/30 py-3 hover:text-background", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
              " Email"
            ] }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-background/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6 font-mono text-xs text-background/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "© 2026 Ria Thapa" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Built with Java in mind · Shipped with care" })
    ] }) })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Work, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stack, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
  ] });
}
export {
  Index as component
};
