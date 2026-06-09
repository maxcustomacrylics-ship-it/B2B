import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "custom-size-cutting",
    title: "Custom Size Cutting",
    icon: "Scissors",
    description:
      "Precision cutting of acrylic sheets to your exact specifications using CNC and laser technology.",
    longDescription:
      "We offer comprehensive custom cutting services using state-of-the-art CNC routers and CO2 laser cutters. Whether you need simple rectangular cuts or complex geometric shapes, our automated cutting systems deliver consistent accuracy with tolerances as tight as ±0.1mm. Bulk orders are processed efficiently with automated material handling systems.",
    features: [
      "CNC routing for thick materials up to 50mm",
      "CO2 laser cutting for intricate designs up to 25mm",
      "Tight tolerances of ±0.1mm",
      "Support for all standard file formats (DXF, DWG, AI, SVG)",
      "Automated nesting for material optimization",
      "Quality inspection on every batch",
    ],
  },
  {
    slug: "edge-polishing",
    title: "Edge Polishing & Finishing",
    icon: "Sparkles",
    description:
      "Professional edge finishing including diamond polishing, flame polishing, and beveling for premium results.",
    longDescription:
      "Our edge finishing services transform cut acrylic into premium finished products. Using a combination of diamond polishing wheels and precision flame polishing techniques, we achieve crystal-clear, glass-like edges that enhance the overall aesthetic of your products. Available finishes range from matte to high-gloss, with optional beveled edges and radius corners.",
    features: [
      "Diamond polishing for optical clarity",
      "Flame polishing for smooth, glossy edges",
      "Beveled edge options (15°, 30°, 45°)",
      "Radius corner cutting",
      "Matte edge finish option",
      "Consistent quality across large production runs",
    ],
  },
  {
    slug: "uv-printing",
    title: "UV Digital Printing",
    icon: "Printer",
    description:
      "High-resolution UV printing directly onto acrylic surfaces for vibrant, durable graphics and branding.",
    longDescription:
      "Our industrial UV flatbed printers deliver stunning, photo-quality prints directly onto acrylic surfaces. UV-cured inks bond permanently to the substrate, creating scratch-resistant, fade-resistant graphics that maintain vibrancy for years. We can print white ink underlays for opacity, multi-layer prints for depth effects, and precise color matching using Pantone color standards.",
    features: [
      "Resolution up to 1440 dpi",
      "Full-color CMYK + White + Varnish",
      "Pantone color matching available",
      "Multi-layer printing for depth effects",
      "Scratch and UV resistant inks",
      "Suitable for indoor and outdoor use",
    ],
  },
  {
    slug: "bending-forming",
    title: "Heat Bending & Forming",
    icon: "Flame",
    description:
      "Expert thermoforming services to create curved, folded, and three-dimensional acrylic structures.",
    longDescription:
      "Our thermoforming capabilities allow us to transform flat acrylic sheets into three-dimensional forms. Using precision-controlled heating systems and custom jigs, we can create consistent bends, curves, and complex formed shapes. From simple 90° folds to compound curves and vacuum-formed parts, our experienced technicians deliver excellent results for prototypes and production runs alike.",
    features: [
      "Precision line bending for clean folds",
      "Curve forming with radius control",
      "Vacuum forming for complex 3D shapes",
      "Custom jig and mold fabrication",
      "Consistent results across batches",
      "Prototyping and low-volume production",
    ],
  },
  {
    slug: "assembly-packaging",
    title: "Assembly & Packaging",
    icon: "Package",
    description:
      "Complete assembly, hardware integration, and export-ready packaging for your acrylic products.",
    longDescription:
      "We provide complete assembly and packaging services to deliver retail-ready or installation-ready products. Our assembly team handles hardware integration (standoffs, hinges, brackets), multi-part bonding using solvent and UV adhesives, and comprehensive quality checks. Export-grade packaging ensures your products arrive safely, with custom foam inserts, corner protection, and reinforced cartons designed for international shipping.",
    features: [
      "Hardware integration (standoffs, brackets, hinges)",
      "Solvent and UV adhesive bonding",
      "Knock-down and pre-assembled options",
      "Export-grade protective packaging",
      "Custom foam inserts and cushioning",
      "Barcode labeling and retail packaging",
    ],
  },
  {
    slug: "design-support",
    title: "Design & Engineering Support",
    icon: "PenTool",
    description:
      "Professional design assistance from concept to production-ready files. 3D modeling and prototyping included.",
    longDescription:
      "Our in-house design team helps turn your concepts into production-ready designs optimized for acrylic fabrication. We provide 3D modeling, material selection guidance, structural analysis, and prototyping services. Whether you have rough sketches or finished CAD files, our engineers will review your design for manufacturability and suggest improvements that can reduce costs and enhance the final product quality.",
    features: [
      "3D modeling and CAD design",
      "Material selection consultation",
      "Design for manufacturability review",
      "Rapid prototyping (3D printing, sample cutting)",
      "Structural analysis and optimization",
      "Technical drawing and documentation",
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);
