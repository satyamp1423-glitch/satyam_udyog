import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import satyamFactory from "@/assets/satyam-factory.jpg.asset.json";
import productCorrugated from "@/assets/product-corrugated.jpg";
import productDuplex from "@/assets/product-duplex-v2.jpg";
import productDiecut from "@/assets/product-diecut-v2.jpg";
import brandIntex from "@/assets/brand-intex.png.asset.json";
import brandSandhar from "@/assets/brand-sandhar.png.asset.json";
import brandSai from "@/assets/brand-sai.png.asset.json";
import brandAerostar from "@/assets/brand-aerostar.png.asset.json";
import brandHella from "@/assets/brand-hella.png.asset.json";
import brandUnoMinda from "@/assets/brand-unominda.png.asset.json";
import brandChupps from "@/assets/brand-chupps.png.asset.json";

const BRANDS = [
  { src: brandIntex.url, alt: "Intex" },
  { src: brandSandhar.url, alt: "Sandhar" },
  { src: brandSai.url, alt: "SAI Group" },
  { src: brandAerostar.url, alt: "Aerostar Helmets" },
  { src: brandHella.url, alt: "Hella" },
  { src: brandUnoMinda.url, alt: "Uno Minda" },
  { src: brandChupps.url, alt: "Chupps" },
];


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Satyam Udyog — Precision Corrugated & Duplex Packaging" },
      {
        name: "description",
        content:
          "25+ years manufacturing corrugated and duplex boxes with in-house printing for automotive and tech industries across India.",
      },
      { property: "og:title", content: "Satyam Udyog — Precision Corrugated & Duplex Packaging" },
      {
        property: "og:description",
        content:
          "25+ years manufacturing corrugated and duplex boxes with in-house printing for automotive and tech industries across India.",
      },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "1.2M", label: "Boxes Per Month" },
  { value: "450+", label: "Enterprise Clients" },
  { value: "MSME", label: "Certified Quality" },
];

const differentiators = [
  {
    code: "01 / PRECISION",
    title: "Automotive-Grade Quality",
    body: "Engineered to withstand the rigorous logistics of automotive supply chains. Bursting and edge-crush tested for zero damage in transit.",
  },
  {
    code: "02 / SCALE",
    title: "High-Volume Output",
    body: "A manufacturing line that maintains consistent supply for tech OEMs and high-volume electronics manufacturers — never miss a dispatch.",
  },
  {
    code: "03 / FINISH",
    title: "In-House Printing",
    body: "Multi-color flexographic and offset printing directly on duplex or corrugated boards. Premium brand presence on every shipment.",
  },
  {
    code: "04 / LEGACY",
    title: "25 Years of Reliability",
    body: "A quarter-century of uninterrupted supply to Indian manufacturers. Your production line never waits on Satyam.",
  },
  {
    code: "05 / CUSTOM",
    title: "Bespoke Structural Design",
    body: "Custom dimensions, die-cuts, and structural inserts engineered to your part — minimizing material waste and maximizing protection.",
  },
  {
    code: "06 / SUPPORT",
    title: "Dedicated Account Management",
    body: "A single point of contact from first inquiry through delivery and reorder. We stay accountable so your supply chain stays predictable.",
  },
];

const products = [
  {
    img: productCorrugated,
    title: "Heavy-Duty Corrugated",
    meta: "3-Ply / 5-Ply / 7-Ply",
    desc: "Single, double, and triple-wall corrugated boxes for export logistics and industrial freight.",
  },
  {
    img: productDuplex,
    title: "Premium Duplex Boxes",
    meta: "Printed & Laminated",
    desc: "High-fidelity printed duplex packaging for consumer electronics, retail, and premium product launches.",
  },
  {
    img: productDiecut,
    title: "Custom Die-Cut Inserts",
    meta: "Internal Structural Support",
    desc: "Bespoke inserts and partitions that cradle automotive and tech components against shock and vibration.",
  },
];

