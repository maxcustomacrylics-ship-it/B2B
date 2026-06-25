import Link from "next/link";
import Container from "@/components/ui/Container";
import type { BlogPost } from "@/lib/types";
import { ArrowRight } from "lucide-react";

export default function BlogPreview({ posts }: { posts: BlogPost[] }) {
  const recent = posts.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0F2744] sm:text-4xl">Industry Insights</h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">Expert articles on acrylic manufacturing, material selection, and industry best practices.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {recent.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg transition-all">
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center overflow-hidden">
                {post.image ? (
                  <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
                ) : (
                  <span className="text-4xl opacity-30">📝</span>
                )}
              </div>
              <div className="p-5">
                <span className="text-xs text-gray-400">{post.date}</span>
                <h3 className="mt-2 font-semibold text-[#0F2744] leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">{post.title}</h3>
                <div className="mt-3 flex items-center gap-1 text-sm font-medium text-[#0F2744]">
                  Read More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
