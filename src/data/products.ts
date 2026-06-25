import type { Product, ProductCategory } from "@/lib/types";

export const products: Product[] = [
  // ═══ Acrylic Displays (8) ═══
  {
    slug: "cosmetic-display", name: "Acrylic Cosmetic Display Stand", category: "acrylic-displays",
    description: "Premium custom acrylic cosmetic display stands for beauty brands and retail counters.",
    longDescription: "Our custom acrylic cosmetic display stands showcase beauty products with elegance and clarity. Crystal-clear acrylic provides luxury presentation, while custom fabrication allows unique shapes, tiered shelving, integrated lighting, and brand-specific design elements. Ideal for lipstick displays, skincare testers, perfume showcases, and cosmetic counter installations.",
    specs: [{ label: "Material", value: "Cast Acrylic 3mm–15mm" }, { label: "Finish", value: "Diamond Polished" }, { label: "MOQ", value: "50 units" }, { label: "Lead Time", value: "12–18 days" }],
    applications: ["Beauty Retail", "Department Stores", "Duty-Free", "Trade Shows"], images: [], featured: true,
  },
  {
    slug: "retail-display-stand", name: "Acrylic Retail Display Stand", category: "acrylic-displays",
    description: "Versatile acrylic retail display stands for stores, malls, and exhibitions.",
    longDescription: "Designed for retail environments, our acrylic display stands combine durability with premium aesthetics. Available in counter-top, floor-standing, and wall-mounted configurations. Customizable shelving, signage integration, and modular designs make these stands adaptable to changing retail needs.",
    specs: [{ label: "Material", value: "Cast Acrylic 5mm–12mm" }, { label: "Types", value: "Counter, Floor, Wall, Rotating" }, { label: "MOQ", value: "30 units" }, { label: "Lead Time", value: "10–15 days" }],
    applications: ["Electronics", "Fashion", "Supermarkets", "Trade Booths"], images: [], featured: true,
  },
  {
    slug: "jewelry-display", name: "Acrylic Jewelry Display Stand", category: "acrylic-displays",
    description: "Elegant acrylic jewelry displays for rings, necklaces, bracelets, and watches.",
    longDescription: "Our acrylic jewelry displays are precision-crafted to present fine jewelry with museum-quality clarity. Custom configurations include necklace busts, ring holders, bracelet bars, earring racks, and watch stands. Optional velvet inserts, LED lighting, lockable cases, and brand-engraved bases.",
    specs: [{ label: "Material", value: "Cast Acrylic 5mm–20mm" }, { label: "Options", value: "LED, Velvet, Locks" }, { label: "MOQ", value: "20 units" }, { label: "Lead Time", value: "12–18 days" }],
    applications: ["Jewelry Stores", "Luxury Boutiques", "Trade Exhibitions"], images: [], featured: false,
  },
  {
    slug: "food-display-stand", name: "Acrylic Food Display Stand", category: "acrylic-displays",
    description: "Food-safe acrylic display stands for bakeries, cafes, hotels, and catering.",
    longDescription: "Present culinary creations with professional-grade food-safe acrylic displays. Multi-tier designs maximize counter space while creating inviting visual presentation. Easy to clean, lightweight yet stable, with customizable brand logo or menu details printed directly on the acrylic.",
    specs: [{ label: "Material", value: "Food-Safe Cast Acrylic" }, { label: "Design", value: "Single/Multi-Tier, Dome" }, { label: "MOQ", value: "30 units" }, { label: "Lead Time", value: "10–15 days" }],
    applications: ["Bakeries", "Hotels", "Restaurants", "Catering"], images: [], featured: false,
  },
  {
    slug: "brochure-holder", name: "Acrylic Brochure Holder", category: "acrylic-displays",
    description: "Wall-mounted and counter-top acrylic brochure holders for professional literature display.",
    longDescription: "Keep marketing materials organized with clear acrylic brochure holders. Available in wall-mounted, counter-top, and multi-pocket configurations for A4, A5, DL, and custom formats. Optional logo printing, magnetic mounting, and modular stacking designs.",
    specs: [{ label: "Material", value: "Cast Acrylic 3mm–5mm" }, { label: "Sizes", value: "A4, A5, DL, Custom" }, { label: "MOQ", value: "50 units" }, { label: "Lead Time", value: "7–12 days" }],
    applications: ["Hotels", "Real Estate", "Medical", "Trade Shows"], images: [], featured: false,
  },
  {
    slug: "menu-holder", name: "Acrylic Menu Holder", category: "acrylic-displays",
    description: "Sleek acrylic menu holders and table signs for restaurants, cafes, and hotels.",
    longDescription: "Present menus with sophistication using custom acrylic holders. Available in single-page, multi-page, and tri-fold designs. Easy-clean surface with options for restaurant logo engraving, table numbers, and QR code printing.",
    specs: [{ label: "Material", value: "Cast Acrylic 3mm–8mm" }, { label: "Sizes", value: "A5, A4, Custom" }, { label: "MOQ", value: "30 units" }, { label: "Lead Time", value: "7–12 days" }],
    applications: ["Restaurants", "Cafes", "Hotels", "Bars"], images: [], featured: false,
  },
  {
    slug: "display-riser", name: "Acrylic Display Riser", category: "acrylic-displays",
    description: "Multi-level acrylic risers that create visual hierarchy and maximize display space.",
    longDescription: "Create depth and visual interest with acrylic display risers. Precision-cut and bonded for seamless joints. Available in clear, frosted, or colored acrylic with options for integrated lighting and anti-slip surfaces. Stackable designs for flexible configuration.",
    specs: [{ label: "Material", value: "Cast Acrylic 5mm–10mm" }, { label: "Styles", value: "Tiered, Stepped, Cubes" }, { label: "MOQ", value: "50 units" }, { label: "Lead Time", value: "8–12 days" }],
    applications: ["Retail Windows", "Museums", "Trade Shows", "Jewelry"], images: [], featured: false,
  },
  {
    slug: "counter-display", name: "Acrylic Counter Display", category: "acrylic-displays",
    description: "Compact acrylic counter displays for point-of-sale product presentation.",
    longDescription: "Maximize point-of-sale impact with custom acrylic counter displays. Designed to fit checkout counters, reception desks, and service areas. Customizable with brand colors, logo, and product-specific compartments. Lightweight and easy to reposition.",
    specs: [{ label: "Material", value: "Cast Acrylic 3mm–8mm" }, { label: "Design", value: "Counter-Top, Modular" }, { label: "MOQ", value: "50 units" }, { label: "Lead Time", value: "10–15 days" }],
    applications: ["Convenience", "Pharmacies", "Gift Shops", "Salons"], images: [], featured: false,
  },

  // ═══ Acrylic Boxes (6) ═══
  {
    slug: "acrylic-storage-box", name: "Acrylic Storage Box", category: "acrylic-boxes",
    description: "Crystal-clear acrylic storage boxes for organized retail display and home organization.",
    longDescription: "Precision-cut panels with seamless bonding for a clean, professional appearance. Available in stackable designs, drawer-style boxes, and compartmentalized organizers. Transparent design allows instant content identification with a premium aesthetic.",
    specs: [{ label: "Material", value: "Cast Acrylic 3mm–8mm" }, { label: "Types", value: "Stackable, Drawer, Compartment" }, { label: "MOQ", value: "100 units" }, { label: "Lead Time", value: "10–15 days" }],
    applications: ["Retail Organization", "Home Storage", "Cosmetics", "Luxury Packaging"], images: [], featured: true,
  },
  {
    slug: "donation-box", name: "Acrylic Donation Box", category: "acrylic-boxes",
    description: "Secure, transparent acrylic donation boxes with lockable access.",
    longDescription: "Encourage donations with professional, transparent acrylic donation boxes. Clear design allows donors to see contributions while lockable access doors maintain security. Custom sizes with organization logo printing or engraving.",
    specs: [{ label: "Material", value: "Cast Acrylic 5mm–10mm" }, { label: "Security", value: "Lockable Access Door" }, { label: "MOQ", value: "20 units" }, { label: "Lead Time", value: "10–15 days" }],
    applications: ["Charity Events", "Religious Orgs", "Museums", "Fundraising"], images: [], featured: false,
  },
  {
    slug: "ballot-box", name: "Acrylic Ballot Box", category: "acrylic-boxes",
    description: "Transparent acrylic ballot boxes for secure and visible voting.",
    longDescription: "Ensure transparency in voting with custom acrylic ballot boxes. Completely transparent design eliminates tampering concerns. Available with lockable lids, numbered seals, and custom branding. Meets standard election and corporate voting requirements.",
    specs: [{ label: "Material", value: "Cast Acrylic 5mm–8mm" }, { label: "Security", value: "Lockable, Numbered Seals" }, { label: "MOQ", value: "10 units" }, { label: "Lead Time", value: "10–15 days" }],
    applications: ["Corporate Elections", "Awards", "Events", "Government"], images: [], featured: false,
  },
  {
    slug: "display-box", name: "Acrylic Display Box", category: "acrylic-boxes",
    description: "Premium acrylic display boxes for collectibles, awards, and luxury presentation.",
    longDescription: "Museum-quality acrylic display boxes with seamless bonded joints and crystal-clear panels. Optional mirrored bases, turntable platforms, LED lighting, and UV-protective coatings. Custom sizes for any display requirement.",
    specs: [{ label: "Material", value: "Cast Acrylic 5mm–12mm" }, { label: "Options", value: "Mirror Base, LED, Turntable" }, { label: "MOQ", value: "20 units" }, { label: "Lead Time", value: "12–18 days" }],
    applications: ["Museums", "Collectibles", "Luxury Retail", "Trophies"], images: [], featured: false,
  },
  {
    slug: "lock-box", name: "Acrylic Lock Box", category: "acrylic-boxes",
    description: "Secure acrylic lock boxes for key management and controlled-access.",
    longDescription: "Visible security for commercial applications. Transparent design allows content verification without opening. Used for key management, cash handling, suggestion boxes, and secure document storage. Custom multi-compartment configurations available.",
    specs: [{ label: "Material", value: "Cast Acrylic 8mm–15mm" }, { label: "Lock", value: "Key, Combination, Electronic" }, { label: "MOQ", value: "20 units" }, { label: "Lead Time", value: "12–18 days" }],
    applications: ["Key Management", "Cash Handling", "Suggestion Boxes"], images: [], featured: false,
  },
  {
    slug: "bakery-display-box", name: "Acrylic Bakery Display Box", category: "acrylic-boxes",
    description: "Food-safe acrylic display boxes for bakeries, patisseries, and dessert counters.",
    longDescription: "Present baked creations in their best light with food-safe acrylic display boxes. Available with hinged lids, removable domes, and slide-access panels. Optional anti-fog coating for refrigerated displays and custom UV printing.",
    specs: [{ label: "Material", value: "Food-Safe Cast Acrylic" }, { label: "Design", value: "Dome, Box, Tiered" }, { label: "MOQ", value: "50 units" }, { label: "Lead Time", value: "10–15 days" }],
    applications: ["Bakeries", "Patisseries", "Hotel Buffets", "Cake Shops"], images: [], featured: false,
  },

  // ═══ Acrylic Signage (6) ═══
  {
    slug: "office-sign", name: "Acrylic Office Sign", category: "acrylic-signage",
    description: "Professional acrylic office signs for corporate environments.",
    longDescription: "Create professional corporate environments with custom acrylic office signs. Available in wall-mounted, door-mounted, and free-standing configurations with UV printed text, engraved lettering, or dimensional raised lettering. Ideal for directories, room identification, and branded messaging.",
    specs: [{ label: "Material", value: "Cast Acrylic 5mm–15mm" }, { label: "Printing", value: "UV Print, Engrave, Raised" }, { label: "MOQ", value: "10 units" }, { label: "Lead Time", value: "7–12 days" }],
    applications: ["Corporate Offices", "Coworking", "Government", "Education"], images: [], featured: false,
  },
  {
    slug: "door-sign", name: "Acrylic Door Sign", category: "acrylic-signage",
    description: "Custom acrylic door signs with room numbers and occupant names.",
    longDescription: "Clear identification for every room with custom-manufactured door signs. Options for Braille compliance, interchangeable name inserts, color coding by department, and integrated room number panels. Durable for interior and covered exterior use.",
    specs: [{ label: "Material", value: "Cast Acrylic 5mm–10mm" }, { label: "Options", value: "Braille, Interchangeable, Color Code" }, { label: "MOQ", value: "20 units" }, { label: "Lead Time", value: "7–12 days" }],
    applications: ["Hotels", "Hospitals", "Office Buildings", "Schools"], images: [], featured: false,
  },
  {
    slug: "name-plate", name: "Acrylic Name Plate", category: "acrylic-signage",
    description: "Personalized acrylic name plates for desks, offices, and reception.",
    longDescription: "Professional custom acrylic name plates with crisp text on crystal-clear or frosted acrylic. Available in desktop, wall-mount, and door-mount styles. Custom options include company logo, individual names, and department information.",
    specs: [{ label: "Material", value: "Cast Acrylic 5mm–8mm" }, { label: "Styles", value: "Desktop, Wall, Door" }, { label: "MOQ", value: "10 units" }, { label: "Lead Time", value: "5–10 days" }],
    applications: ["Corporate", "Medical", "Law Firms", "Reception"], images: [], featured: false,
  },
  {
    slug: "qr-code-sign", name: "Acrylic QR Code Sign", category: "acrylic-signage",
    description: "Custom acrylic QR code signs for contactless menus and payments.",
    longDescription: "Bridge physical and digital with custom acrylic QR code signs. Perfect for digital menus, contactless payments, and digital information access. High-resolution UV printing ensures reliable QR scanning. Available as counter stands, wall signs, and free-standing displays.",
    specs: [{ label: "Material", value: "Cast Acrylic 3mm–8mm" }, { label: "Printing", value: "High-Res UV Print" }, { label: "MOQ", value: "20 units" }, { label: "Lead Time", value: "7–12 days" }],
    applications: ["Restaurants", "Retail", "Museums", "Events"], images: [], featured: false,
  },
  {
    slug: "table-sign", name: "Acrylic Table Sign", category: "acrylic-signage",
    description: "Elegant acrylic table signs and tent cards for restaurants and events.",
    longDescription: "Communicate with customers through custom acrylic table signs. Available as T-stands, L-stands, tent cards, and slanted displays. Perfect for table numbers, menu specials, and promotional messages with single or double-sided printing.",
    specs: [{ label: "Material", value: "Cast Acrylic 3mm–5mm" }, { label: "Style", value: "T-Stand, L-Stand, Tent Card" }, { label: "MOQ", value: "50 units" }, { label: "Lead Time", value: "7–12 days" }],
    applications: ["Restaurants", "Hotels", "Weddings", "Events"], images: [], featured: false,
  },
  {
    slug: "wall-sign", name: "Acrylic Wall Sign", category: "acrylic-signage",
    description: "Large-format acrylic wall signs for corporate branding and lobbies.",
    longDescription: "Bold statement wall signs with precision-cut acrylic. Full-color UV printing, dimensional lettering, backlighting, and multi-layer designs available. Stand-off mounting creates a floating effect for premium corporate image in lobbies and conference rooms.",
    specs: [{ label: "Material", value: "Cast Acrylic 5mm–20mm" }, { label: "Size", value: "Up to 2400×1200mm" }, { label: "MOQ", value: "5 units" }, { label: "Lead Time", value: "12–18 days" }],
    applications: ["Corporate Lobbies", "Retail", "Museums", "Hotels"], images: [], featured: false,
  },

  // ═══ Acrylic Home & Office (6) ═══
  {
    slug: "desk-organizer", name: "Acrylic Desk Organizer", category: "acrylic-home-office",
    description: "Sleek acrylic desk organizers for modern workspace organization.",
    longDescription: "Transform workspaces with custom acrylic desk organizers for pens, stationery, business cards, and office accessories. Modular configurations with clear, frosted, or colored finishes. Perfect for corporate gifting with logo engraving.",
    specs: [{ label: "Material", value: "Cast Acrylic 3mm–8mm" }, { label: "Configuration", value: "Modular, Multi-Compartment" }, { label: "MOQ", value: "100 units" }, { label: "Lead Time", value: "7–12 days" }],
    applications: ["Office Supply", "Corporate Gifts", "Home Office"], images: [], featured: true,
  },
  {
    slug: "monitor-stand", name: "Acrylic Monitor Stand", category: "acrylic-home-office",
    description: "Ergonomic acrylic monitor stands with storage space underneath.",
    longDescription: "Improve workspace ergonomics with custom acrylic monitor stands that raise screens to optimal viewing height. Storage space beneath for keyboards and accessories. Available in clear, frosted, and colored finishes with cable management.",
    specs: [{ label: "Material", value: "Cast Acrylic 8mm–15mm" }, { label: "Capacity", value: "Up to 15kg" }, { label: "MOQ", value: "50 units" }, { label: "Lead Time", value: "10–15 days" }],
    applications: ["Office Supply", "Home Office", "Corporate"], images: [], featured: false,
  },
  {
    slug: "tissue-box", name: "Acrylic Tissue Box Cover", category: "acrylic-home-office",
    description: "Premium acrylic tissue box covers for hotels and luxury environments.",
    longDescription: "Turn everyday items into design statements with custom acrylic tissue box covers. Precision-cut from premium cast acrylic with clear, frosted, or colored finishes. Weighted base keeps cover stable. Popular for hotels, restaurants, and corporate gifting.",
    specs: [{ label: "Material", value: "Cast Acrylic 5mm–8mm" }, { label: "Finish", value: "Clear, Frosted, Colored" }, { label: "MOQ", value: "200 units" }, { label: "Lead Time", value: "10–15 days" }],
    applications: ["Hotels", "Restaurants", "Corporate", "Luxury Retail"], images: [], featured: false,
  },
  {
    slug: "makeup-organizer", name: "Acrylic Makeup Organizer", category: "acrylic-home-office",
    description: "Stylish acrylic makeup organizers for beauty enthusiasts and professionals.",
    longDescription: "Organize beauty collections with premium acrylic makeup organizers featuring dedicated compartments for lipsticks, brushes, palettes, and skincare. Modular designs with drawers, rotating bases, and dust covers. Crystal-clear acrylic makes finding products effortless.",
    specs: [{ label: "Material", value: "Cast Acrylic 3mm–8mm" }, { label: "Design", value: "Modular, Drawers, Rotating" }, { label: "MOQ", value: "100 units" }, { label: "Lead Time", value: "10–15 days" }],
    applications: ["Beauty Retail", "Cosmetics Brands", "Home Organization"], images: [], featured: false,
  },
  {
    slug: "acrylic-tray", name: "Acrylic Serving Tray", category: "acrylic-home-office",
    description: "Elegant acrylic serving trays for hospitality and home entertaining.",
    longDescription: "Serve with style using custom acrylic trays available in rectangular, round, and organic shapes. Options for handles, non-slip surfaces, and custom edge profiles. Lightweight yet durable for daily use with luxury appearance.",
    specs: [{ label: "Material", value: "Cast Acrylic 5mm–10mm" }, { label: "Shape", value: "Rectangular, Round, Custom" }, { label: "MOQ", value: "100 units" }, { label: "Lead Time", value: "10–15 days" }],
    applications: ["Hotels", "Restaurants", "Home Decor", "Luxury Retail"], images: [], featured: false,
  },
  {
    slug: "book-stand", name: "Acrylic Book Stand", category: "acrylic-home-office",
    description: "Adjustable acrylic book stands for reading, presentations, and cookbooks.",
    longDescription: "Read comfortably with custom acrylic book stands featuring adjustable angles for different preferences and book sizes. Transparent design keeps focus on content while providing stable support. Options for page holders, document clips, and integrated lighting.",
    specs: [{ label: "Material", value: "Cast Acrylic 5mm–10mm" }, { label: "Adjustment", value: "5-Position Angle" }, { label: "MOQ", value: "50 units" }, { label: "Lead Time", value: "7–12 days" }],
    applications: ["Libraries", "Schools", "Corporate", "Home & Kitchen"], images: [], featured: false,
  },

  // ═══ Acrylic Awards & Gifts (4) ═══
  {
    slug: "acrylic-award", name: "Custom Acrylic Award", category: "acrylic-awards-gifts",
    description: "Bespoke acrylic awards for corporate events and employee recognition.",
    longDescription: "Honor achievement with custom-designed acrylic awards. Each award is individually manufactured with options for geometric shapes, corporate logo cutouts, full-color UV printing, laser engraving, colored accents, and illuminated bases.",
    specs: [{ label: "Material", value: "Cast Acrylic 10mm–30mm" }, { label: "Design", value: "Fully Custom, Logo Cutout" }, { label: "MOQ", value: "10 units" }, { label: "Lead Time", value: "12–20 days" }],
    applications: ["Corporate Awards", "Sports", "Employee Recognition"], images: [], featured: true,
  },
  {
    slug: "trophy", name: "Acrylic Trophy", category: "acrylic-awards-gifts",
    description: "Contemporary acrylic trophies for competitions and achievements.",
    longDescription: "Celebrate victory with stunning custom acrylic trophies offering modern aesthetics and endless design possibilities. Intricate 3D shapes, embedded objects, colored accents, and personalized engraving available. Lightweight yet substantial.",
    specs: [{ label: "Material", value: "Cast Acrylic 15mm–50mm" }, { label: "Design", value: "3D, Stacked Layers, Embedded" }, { label: "MOQ", value: "10 units" }, { label: "Lead Time", value: "15–20 days" }],
    applications: ["Sports Events", "Corporate Awards", "Galas"], images: [], featured: false,
  },
  {
    slug: "photo-frame", name: "Acrylic Photo Frame", category: "acrylic-awards-gifts",
    description: "Modern acrylic photo frames for corporate gifting and retail.",
    longDescription: "Display memories in premium acrylic photo frames available in free-standing, wall-mounted, and magnetic designs. Frameless construction puts full focus on photographs. Custom sizes with multi-photo layouts, personalized engraving, and gift packaging.",
    specs: [{ label: "Material", value: "Cast Acrylic 5mm–10mm" }, { label: "Style", value: "Free-Standing, Wall, Magnetic" }, { label: "MOQ", value: "50 units" }, { label: "Lead Time", value: "7–12 days" }],
    applications: ["Corporate Gifts", "Photo Retail", "Home Decor", "Events"], images: [], featured: false,
  },
  {
    slug: "acrylic-souvenir", name: "Acrylic Souvenir", category: "acrylic-awards-gifts",
    description: "Custom acrylic souvenirs for tourism, events, and brand promotions.",
    longDescription: "Create memorable keepsakes with custom acrylic souvenirs ranging from keychains and magnets to desk ornaments and commemorative plaques. Full-color UV printing for landmarks, logos, and event branding with gift box packaging options.",
    specs: [{ label: "Material", value: "Cast Acrylic 3mm–10mm" }, { label: "Type", value: "Keychain, Magnet, Ornament, Plaque" }, { label: "MOQ", value: "200 units" }, { label: "Lead Time", value: "10–15 days" }],
    applications: ["Tourism", "Events", "Brand Promotions", "Museum Shops"], images: [], featured: false,
  },
];

export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug);
export const getProductsByCategory = (category: ProductCategory) => products.filter((p) => p.category === category);
export const getProductCategories = () => Array.from(new Set(products.map((p) => p.category)));
export const getFeaturedProducts = () => products.filter((p) => p.featured);
