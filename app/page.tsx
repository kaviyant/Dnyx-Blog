import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="space-y-6 text-center">
      <h2 className="text-3xl font-bold">Bike World Daily</h2>
      <p className="text-gray-600">Your quick source for bike updates, tips, and news!</p>
      <div>
        <Link href="/blog" className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
          Go to Bike News
        </Link>
      </div>
    </section>
  );
}