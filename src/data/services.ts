import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "laser-cutting", title: "Laser Cutting", icon: "scissors",
    description: "High-precision CO2 laser cutting for acrylic sheets up to 25mm thickness with ±0.1mm tolerance.",
    longDescription: "Our industrial CO2 laser cutting machines deliver exceptional precision with flame-polished edges straight from the laser. Capable of cutting intricate shapes, fine details, and complex geometries in acrylic sheets from 1mm to 25mm thickness. Ideal for signage, display components, decorative panels, and precision parts requiring tight tolerances.",
    features: ["±0.1mm tolerance", "Flame-polished edge finish", "Up to 25mm thickness", "No tooling cost", "Fast turnaround", "Complex geometries"],
  },
  {
    slug: "cnc-machining", title: "CNC Machining", icon: "cog",
    description: "Advanced CNC routing and milling for 3D acrylic parts with superior dimensional accuracy.",
    longDescription: "Our multi-axis CNC machining centers handle complex 3D acrylic fabrication with precision. From beveled edges and V-grooves to 3D contours and threaded holes, our CNC capabilities enable manufacturing of sophisticated acrylic components. Suitable for thick acrylic blocks, structural parts, and products requiring mechanical assembly features.",
    features: ["3D contouring", "Bevel & V-groove cutting", "Precision drilling & tapping", "Up to 50mm thick", "Threaded inserts", "Consistent batch quality"],
  },
  {
    slug: "diamond-polishing", title: "Diamond Polishing", icon: "diamond",
    description: "Premium diamond edge polishing delivering glass-like clarity and optical-grade transparency.",
    longDescription: "Diamond polishing is our premium finishing process that achieves optical-grade edge clarity on acrylic products. Using progressively finer diamond abrasives, we produce edges that rival the transparency of the sheet surface itself. This labor-intensive process is the gold standard for luxury displays, awards, and high-end retail fixtures where edge quality is paramount.",
    features: ["Optical-grade clarity", "Glass-like transparency", "Scratch-free finish", "Premium aesthetic", "Suitable for luxury products", "Available on all thicknesses"],
  },
  {
    slug: "flame-polishing", title: "Flame Polishing", icon: "flame",
    description: "High-temperature flame polishing for smooth, glossy edges on cut acrylic components.",
    longDescription: "Flame polishing uses controlled high-temperature flame to melt and reflow the surface of cut acrylic edges, producing a smooth, glossy finish. This efficient process is ideal for production volumes where diamond polishing lead times or costs are prohibitive. Suitable for most acrylic thicknesses and straight or gently curved edges.",
    features: ["Glossy smooth finish", "Cost-effective", "Fast processing", "Production-friendly", "All thicknesses", "Clean edge appearance"],
  },
  {
    slug: "uv-printing", title: "UV Digital Printing", icon: "printer",
    description: "Full-color UV flatbed printing directly onto acrylic with vibrant, durable results.",
    longDescription: "Our industrial UV flatbed printers deliver stunning full-color graphics printed directly onto acrylic surfaces. UV-cured inks provide exceptional adhesion, color vibrancy, and outdoor durability. Print white underbase for opaque colors on clear acrylic, or print directly for transparent effects. Ideal for branded displays, signage, decorative panels, and personalized products.",
    features: ["Full-color CMYK + White", "Up to 2.5m × 1.3m", "High resolution 1440dpi", "Outdoor durable", "Instant curing", "No film or lamination needed"],
  },
  {
    slug: "silk-screen-printing", title: "Silk Screen Printing", icon: "layers",
    description: "Professional silk screen printing for logos, graphics, and functional patterns on acrylic.",
    longDescription: "Silk screen printing offers economical, high-quality graphics for production volumes. Our screen printing process delivers consistent color opacity and precise registration for logos, branding elements, and functional patterns (guidelines, measurement marks, decorative borders). Available in a wide range of ink colors including metallic and specialty formulations.",
    features: ["Cost-effective for volume", "Consistent color matching", "Metallic & specialty inks", "Multi-color registration", "Durable adhesion", "Production efficient"],
  },
  {
    slug: "hot-bending", title: "Hot Bending & Forming", icon: "thermometer",
    description: "Precision hot bending and thermoforming for curved and shaped acrylic products.",
    longDescription: "Our hot bending and thermoforming capabilities transform flat acrylic sheets into three-dimensional forms. Using precision-controlled heating elements and custom jigs, we produce consistent bends, curves, and formed shapes. From simple 90° bends to complex multi-axis forms, our experienced technicians deliver accurate results for display products, enclosures, and architectural elements.",
    features: ["Precision temperature control", "Custom jigs & fixtures", "Single & multi-axis bends", "Consistent batch results", "All acrylic thicknesses", "Complex forming available"],
  },
  {
    slug: "bonding", title: "Solvent Bonding & Assembly", icon: "link",
    description: "Professional acrylic bonding creating seamless, structurally strong joints.",
    longDescription: "Solvent bonding is the gold standard for joining acrylic components, creating molecular-level bonds that are as strong as the material itself. Our skilled technicians produce crystal-clear, bubble-free joints for display cases, boxes, aquariums, and structural assemblies. Combined with UV-cure adhesives for specialty applications, we deliver assembly quality that meets the highest standards.",
    features: ["Crystal-clear joints", "Structural strength", "Bubble-free finish", "UV-cure options", "Water-tight possible", "All thicknesses"],
  },
  {
    slug: "assembly", title: "Assembly & Kitting", icon: "package",
    description: "Complete product assembly including hardware integration, kitting, and quality inspection.",
    longDescription: "Beyond fabrication, we offer complete assembly services to deliver finished products ready for retail or end-use. Our assembly team handles hardware insertion, multi-part assembly, adhesive bonding, quality inspection, cleaning, and final packaging. Kitting services include bundling related components, inserting instruction manuals, and retail-ready packaging.",
    features: ["Hardware integration", "Multi-part assembly", "Quality inspection", "Final cleaning", "Retail-ready packaging", "Barcode & labeling"],
  },
  {
    slug: "packaging", title: "Custom Packaging", icon: "box",
    description: "Protective packaging solutions including custom foam inserts, branded boxes, and export-ready crating.",
    longDescription: "Protect your acrylic products with our comprehensive packaging solutions. From individual polybags and foam cushioning to custom-fit foam inserts, branded retail boxes, and export-ready wooden crates, we ensure your products arrive in perfect condition. Packaging is designed based on product fragility, shipping method, and destination requirements.",
    features: ["Custom foam inserts", "Branded retail boxes", "Export wooden crates", "Palletizing & strapping", "Shipping labels & barcodes", "Damage-free guarantee"],
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
