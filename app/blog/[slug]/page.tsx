import Link from 'next/link';
import { posts } from '../../../lib/posts';

type Props = { params: { slug: string } };

export default function PostPage({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <section>
        <h2 className="text-2xl font-semibold">Post not found</h2>
        <p className="mt-4">Sorry, we couldn't find that post.</p>
        <div className="mt-4">
          <Link href="/blog" className="text-blue-600 underline">
            Back to blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article className="space-y-6">
      <h2 className="text-3xl font-bold">{post.title}</h2>
      <div className="prose max-w-none whitespace-pre-wrap text-gray-800">{post.content}</div>
      <div>
        <Link href="/blog" className="text-blue-600 underline">
          ← Back to Bike News
        </Link>
      </div>
    </article>
  );
}