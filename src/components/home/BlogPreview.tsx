import Link from "next/link";
import Container from "@/components/ui/Container";
import type { BlogPost } from "@/lib/types";

export default function BlogPreview({ posts }: { posts: BlogPost[] }) {
  const recent = posts.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0F2744] sm:text-4xl">
            Latest Resources
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Practical guides, material knowledge and design ideas for custom
            acrylic projects.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {recent.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center">
                {post.images?.[0] ? (
                  <img src={post.images[0]} alt="" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <svg className="w-10 h-10 text-gray-300/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
                )}
              </div>
              <div className="p-4 flex flex-col flex-1">
                <p className="text-xs text-gray-400">{post.date}</p>
                <h3 className="mt-1.5 text-sm font-semibold text-[#0F2744] group-hover:text-blue-700 transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h3>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[#0F2744] group-hover:text-blue-700 transition-colors">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-[#0F2744] px-6 py-3 text-sm font-semibold text-[#0F2744] hover:bg-blue-50 transition-colors"
          >
            View All Resources
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>
      </Container>
    </section>
  );
}
