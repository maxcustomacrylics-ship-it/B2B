import fs from "fs";
import path from "path";
import { products } from "../src/data/products";
import { services } from "../src/data/services";
import { caseStudies } from "../src/data/cases";
import { blogPosts } from "../src/data/blogs";
import { testimonials } from "../src/data/testimonials";

const dataDir = path.join(process.cwd(), "src", "data");

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

fs.writeFileSync(
  path.join(dataDir, "products.json"),
  JSON.stringify(products, null, 2)
);
fs.writeFileSync(
  path.join(dataDir, "services.json"),
  JSON.stringify(services, null, 2)
);
fs.writeFileSync(
  path.join(dataDir, "cases.json"),
  JSON.stringify(caseStudies, null, 2)
);
fs.writeFileSync(
  path.join(dataDir, "blogs.json"),
  JSON.stringify(blogPosts, null, 2)
);
fs.writeFileSync(
  path.join(dataDir, "testimonials.json"),
  JSON.stringify(testimonials, null, 2)
);

const defaultSettings = {
  companyName: "AcrylicPro Custom",
  phone: "+86 138-0000-0000",
  email: "info@acrylicb2b.com",
  address: "No. 888, Industrial Avenue, Guangzhou, China",
  whatsapp: "8613800000000",
  businessHours: "Mon-Fri: 8:00 AM - 6:00 PM (CST)",
};

fs.writeFileSync(
  path.join(dataDir, "settings.json"),
  JSON.stringify(defaultSettings, null, 2)
);

console.log("Seed complete: JSON data files generated.");
console.log("- products.json");
console.log("- services.json");
console.log("- cases.json");
console.log("- blogs.json");
console.log("- testimonials.json");
console.log("- settings.json");
