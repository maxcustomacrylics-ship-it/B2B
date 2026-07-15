import type { Guide } from "@/lib/types";

export const seedGuides: Guide[] = [
  {
    slug: "buying-guides",
    title: "Buying Guides",
    desc: "What to look for when sourcing custom acrylic products — from material selection to supplier evaluation.",
    image: "",
    imageColor: "from-blue-100 to-blue-200/60",
    sections: [
      { heading: "Define Your Requirements", content: "Start by clearly defining your product specifications — dimensions, material grade, finish requirements, and target quantity. A well-documented specification helps ensure accurate quotations and reduces back-and-forth during the engineering review process. Include drawings, reference images, or samples whenever possible." },
      { heading: "Choose the Right Material", content: "Acrylic comes in two main grades: cast and extruded. Cast acrylic offers superior optical clarity, better machining properties, and more consistent thickness — making it ideal for premium displays, awards, and precision parts. Extruded acrylic is more economical and works well for volume production of standard items. For specific applications, PETG offers impact resistance, while polycarbonate provides maximum durability." },
      { heading: "Evaluate Manufacturing Partners", content: "Look for partners who offer engineering review as part of their service — not just production. A good partner will assess your design for manufacturability, recommend process optimizations, and provide clear communication throughout the project. Ask about their quality control processes, typical lead times, and whether they provide inspection reports." },
      { heading: "Request Samples and Prototypes", content: "Before committing to full production, request a pre-production sample. This allows you to verify dimensions, material quality, finish, and overall workmanship. While samples add a small cost and time to the project, they prevent costly issues in mass production and ensure the final product meets your expectations." },
      { heading: "Plan for Packaging and Logistics", content: "Acrylic products require careful packaging to prevent scratches and damage during transit. Discuss packaging requirements with your partner early — individual polybags, foam inserts, branded retail boxes, or export-grade wooden crates. Factor shipping costs and lead times into your overall project timeline." },
    ],
  },
  {
    slug: "material-guides",
    title: "Material Guides",
    desc: "Understand acrylic grades, properties, and how to select the right material for your application.",
    image: "",
    imageColor: "from-emerald-100 to-emerald-200/60",
    sections: [
      { heading: "Cast Acrylic vs. Extruded Acrylic", content: "Cast acrylic is produced by pouring liquid MMA between glass molds and polymerizing it. This process produces sheets with superior optical clarity, more consistent thickness, and better machining characteristics. Extruded acrylic is produced by pushing acrylic pellets through a die, resulting in more economical sheets with good optical properties but slightly less consistency. For premium displays and precision parts, choose cast acrylic. For volume production where cost is a priority, extruded acrylic is a strong option." },
      { heading: "PETG — The Impact-Resistant Option", content: "PETG (Polyethylene Terephthalate Glycol) offers excellent impact resistance while maintaining good clarity. It's commonly used for protective barriers, retail fixtures, and medical device housings. PETG can be cut, drilled, and thermoformed, though it requires specialized bonding techniques compared to acrylic." },
      { heading: "Polycarbonate — Maximum Durability", content: "Polycarbonate is the most impact-resistant clear plastic available — approximately 250 times stronger than glass. It's ideal for machine guards, safety shields, and industrial applications where durability is critical. Note that polycarbonate can yellow over time with UV exposure unless UV-stabilized grades are specified." },
      { heading: "Material Thickness Considerations", content: "Acrylic sheets are available from 1mm to 50mm in thickness. Thinner sheets (1-3mm) are suitable for lightweight displays and signage. Medium thicknesses (4-10mm) work well for structural displays, shelving, and most commercial applications. Thick sheets (12mm+) are used for structural components, aquariums, and heavy-duty applications. Consider both structural requirements and aesthetic preferences when selecting thickness." },
      { heading: "Specialty Acrylic Options", content: "Beyond standard clear sheets, acrylic is available in frosted, colored, mirrored, fluorescent, and patterned varieties. UV-filtering grades protect light-sensitive items. Anti-static grades are available for electronic applications. Food-safe grades meet requirements for food display and service. Discuss your specific needs with our engineering team to find the right specialty material." },
    ],
  },
  {
    slug: "design-ideas",
    title: "Design Ideas",
    desc: "Inspiration and practical concepts for custom acrylic products across industries and applications.",
    image: "",
    imageColor: "from-amber-100 to-amber-200/60",
    sections: [
      { heading: "Retail Display Inspiration", content: "Modern retail environments use acrylic extensively for product presentation. Tiered display stands maximize counter space while creating visual hierarchy. Illuminated acrylic displays with integrated LED lighting create dramatic product presentations. Modular display systems allow retailers to reconfigure layouts for seasonal changes. Consider combining clear acrylic with colored or frosted elements for brand-aligned aesthetics." },
      { heading: "Corporate and Office Applications", content: "Acrylic brings a contemporary, professional feel to office environments. Custom desk organizers keep workspaces functional and branded. Lobby signage with dimensional acrylic lettering creates strong first impressions. Meeting room nameplates, wayfinding signs, and recognition displays all benefit from acrylic's clean aesthetic. Frosted acrylic partitions provide privacy while maintaining an open feel." },
      { heading: "Hospitality and Restaurant Design", content: "Restaurants and hotels use acrylic for menu holders, table signs, room service trays, and branded displays. QR code stands made from clear acrylic look cleaner than plastic alternatives. Multi-tier dessert stands and buffet risers present food attractively. Hotel room signage, directory displays, and amenity trays create a consistent premium experience across properties." },
      { heading: "Exhibition and Trade Show Concepts", content: "Lightweight, portable acrylic displays are ideal for trade shows and exhibitions. Modular designs pack flat for shipping and assemble quickly on-site. Branded brochure holders and product demonstration stands attract visitor attention. Consider reusable components that can be reconfigured for different events — maximizing your return on investment." },
      { heading: "Custom Packaging and Gifting", content: "Acrylic packaging elevates product presentation for luxury brands. Magnetic closure gift boxes, sliding drawer cases, and transparent display packaging create memorable unboxing experiences. For corporate gifts and awards, custom acrylic trophies, plaques, and personalized items communicate appreciation with premium quality. UV printing adds full-color branding directly to acrylic surfaces." },
    ],
  },
  {
    slug: "manufacturing-tips",
    title: "Manufacturing Tips",
    desc: "Practical advice for better fabrication, finishing, and quality results in custom acrylic production.",
    image: "",
    imageColor: "from-purple-100 to-purple-200/60",
    sections: [
      { heading: "Preparing Design Files for Production", content: "Provide vector files (AI, DXF, DWG, EPS) whenever possible. Vector files preserve precise geometry for accurate toolpath generation. For 3D parts, STEP or IGES files are preferred. Include dimensions, material specifications, and finish requirements on your drawings. Mark critical surfaces and tolerances. Convert text to outlines to avoid font substitution issues." },
      { heading: "Understanding Laser Cutting Capabilities", content: "CO2 laser cutting produces flame-polished edges with ±0.1mm tolerance on acrylic up to 25mm thick. The process is ideal for intricate 2D shapes, signage, and display components. Design with minimum hole sizes at least equal to material thickness. Maintain adequate spacing between features to prevent material warping. Laser cutting has zero tooling cost, making it economical for prototypes and small batches." },
      { heading: "CNC Machining Best Practices", content: "CNC machining handles 3D features that laser cutting cannot — beveled edges, pockets, threaded holes, and contoured surfaces. Design internal corners with adequate radii since CNC tools are round. Specify tolerances for critical dimensions. For thick material (up to 50mm), CNC is the preferred method. Provide 3D models when possible for faster quoting and more accurate toolpath generation." },
      { heading: "Edge Finishing Options", content: "Diamond polishing produces optical-grade edge clarity — ideal for luxury displays and awards. Flame polishing provides a glossy finish at lower cost for production volumes. As-cut edges from laser cutting are often acceptable for non-visible surfaces. Specify which edges require premium finishing on your drawings to optimize cost while maximizing visual impact on visible surfaces." },
      { heading: "Quality Control and Inspection", content: "Establish clear acceptance criteria before production begins. Define critical dimensions, surface finish requirements, and allowable tolerances. Request in-process inspection reports and pre-shipment photos. For brand-critical products, consider approving a pre-production sample. Documented quality control at every stage ensures consistent results and provides confidence in the finished product." },
    ],
  },
];
