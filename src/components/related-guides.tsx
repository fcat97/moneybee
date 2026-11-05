import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';

export function RelatedGuides({ currentSlug }: { currentSlug: string }) {
  return (
    <aside className="mt-10 border-t pt-8" aria-label="Related guides">
      <h2 className="text-2xl font-semibold mb-4">Keep exploring</h2>
      <ul className="space-y-3 list-disc pl-5">
        {blogPosts.filter(post => post.slug !== currentSlug).map(post => (
          <li key={post.slug}><Link className="underline underline-offset-4" href={`/blogs/${post.slug}`}>{post.title}</Link></li>
        ))}
        <li><Link className="underline underline-offset-4" href="/features">Explore MoneyBee’s expense tracking and budgeting features</Link></li>
      </ul>
    </aside>
  );
}