const industries = [
  "Automotive",
  "Electronics",
  "IT & Hardware",
  "Auto Components",
  "Industrial Goods",
  "Consumer Tech",
  "Food Industry",
  "Logistics",
  "Pharma",
];

const process = [
  { step: "01", title: "Brief & Audit", body: "We review your part, supply chain, and current packaging failure modes." },
  { step: "02", title: "Structural Design", body: "Engineers prototype custom flutes, die-cuts, and inserts." },
  { step: "03", title: "Print & Tool", body: "Multi-color plates produced in-house. Sample approval before mass run." },
  { step: "04", title: "Production & Dispatch", body: "Full-volume run, QC tested, dispatched on schedule." },
];

function field(label: string, required: boolean, children: ReactNode) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
        {required && <span className="text-neon ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

function Index() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    product: "",
    qty: "",
    um: "kg",
    targetPrice: "",
    whenRequired: "",
    length: "",
    width: "",
    height: "",
    style: "",
    deliveryCity: "",
    pincode: "",
    additionalDetails: "",
    printingRequired: false,
    captchaInput: "",
  });

  const [captcha, setCaptcha] = useState(() => Math.floor(10000 + Math.random() * 90000).toString());
  const [submitted, setSubmitted] = useState(false);

  const refreshCaptcha = () => {
    setCaptcha(Math.floor(10000 + Math.random() * 90000).toString());
    setForm((f) => ({ ...f, captchaInput: "" }));
  };

  const update = (key: string, value: string | boolean) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (form.captchaInput !== captcha) {
      alert("Captcha did not match. Please try again.");
      refreshCaptcha();
      return;
    }
    setSubmitted(true);
  };

  const enquiryForm = submitted ? (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-xl font-display font-semibold mb-2">Enquiry Submitted</h3>
        <p className="text-sm text-muted-foreground">
          Thanks — our team will review your requirement and get back to you within one business day.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-xs uppercase tracking-widest text-neon hover:underline"
        >
          Send another enquiry
        </button>
      </div>
  ) : (

    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {field("Name", true, (
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Full name"
            className="w-full bg-background border border-border rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-neon transition-colors"
          />
        ))}
        {field("Email", true, (
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@company.com"
            className="w-full bg-background border border-border rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-neon transition-colors"
          />
        ))}
        {field("Mobile Number", true, (
          <input
            type="tel"
            required
            value={form.mobile}
            onChange={(e) => update("mobile", e.target.value)}
            placeholder="+91"
            className="w-full bg-background border border-border rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-neon transition-colors"
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="md:col-span-2">
          {field("Product Name/Spec", false, (
            <input
              type="text"
              value={form.product}
              onChange={(e) => update("product", e.target.value)}
              placeholder="Product Name"
              className="w-full bg-background border border-border rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-neon transition-colors"
            />
          ))}
        </div>
        {field("QTY", true, (
          <input
            type="number"
            required
            min={1}
            value={form.qty}
            onChange={(e) => update("qty", e.target.value)}
            placeholder="QTY"
            className="w-full bg-background border border-border rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-neon transition-colors"
          />
        ))}
        {field("UM", false, (
          <select
            value={form.um}
            onChange={(e) => update("um", e.target.value)}
            className="w-full bg-background border border-border rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-neon transition-colors appearance-none"
          >
            <option value="kg">kg</option>
            <option value="pcs">pcs</option>
            <option value="units">units</option>
            <option value="boxes">boxes</option>
          </select>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 items-end">
        <div className="md:col-span-2">
          {field("Target price", false, (
            <input
              type="text"
              value={form.targetPrice}
              onChange={(e) => update("targetPrice", e.target.value)}
              placeholder="Target price"
              className="w-full bg-background border border-border rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-neon transition-colors"
            />
          ))}
        </div>
        {field("When Required", false, (
          <input
            type="date"
            value={form.whenRequired}
            onChange={(e) => update("whenRequired", e.target.value)}
            className="w-full bg-background border border-border rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-neon transition-colors"
          />
        ))}
        <div className="md:col-span-2">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Size</div>
          <div className="grid grid-cols-3 gap-2">
            <div className="relative">
              <input
                type="number"
                value={form.length}
                onChange={(e) => update("length", e.target.value)}
                placeholder="L"
                className="w-full bg-background border border-border rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-neon transition-colors pr-6"
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">in</span>
            </div>
            <div className="relative">
              <input
                type="number"
                value={form.width}
                onChange={(e) => update("width", e.target.value)}
                placeholder="W"
                className="w-full bg-background border border-border rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-neon transition-colors pr-6"
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">in</span>
            </div>
            <div className="relative">
              <input
                type="number"
                value={form.height}
                onChange={(e) => update("height", e.target.value)}
                placeholder="H"
                className="w-full bg-background border border-border rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-neon transition-colors pr-6"
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">in</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {field("Style", false, (
          <input
            type="text"
            value={form.style}
            onChange={(e) => update("style", e.target.value)}
            placeholder="Style"
            className="w-full bg-background border border-border rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-neon transition-colors"
          />
        ))}
        {field("Delivery City", true, (
          <input
            type="text"
            required
            value={form.deliveryCity}
            onChange={(e) => update("deliveryCity", e.target.value)}
            placeholder="Delivery City"
            className="w-full bg-background border border-border rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-neon transition-colors"
          />
        ))}
        {field("Pincode", true, (
          <input
            type="text"
            required
            value={form.pincode}
            onChange={(e) => update("pincode", e.target.value)}
            placeholder="Pincode"
            className="w-full bg-background border border-border rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-neon transition-colors"
          />
        ))}
      </div>

      {field("Additional Details", false, (
        <textarea
          value={form.additionalDetails}
          onChange={(e) => update("additionalDetails", e.target.value)}
          placeholder="Additional Details"
          className="w-full bg-background border border-border rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-neon transition-colors h-20 resize-none"
        />
      ))}

      <div className="flex items-center gap-3">
        <input
          id="printing"
          type="checkbox"
          checked={form.printingRequired}
          onChange={(e) => update("printingRequired", e.target.checked)}
          className="h-4 w-4 rounded-sm border border-border bg-background text-neon focus:ring-neon"
        />
        <label htmlFor="printing" className="text-sm text-muted-foreground">
          Printing Required
        </label>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
        <div className="text-sm font-medium min-w-[140px]">
          Enter the code shown <span className="text-neon">*</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative px-4 py-2 bg-background border border-border rounded-sm min-w-[120px] text-center select-none overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                backgroundSize: "6px 6px",
              }}
            />
            <div className="relative font-mono text-lg tracking-[0.2em] line-through text-foreground">
              {captcha}
            </div>
          </div>
          <button
            type="button"
            onClick={refreshCaptcha}
            className="p-2 rounded-sm border border-border hover:border-neon hover:text-neon transition-colors"
            aria-label="Refresh captcha"
          >
            ↻
          </button>
          <input
            type="text"
            required
            value={form.captchaInput}
            onChange={(e) => update("captchaInput", e.target.value)}
            className="w-32 bg-background border border-border rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-neon transition-colors"
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-neon text-neon-foreground py-3 px-8 inline-flex items-center justify-center gap-2 rounded-sm text-sm font-semibold ring-1 ring-neon hover:scale-[1.02] active:scale-95 transition-transform mt-2"
      >
        Submit
      </button>
    </form>
  );

  return (
    <main className="bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-display font-semibold tracking-tight text-xl">
            Satyam <span className="text-neon">Udyog</span>
          </a>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#why" className="text-sm font-medium hover:text-neon transition-colors">
              Why Us
            </a>
            <a href="#products" className="text-sm font-medium hover:text-neon transition-colors">
              Products
            </a>
            <a href="#industries" className="text-sm font-medium hover:text-neon transition-colors">
              Industries
            </a>
            <a href="#process" className="text-sm font-medium hover:text-neon transition-colors">
              Process
            </a>
            <a
              href="#contact"
              className="bg-neon text-neon-foreground px-4 py-2 rounded-sm text-sm font-semibold ring-1 ring-neon hover:bg-neon/90 transition-colors"
            >
              Request Quote
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header id="top" className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-8 animate-entrance">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-neon">
              <span className="w-8 h-px bg-neon" />
              Precision Engineered Packaging · Est. 1999
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-semibold leading-none text-balance max-w-[25ch]">
              Structural integrity for the{" "}
              <span className="text-muted-foreground">industrial age.</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-12 mt-8">
              <div className="flex flex-col gap-6 md:max-w-xl">
                <p className="text-base md:text-lg text-muted-foreground text-pretty">
                  Satyam Udyog manufactures high-performance corrugated and duplex
                  packaging for India's leading automotive and technology manufacturers.
                  Twenty-five years of precision, in-house printing, and zero-compromise
                  reliability.
                </p>
                <div className="flex gap-4">
                  <a
                    href="#contact"
                    className="bg-neon text-neon-foreground py-3 px-5 inline-flex items-center gap-2 rounded-sm text-sm font-semibold ring-1 ring-neon hover:scale-[1.02] active:scale-95 transition-transform"
                  >
                    <span className="text-lg leading-none">+</span>
                    Start a Project
                  </a>
                  <a
                    href="#products"
                    className="border border-foreground/20 py-3 px-5 inline-flex items-center rounded-sm text-sm font-semibold hover:border-neon hover:text-neon transition-colors"
                  >
                    View Capabilities
                  </a>
                </div>
              </div>
              <div className="w-full md:flex-1 h-80 md:h-[450px] relative overflow-hidden rounded-md ring-1 ring-border">
                <img
                  src={satyamFactory.url}
                  alt="Satyam Udyog manufacturing facility in IMT Manesar, Gurugram"
                  width={1280}
                  height={896}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Strip */}
      <section className="py-12 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-4xl font-display font-semibold text-neon">{s.value}</span>
                <span className="text-xs uppercase tracking-tight text-muted-foreground mt-1">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-3xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-neon">
              Why Satyam Udyog
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-display font-semibold leading-tight text-balance">
              We don't just make boxes. We engineer protection.
            </h2>
            <p className="mt-6 text-muted-foreground text-pretty">
              From structural design to high-speed multi-color printing, every step happens
              under one roof — so quality, cost, and timing stay in our control, not someone
              else's.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border ring-1 ring-border overflow-hidden rounded-md">
            {differentiators.map((d) => (
              <div
                key={d.code}
                className="bg-background p-8 hover:bg-surface transition-colors duration-300"
              >
                <div className="text-xs font-display text-neon mb-4 tracking-widest">
                  {d.code}
                </div>
                <h3 className="text-xl font-medium mb-3">{d.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-24 px-6 bg-surface/40 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-semibold leading-tight max-w-[20ch] text-balance">
              The Core Inventory.
            </h2>
            <p className="text-sm text-muted-foreground max-w-[36ch]">
              Every box is a piece of industrial craft — designed for maximum crush resistance
              and tested against the realities of your supply chain.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <article key={p.title} className="group">
                <div className="aspect-square mb-6 overflow-hidden rounded-md bg-surface ring-1 ring-border">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={896}
                    height={896}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="text-lg font-medium group-hover:text-neon transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-2 uppercase tracking-widest">
                  {p.meta}
                </p>
                <p className="text-sm text-muted-foreground mt-3 text-pretty">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <span className="text-xs font-semibold tracking-widest uppercase text-neon">
                Industries Served
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-display font-semibold leading-tight text-balance">
                Built for the industries that can't afford a damaged shipment.
              </h2>
              <p className="mt-6 text-muted-foreground text-pretty">
                The majority of our work supports automotive component manufacturers and
                technology companies — verticals where packaging failure means production
                stoppages downstream.
              </p>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-px bg-border ring-1 ring-border rounded-md overflow-hidden">
              {industries.map((i) => (
                <div
                  key={i}
                  className="bg-background px-6 py-8 text-sm font-medium hover:bg-surface hover:text-neon transition-colors"
                >
                  {i}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 px-6 bg-surface/40 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-neon">
              The Process
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-display font-semibold leading-tight max-w-[24ch] text-balance">
              From spec sheet to dispatched pallet.
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-12 divide-y md:divide-y-0 md:divide-x divide-border">
            {process.map((p) => (
              <div key={p.step} className="pt-8 md:pt-0 md:pl-8 first:md:pl-0">
                <div className="text-xs font-display text-neon mb-4 tracking-widest">
                  {p.step}
                </div>
                <h3 className="text-lg font-medium mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-20 px-6 bg-surface/40 border-y border-border">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
            Trusted By
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-14 items-center justify-items-center w-full">
            {BRANDS.map((brand) => (
              <img
                key={brand.alt}
                src={brand.src}
                alt={`${brand.alt} logo`}
                loading="lazy"
                className="h-10 md:h-12 w-auto max-w-[160px] object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>

        </div>
      </section>

      {/* Enquiry */}
      <section id="enquiry" className="py-24 px-6 bg-surface/40 border-y border-border">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="lg:w-1/3 flex flex-col gap-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-neon">
              Send Enquiry
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold leading-tight text-balance">
              Looking for packaging? Send Enquire Now!
            </h2>
            <p className="text-sm text-muted-foreground text-pretty">
              Share your requirement. Our expert will discuss after understanding the exact requirement.
            </p>
          </div>
          <div className="flex-1 bg-surface p-6 md:p-10 rounded-md ring-1 ring-border">
            {enquiryForm}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3 flex flex-col gap-8">
            <span className="text-xs font-semibold tracking-widest uppercase text-neon">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold leading-tight text-balance">
              Get a custom production quote.
            </h2>
            <div className="space-y-5 text-sm text-muted-foreground">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground/60 mb-1">
                  Factory
                </div>
                <p>
                  Satyam Udyog
                  <br />
                  Plot No. 291B, Sector 6 IMT Manesar
                  <br />
                  Gurugram, Haryana
                </p>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground/60 mb-1">
                  Phone
                </div>
                <p>+91 98117 98433</p>
                <p>+91 97739 63738</p>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground/60 mb-1">
                  Email
                </div>
                <p>satyamudg_@gmail.com</p>
                <p>satyamp1423@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-surface p-8 md:p-10 rounded-md ring-1 ring-border">
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks — our team will get back to you within one business day.");
              }}
            >
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="bg-background border-b border-border px-0 py-2 text-sm focus:outline-none focus:border-neon transition-colors"
                  placeholder="Full name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Company
                </label>
                <input
                  type="text"
                  className="bg-background border-b border-border px-0 py-2 text-sm focus:outline-none focus:border-neon transition-colors"
                  placeholder="Business name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="bg-background border-b border-border px-0 py-2 text-sm focus:outline-none focus:border-neon transition-colors"
                  placeholder="you@company.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Phone
                </label>
                <input
                  type="tel"
                  className="bg-background border-b border-border px-0 py-2 text-sm focus:outline-none focus:border-neon transition-colors"
                  placeholder="+91"
                />
              </div>
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Requirement
                </label>
                <textarea
                  className="bg-background border-b border-border px-0 py-2 text-sm focus:outline-none focus:border-neon transition-colors h-24 resize-none"
                  placeholder="Box type, dimensions, monthly volume, printing needs"
                />
              </div>
              <button
                type="submit"
                className="md:col-span-2 md:w-fit bg-neon text-neon-foreground py-3 px-5 inline-flex items-center gap-2 rounded-sm text-sm font-semibold ring-1 ring-neon hover:scale-[1.02] active:scale-95 transition-transform mt-2"
              >
                <span className="text-lg leading-none">+</span>
                Submit Quote Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-display font-semibold tracking-tight text-lg text-muted-foreground">
            Satyam <span className="text-foreground/40">Udyog</span>
          </span>
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground/70 text-center">
            © {new Date().getFullYear()} Satyam Udyog. All manufacturing rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-muted-foreground">ISO 9001:2015</span>
            <span className="text-xs text-muted-foreground">MSME Registered</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
