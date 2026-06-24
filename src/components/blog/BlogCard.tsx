import Link from "next/link";
import type { BlogPost } from "@/lib/types";

type BlogCardProps = {
  post: BlogPost;
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group overflow-hidden rounded-xl border border-border bg-white transition-all hover:shadow-lg"
    >
      <div className="aspect-video bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center overflow-hidden">
        {post.image ? (
          <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
        ) : (
          <span className="text-4xl">📝</span>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 text-xs text-muted">
          <span className="font-medium text-primary-600 uppercase">
            {post.category}
          </span>
          <span>{post.date}</span>
        </div>
        <h3 className="mt-2 text-lg font-semibold text-foreground group-hover:text-primary-600 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center gap-2 text-sm">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-100 text-xs font-medium text-primary-600">
            {post.author.charAt(0)}
          </div>
          <span className="text-sm text-muted">{post.author}</span>
        </div>
      </div>
    </Link>
  );
}
