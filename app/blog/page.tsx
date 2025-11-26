import Link from 'next/link';
import { posts } from '../../lib/posts';

export default function BlogPage() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Bike News</h2>

      <div className="grid gap-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition"
          >
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="mt-2 text-gray-600">{post.excerpt}</p>
            <div className="mt-4">
              <Link href={`/blog/${post.slug}`} className="text-blue-600 underline">
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}