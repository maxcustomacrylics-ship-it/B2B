const fs = require("fs");
const f = "src/app/[locale]/page.tsx";
let s = fs.readFileSync(f, "utf8");

const repl = [
  // Hero
  ['Custom Acrylic Products<br />Designed Around Your Business', '{s.heroHeadline || "Custom Acrylic Products Designed Around Your Business"}'],
  ['From concept to delivery, we manufacture premium custom acrylic\n                products for retail, commercial and industrial applications.', '{s.heroSubheadline || "From concept to delivery, we manufacture premium custom acrylic products for retail, commercial and industrial applications."}'],
  // Categories
  ['>What We Make<', '>{s.catTitle || "What We Make"}<'],
  ['>Browse our range of custom acrylic products designed for commercial and industrial applications.<', '>{s.catSub || "Browse our range of custom acrylic products designed for commercial and industrial applications."}<'],
  // Why Choose Us
  ['>Why Choose Max Custom Acrylic<', '>{s.whyTitle || "Why Choose Max Custom Acrylic"}<'],
  ['>Engineering-driven approach with quality management throughout your project.<', '>{s.whySub || "Engineering-driven approach with quality management throughout your project."}<'],
  // Why cards - titles
  ['"Fully Customized"', '{s.why1Title || "Fully Customized"}'],
  ['"Premium Materials"', '{s.why2Title || "Premium Materials"}'],
  ['"OEM & ODM Support"', '{s.why3Title || "OEM & ODM Support"}'],
  ['"Worldwide Delivery"', '{s.why4Title || "Worldwide Delivery"}'],
  // Why cards - descriptions
  ['"Every product manufactured to your exact specifications."', '{s.why1Desc || "Every product manufactured to your exact specifications."}'],
  ['"High-clarity cast and extruded acrylic options."', '{s.why2Desc || "High-clarity cast and extruded acrylic options."}'],
  ['"Custom manufacturing for your brand requirements."', '{s.why3Desc || "Custom manufacturing for your brand requirements."}'],
  ['"Export-ready packaging to over 30 countries."', '{s.why4Desc || "Export-ready packaging to over 30 countries."}'],
  // Capabilities
  ['>Manufacturing Capabilities<', '>{s.capTitle || "Manufacturing Capabilities"}<'],
  ['>Comprehensive acrylic fabrication coordinated through engineering and quality management.<', '>{s.capSub || "Comprehensive acrylic fabrication coordinated through engineering and quality management."}<'],
  // Projects
  ['>Featured Projects<', '>{s.projTitle || "Featured Projects"}<'],
  ['>Custom acrylic solutions delivered for clients worldwide.<', '>{s.projSub || "Custom acrylic solutions delivered for clients worldwide."}<'],
  // Process
  ['>How We Work<', '>{s.procTitle || "How We Work"}<'],
  ['>A proven process from your initial inquiry to final delivery.<', '>{s.procSub || "A proven process from your initial inquiry to final delivery."}<'],
  // Insights
  ['>Industry Insights<', '>{s.insTitle || "Industry Insights"}<'],
  ['>Practical guides and design ideas for custom acrylic projects.<', '>{s.insSub || "Practical guides and design ideas for custom acrylic projects."}<'],
  // FAQ questions
  ['"Can all products be customized?"', '{s.faq1Q || "Can all products be customized?"}'],
  ['"What is your MOQ?"', '{s.faq2Q || "What is your MOQ?"}'],
  ['"Can you manufacture from drawings?"', '{s.faq3Q || "Can you manufacture from drawings?"}'],
  ['"What is your lead time?"', '{s.faq4Q || "What is your lead time?"}'],
  // FAQ answers
  ['"Yes. Every product can be customized in dimensions, material, color, finish, and branding to match your exact requirements."', '{s.faq1A || "Yes. Every product can be customized in dimensions, material, color, finish, and branding to match your exact requirements."}'],
  ['"MOQ is flexible. We handle single prototypes to full production runs. Contact us to discuss your specific project needs."', '{s.faq2A || "MOQ is flexible. We handle single prototypes to full production runs."}'],
  ['"Absolutely. Send us your CAD files, sketches, or reference samples. Our engineering team will review and provide a quotation within 24 hours."', '{s.faq3A || "Absolutely. Send us your CAD files or sketches and our team will provide a quotation within 24 hours."}'],
  ['"Standard lead time is 10–18 business days depending on complexity and quantity. Rush orders can often be accommodated."', '{s.faq4A || "Standard lead time is 10-18 business days depending on complexity and quantity."}'],
  // CTA
  ["Let's Build Your Next Acrylic Project", '{s.ctaTitle || "Let\'s Build Your Next Acrylic Project"}'],
  ["Tell us your ideas and we'll provide the right acrylic solution.", '{s.ctaSub || "Tell us your ideas and we\'ll provide the right acrylic solution."}'],
];

for (const [old, neo] of repl) {
  if (!s.includes(old)) console.log("NOT FOUND:", old.substring(0, 60));
  s = s.replace(old, neo);
}

fs.writeFileSync(f, s);
console.log("DONE — homepage now reads from settings");
