export type ServicePageData = {
  slug: string; title: string; h1: string;
  metaDesc: string; intro: string;
  whatIs: string; benefits: string[];
  materials: string[]; specs: { label: string; value: string }[];
  applications: string[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
};

export const servicePages: ServicePageData[] = [
  {
    slug: "laser-cutting", title: "Laser Cutting", h1: "Custom Acrylic Laser Cutting Services",
    metaDesc: "Precision laser cutting for custom acrylic displays, signage, retail fixtures, and industrial components. Engineering review, quality inspection, worldwide delivery.",
    intro: "Precision laser cutting solutions for custom acrylic displays, signage, retail fixtures, protective panels and industrial components.\n\nOur engineering team reviews every project and coordinates the most suitable manufacturing process to deliver accurate, production-ready acrylic products with consistent quality and worldwide delivery support.",
    whatIs: "Laser cutting uses a focused high-power CO2 laser beam to vaporize acrylic material along a programmed path. Unlike mechanical cutting, laser cutting produces no physical contact with the material, resulting in clean, stress-free edges that require minimal post-processing. The concentrated heat of the laser beam simultaneously cuts and polishes the edge, creating a glossy, transparent finish directly from the machine.",
    benefits: ["Flame-polished edges straight from the laser — no secondary polishing needed for most applications","Extremely tight tolerances of ±0.1mm ensure consistent quality across production runs","Zero tooling cost — the laser path is programmed digitally, making it economical for prototypes and small batches","Fast processing speeds enable competitive pricing for both small and large volume orders","Complex geometries including sharp internal corners, fine details, and intricate patterns are achievable","No material stress or micro-cracking — the non-contact process preserves material integrity"],
    materials: ["Cast Acrylic — premium optical clarity, ideal for displays and signage","Extruded Acrylic — consistent thickness, economical for volume production","PETG — impact-resistant, suitable for retail fixtures and protective applications","Polycarbonate — extreme durability, used for industrial and safety components","PVC — cost-effective for non-display applications","ABS — tough and rigid, suitable for structural and industrial parts"],
    specs: [{ label: "Max Sheet Size", value: "2,500mm × 1,300mm" },{ label: "Thickness Range", value: "1mm – 25mm" },{ label: "Tolerance", value: "±0.1mm" },{ label: "Edge Finish", value: "Flame-polished, as-cut" },{ label: "Min. Internal Radius", value: "0.5mm" },{ label: "Lead Time", value: "7–15 business days" }],
    applications: ["Retail Displays","POP Displays","Signage & Wayfinding","Decorative Panels","Awards & Trophies","Medical Components","Electronic Enclosures","Custom Parts"],
    faqs: [
      { question: "What thickness of acrylic can you laser cut?", answer: "We can laser cut acrylic from 1mm up to 25mm thickness. Thicker materials (above 25mm) are typically processed via CNC machining for better edge quality and precision." },
      { question: "Do laser-cut edges need additional polishing?", answer: "For most applications, laser-cut edges come out flame-polished and ready to use. For premium display products requiring optical-grade clarity, we can add diamond polishing as a secondary process." },
      { question: "What file formats do you accept for laser cutting?", answer: "We accept DXF, DWG, AI, EPS, PDF, and SVG vector files. Our engineering team can also work from sketches, reference images, or physical samples to create production-ready files." },
      { question: "Is there a minimum order quantity for laser cutting?", answer: "No strict minimum. We handle single prototypes to mass production. Pricing becomes more economical at higher quantities due to setup amortization." },
    ],
    relatedServices: ["cnc-machining","diamond-polishing","uv-printing","oem-project-support"],
  },
  {
    slug: "cnc-machining", title: "CNC Machining", h1: "Precision CNC Acrylic Machining Services",
    metaDesc: "Multi-axis CNC machining for acrylic parts — 3D contouring, beveling, drilling, tapping. Tight tolerances, consistent quality for industrial and commercial applications.",
    intro: "Our CNC machining service handles complex 3D acrylic fabrication that goes beyond flat sheet cutting. With multi-axis CNC routers, we produce beveled edges, V-grooves, drilled and tapped holes, 3D contours, and precision mechanical features. This capability enables sophisticated acrylic components for industrial, commercial, and architectural applications.",
    whatIs: "CNC (Computer Numerical Control) machining uses rotating cutting tools guided by computer programs to remove material from acrylic sheets and blocks. Unlike laser cutting which is limited to 2D profiles, CNC machining can create 3D features including angled edges, pockets, threaded holes, and contoured surfaces. This makes it the preferred method for parts requiring mechanical assembly, structural features, or three-dimensional geometry.",
    benefits: ["3D capability — create angled edges, pockets, channels, and contoured surfaces not possible with laser cutting","Precision threading — drill and tap holes for screws, standoffs, and hardware integration","Consistent batch quality — CNC programs ensure identical parts across production runs","Thick material capability — process acrylic up to 50mm thickness","Multiple finishing options — combine CNC cutting with polishing, painting, or printing"],
    materials: ["Cast Acrylic — best for optical applications and premium finishes","Extruded Acrylic — economical, consistent thickness for volume production","PETG — impact-resistant, suitable for retail and industrial fixtures","Polycarbonate — extreme durability for safety and structural applications","PVC — rigid and cost-effective for non-display parts","ABS — machinable engineering plastic for functional components"],
    specs: [{ label: "Max Sheet Size", value: "2,000mm × 3,000mm" },{ label: "Thickness Range", value: "3mm – 50mm" },{ label: "Tolerance", value: "±0.1mm" },{ label: "Spindle Speed", value: "Up to 24,000 RPM" },{ label: "Thread Types", value: "M2 – M12 metric, UNC/UNF" },{ label: "Lead Time", value: "10–18 business days" }],
    applications: ["Display Stands & Fixtures","POP Displays","Architectural Panels","Machine Guards","Medical Equipment","Electronic Enclosures","Industrial Components","Custom Parts"],
    faqs: [
      { question: "What's the difference between CNC machining and laser cutting?", answer: "Laser cutting is best for 2D profile cutting with polished edges. CNC machining handles 3D features including beveled edges, threaded holes, pockets, and contoured surfaces. Many projects combine both processes." },
      { question: "Can you add threaded inserts to acrylic parts?", answer: "Yes. We can drill and tap threads directly into acrylic, or install metal threaded inserts (brass or stainless steel) for applications requiring frequent assembly and disassembly." },
      { question: "What is the thickest acrylic you can CNC machine?", answer: "We routinely machine acrylic up to 50mm thick. For specialized applications, we can handle thicker blocks upon request." },
    ],
    relatedServices: ["laser-cutting","diamond-polishing","uv-printing","bonding-assembly"],
  },
  {
    slug: "diamond-polishing", title: "Diamond Polishing", h1: "Premium Diamond Edge Polishing for Acrylic",
    metaDesc: "Optical-grade diamond polishing for acrylic edges — crystal-clear, glass-like finish. Premium finishing for luxury displays, awards, and high-end retail products.",
    intro: "Diamond polishing delivers the highest quality edge finish available for acrylic products. Using progressively finer diamond abrasives, we achieve optical-grade transparency on cut edges — the clarity rivals the sheet surface itself. This labor-intensive process is the gold standard for luxury retail displays, premium awards, architectural features, and any application where edge appearance is critical.",
    whatIs: "Diamond polishing is a multi-stage abrasive process that progressively smooths acrylic edges using diamond-impregnated tools of increasingly fine grit. Starting with coarse grit to remove cutting marks, the process advances through medium, fine, and ultra-fine stages until the edge achieves optical clarity. The result is a completely transparent, glass-like edge that enhances the premium appearance of acrylic products.",
    benefits: ["Optical-grade clarity — edges become completely transparent with no visible tool marks","Premium aesthetic — the highest quality finish available for luxury and high-end products","Smooth to touch — no sharp edges, burrs, or roughness","Consistent finish — identical quality across all edges of a product","Suitable for all thicknesses — from 3mm to 50mm sheets","Combines with other processes — apply after laser cutting or CNC machining"],
    materials: ["Cast Acrylic — best results due to material hardness and optical properties","Extruded Acrylic — good results for non-premium applications","PETG — can be polished but results vary","Polycarbonate — polishable with specialized techniques"],
    specs: [{ label: "Finish Quality", value: "Optical-grade transparency" },{ label: "Thickness Range", value: "3mm – 50mm" },{ label: "Edge Types", value: "Flat, beveled, rounded, stepped" },{ label: "Applications", value: "Luxury displays, awards, architectural" },{ label: "Lead Time Impact", value: "+3–5 business days" }],
    applications: ["Luxury Retail Displays","Corporate Awards & Trophies","Architectural Features","High-End Signage","Jewelry Display Cases","Museum Exhibits","Premium Gift Products"],
    faqs: [
      { question: "How does diamond polishing compare to flame polishing?", answer: "Diamond polishing produces the highest optical clarity and is the preferred finish for premium products. Flame polishing is faster and more economical for production volumes where a glossy (not optical-grade) finish is sufficient." },
      { question: "Can all edges be diamond polished?", answer: "Straight external edges polish best. Internal cutouts, sharp corners, and complex profiles may have limitations. Our engineers can advise on the best finishing approach for your specific design." },
      { question: "How much does diamond polishing add to lead time?", answer: "Typically 3–5 additional business days depending on the number of edges and quantity. For large orders, we allocate dedicated polishing stations to maintain schedule." },
    ],
    relatedServices: ["laser-cutting","cnc-machining","flame-polishing","uv-printing"],
  },
  {
    slug: "flame-polishing", title: "Flame Polishing", h1: "Professional Acrylic Flame Polishing Services",
    metaDesc: "High-quality flame polishing for acrylic edges — glossy, smooth finish. Cost-effective alternative to diamond polishing for production volumes with fast turnaround.",
    intro: "Flame polishing provides an efficient, cost-effective method for achieving glossy, smooth edges on cut acrylic components. Using precisely controlled high-temperature flame, the process melts and reflows the surface layer of cut edges, producing a clean, glossy finish. Ideal for production volumes where diamond polishing lead times or costs would be prohibitive.",
    whatIs: "Flame polishing uses a controlled hydrogen-oxygen or propane-oxygen flame to briefly melt the surface of a cut acrylic edge. As the molten surface cools, it reflows into a smooth, glossy finish. The process is fast — edges can be polished at rates of several meters per minute — making it highly economical for production quantities while still delivering a professional appearance.",
    benefits: ["Cost-effective — significantly more economical than diamond polishing for production volumes","Fast processing — edges polished at high speed, keeping lead times short","Consistent glossy finish — uniform appearance across production batches","Works on most thicknesses — from 2mm to 25mm acrylic sheets","Combines with other finishing — can be applied after laser cutting or CNC machining","Low cost for straight edges and gentle curves"],
    materials: ["Cast Acrylic — excellent flame polishing results","Extruded Acrylic — good results, slightly less glossy than cast","PETG — can be flame polished with care","Not recommended for polycarbonate or PVC"],
    specs: [{ label: "Finish Quality", value: "Glossy, smooth" },{ label: "Thickness Range", value: "2mm – 25mm" },{ label: "Best For", value: "Straight edges, gentle curves" },{ label: "Processing Speed", value: "Up to 5 meters/minute" },{ label: "Lead Time Impact", value: "+1–2 business days" }],
    applications: ["Retail Display Fixtures","POP Displays","Signage","Shelving","Brochure Holders","Standard Display Products","Promotional Items"],
    faqs: [
      { question: "When should I choose flame polishing over diamond polishing?", answer: "Choose flame polishing for production volumes where a professional glossy finish is sufficient and cost/speed are priorities. Choose diamond polishing for premium products requiring optical-grade edge clarity, such as luxury displays and awards." },
      { question: "Will flame polishing affect the dimensions of my parts?", answer: "Flame polishing removes an extremely thin surface layer and has negligible impact on part dimensions. For tight-tolerance parts, our process accounts for this in the cutting stage." },
      { question: "Can complex shapes be flame polished?", answer: "Flame polishing works best on straight edges and gentle external curves. Sharp internal corners and intricate profiles are better suited to diamond polishing or alternative finishing methods." },
    ],
    relatedServices: ["laser-cutting","cnc-machining","diamond-polishing","bonding-assembly"],
  },
  {
    slug: "uv-printing", title: "UV Printing", h1: "UV Digital Printing on Acrylic",
    metaDesc: "Full-color UV flatbed printing directly onto acrylic — vibrant, durable, weather-resistant. CMYK + White ink, up to 2.5m × 1.3m, instant curing for fast turnaround.",
    intro: "Our UV digital printing service delivers stunning full-color graphics printed directly onto acrylic surfaces. Industrial UV flatbed printers apply CMYK and white inks that cure instantly under UV light, producing vibrant, scratch-resistant, and weather-durable results. Perfect for branded retail displays, custom signage, decorative panels, and personalized products.",
    whatIs: "UV digital printing uses piezoelectric print heads to deposit UV-curable inks directly onto acrylic surfaces. The inks are cured instantly by UV LED lamps mounted on the print carriage, creating a durable bond without the need for drying time, lamination, or protective coatings. White ink capability enables printing on clear, colored, and dark acrylic with full opacity control — from transparent effects to solid opaque graphics.",
    benefits: ["Full-color CMYK + White — vibrant, photo-quality graphics with precise color matching","Instant UV curing — no drying time, ready for next process immediately","Durable and weather-resistant — suitable for indoor and covered outdoor use","Print directly onto acrylic — no film, lamination, or adhesive required","Large format — print areas up to 2.5m × 1.3m in a single pass","Variable data capable — personalize individual pieces within a production run"],
    materials: ["Cast Acrylic (clear, colored, frosted, mirror)","Extruded Acrylic","PETG","Polycarbonate","PVC","ABS"],
    specs: [{ label: "Max Print Area", value: "2,500mm × 1,300mm" },{ label: "Resolution", value: "Up to 1,440 dpi" },{ label: "Ink Type", value: "UV-curable CMYK + White" },{ label: "Substrate Thickness", value: "1mm – 50mm" },{ label: "Finish Options", value: "Gloss, matte, spot varnish" },{ label: "Lead Time", value: "7–12 business days" }],
    applications: ["Branded Retail Displays","Custom Signage","Decorative Panels","POP Displays","Personalized Products","Corporate Awards","Wayfinding Signs","Promotional Items"],
    faqs: [
      { question: "How durable is UV printing on acrylic?", answer: "UV-cured inks form a strong mechanical and chemical bond with acrylic surfaces. The print is scratch-resistant, water-resistant, and suitable for indoor use and covered outdoor applications. For full outdoor exposure, we recommend additional protective measures." },
      { question: "Can you print white on clear acrylic?", answer: "Yes. Our printers include white ink capability. We can print solid white underlayers for opacity, white text on clear backgrounds, or create layered effects combining white and CMYK for stunning translucent graphics." },
      { question: "What resolution and color accuracy can I expect?", answer: "We print at up to 1,440 dpi for photo-quality output. Color matching to Pantone references is available for brand-critical applications. We provide print proofs for approval before production runs." },
    ],
    relatedServices: ["laser-cutting","cnc-machining","diamond-polishing","oem-project-support"],
  },
  {
    slug: "thermoforming", title: "Thermoforming", h1: "Acrylic Thermoforming & Heat Bending",
    metaDesc: "Precision thermoforming and heat bending for acrylic — 3D shapes, curved displays, custom enclosures. Consistent quality with custom jigs and temperature-controlled processes.",
    intro: "Our thermoforming and heat bending services transform flat acrylic sheets into three-dimensional products. Using precision-controlled heating and custom forming jigs, we produce consistent bends, curves, and formed shapes for display products, protective covers, retail fixtures, and architectural elements. From simple 90° bends to complex multi-axis forms, our experienced team delivers accurate, repeatable results.",
    whatIs: "Thermoforming heats acrylic sheet to its softening temperature (typically 140–180°C), making it pliable enough to be shaped over or into a mold. Heat bending uses localized heating along a bend line to create precise angles. Both processes use custom jigs and fixtures to ensure consistent geometry across production runs. Once cooled, the acrylic retains its new shape with full structural integrity.",
    benefits: ["Create 3D forms from flat sheet — enables complex product geometries","Consistent results — custom jigs ensure identical parts across production","Cost-effective for medium volumes — lower tooling cost than injection molding","Multiple bend types — single, multi-axis, compound curves, and radius bends","Preserves material properties — formed acrylic retains clarity and strength","Combines with other processes — cut, print, then form for complete fabrication"],
    materials: ["Cast Acrylic — best for optical applications and premium forming","Extruded Acrylic — good formability, economical for volume production","PETG — excellent formability, impact-resistant","Polycarbonate — requires higher forming temperatures","PVC — good for non-display, cost-sensitive applications"],
    specs: [{ label: "Max Sheet Size", value: "2,000mm × 1,500mm" },{ label: "Thickness Range", value: "2mm – 15mm" },{ label: "Bend Types", value: "90°, radius, multi-axis, compound" },{ label: "Forming Method", value: "Line bending, drape forming, vacuum forming" },{ label: "Lead Time", value: "10–18 business days" }],
    applications: ["Curved Display Stands","Protective Covers","Retail Fixtures","Architectural Elements","Product Enclosures","POP Displays","Signage","Machine Guards"],
    faqs: [
      { question: "What is the minimum bend radius for acrylic?", answer: "The minimum bend radius depends on thickness. As a general rule, the radius should be at least 3–4 times the material thickness. Our engineers can advise on optimal bend parameters for your design." },
      { question: "Can you combine thermoforming with printing?", answer: "Yes. We can UV print graphics on flat acrylic sheet before forming, creating curved branded displays. Careful registration ensures graphics align correctly on the formed product." },
      { question: "What is the difference between line bending and vacuum forming?", answer: "Line bending creates straight bends along a single axis — ideal for display stands, brochure holders, and simple enclosures. Vacuum forming shapes sheet over a 3D mold for complex curves and deep draws." },
    ],
    relatedServices: ["laser-cutting","cnc-machining","uv-printing","bonding-assembly"],
  },
  {
    slug: "bonding-assembly", title: "Bonding & Assembly", h1: "Professional Acrylic Bonding & Assembly",
    metaDesc: "Seamless solvent bonding and precision assembly for acrylic products — crystal-clear joints, structural strength, hardware integration. Complete product assembly from components to finished goods.",
    intro: "Our bonding and assembly service transforms individual acrylic components into complete, finished products. Using solvent bonding techniques that create molecular-level welds, we produce crystal-clear, structurally sound joints. Combined with hardware integration, quality inspection, cleaning, and packaging, we deliver products ready for retail display, distribution, or end-use installation.",
    whatIs: "Solvent bonding uses a chemical solvent that temporarily dissolves the surface of acrylic components at the joint interface. When the solvent evaporates, the materials re-solidify as a single piece — creating a bond as strong as the acrylic itself. This technique produces completely transparent, bubble-free joints that maintain the optical clarity of the product. For non-acrylic materials or specialized applications, we also use UV-cure and structural adhesives.",
    benefits: ["Crystal-clear joints — solvent bonds are completely transparent with no visible glue line","Structural strength — molecular-level welding creates joints as strong as the base material","Bubble-free finish — skilled technicians produce flawless joints for premium products","Multi-material capability — bond acrylic to metal, wood, and other substrates using appropriate adhesives","Hardware integration — threaded inserts, hinges, locks, standoffs, and mounting hardware","Ready-to-ship assembly — complete products delivered packaged and quality-inspected"],
    materials: ["Cast Acrylic — produces the clearest, strongest solvent bonds","Extruded Acrylic — good bondability for non-premium applications","PETG — bonds well with specialized adhesives","Polycarbonate — requires specific solvent formulations","Metal, wood, other substrates — adhesive bonding available"],
    specs: [{ label: "Joint Type", value: "Solvent weld, UV-cure, structural adhesive" },{ label: "Joint Strength", value: "Up to 80% of base material strength" },{ label: "Hardware Options", value: "Threaded inserts, hinges, locks, standoffs" },{ label: "Assembly Scale", value: "Single unit to thousands" },{ label: "Lead Time", value: "+3–7 business days" }],
    applications: ["Display Cases & Boxes","Aquariums & Enclosures","Retail Fixtures","Architectural Features","Point-of-Purchase Displays","Product Enclosures","Custom Furniture Components"],
    faqs: [
      { question: "How strong are solvent-bonded acrylic joints?", answer: "Solvent-bonded joints achieve approximately 80% of the base material strength. For most display and enclosure applications, this is more than sufficient. For structural applications, we can add mechanical reinforcement or recommend alternative joining methods." },
      { question: "Will the bond line be visible?", answer: "When done correctly by our experienced technicians, solvent-bonded joints are completely transparent with no visible bond line. This is the key advantage of solvent bonding over adhesive-based joining methods." },
      { question: "Can you assemble products with hardware included?", answer: "Yes. We integrate hinges, locks, handles, standoffs, threaded inserts, and other hardware during assembly. We can also source specialty hardware based on your requirements." },
    ],
    relatedServices: ["laser-cutting","cnc-machining","diamond-polishing","oem-project-support"],
  },
  {
    slug: "oem-project-support", title: "OEM Project Support", h1: "OEM Acrylic Project Support",
    metaDesc: "End-to-end OEM acrylic project management — design support, engineering review, manufacturing coordination, quality control, and global delivery for custom acrylic products.",
    intro: "Our OEM project support service provides comprehensive management for custom acrylic product development and delivery. From initial design consultation through engineering review, prototyping, production coordination, quality inspection, and international logistics — we handle every aspect of your project. Whether you are launching a new product line or need reliable supply for existing designs, our team ensures consistent quality and on-time delivery.",
    whatIs: "OEM project support is a full-service approach to custom acrylic manufacturing. Rather than simply executing production orders, we partner with you throughout the entire product lifecycle. Our engineering team reviews designs for manufacturability, recommends material and process optimizations, coordinates prototyping and sampling, manages production scheduling, conducts quality inspections, and arranges international shipping. You receive professional project management without the overhead of maintaining an in-house supply chain team.",
    benefits: ["Single point of contact — one project manager handles everything from inquiry to delivery","Engineering support — design review, material recommendations, and process optimization included","Quality assurance — multi-stage inspection with documented reports and photos","Supply chain management — we coordinate all manufacturing processes and logistics","Flexible volume — support from prototype quantities to container-load production","Professional communication — English-speaking team with clear, timely updates"],
    materials: ["Cast & Extruded Acrylic (all grades)","PETG, Polycarbonate, PVC, ABS","Specialty materials available upon request","Custom colors and finishes"],
    specs: [{ label: "Project Types", value: "New product development, ongoing supply, one-off projects" },{ label: "MOQ", value: "Flexible — prototypes to mass production" },{ label: "Communication", value: "English, with documented updates" },{ label: "Delivery Terms", value: "FOB, CIF, DDP available" },{ label: "Lead Time", value: "Project-dependent, quoted upfront" }],
    applications: ["New Product Development","Custom Retail Displays","Branded Merchandise Programs","POP Display Rollouts","Architectural Projects","Industrial Components","Export & Distribution Programs"],
    faqs: [
      { question: "I have a rough idea but no technical drawings. Can you help?", answer: "Absolutely. Many of our projects start with a sketch, reference image, or verbal description. Our engineering team creates production-ready CAD drawings and 3D renderings for your approval before manufacturing begins." },
      { question: "How do you ensure quality for overseas clients?", answer: "We provide detailed inspection reports with photos at key production stages. For critical projects, we offer video inspection calls and pre-shipment sample approval. Our multi-stage QC process catches issues before products leave the facility." },
      { question: "Can you match an existing product I already manufacture elsewhere?", answer: "Yes. Send us a sample or detailed specifications of your current product, and we will provide a competitive quotation with equivalent or improved quality. Many clients switch to us for better quality, pricing, or service." },
    ],
    relatedServices: ["laser-cutting","cnc-machining","uv-printing","bonding-assembly"],
  },
];

export function getServicePage(slug: string): ServicePageData | undefined {
  return servicePages.find((s) => s.slug === slug);
}
