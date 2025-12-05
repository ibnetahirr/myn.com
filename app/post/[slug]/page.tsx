// app/blogs/[slug]/page.tsx
import Layout from "@/components/layout/Layout";
import { notFound } from "next/navigation";

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "https://mynapi.onrender.com";

type Category = { id: number; name?: string; slug?: string } | null;

type Post = {
  id: number;
  slug: string;
  title: string;
  created_at?: string;
  meta_title?: string;
  meta_description?: string;
  keywords?: string;
  alt?: string;
  thumbnail?: string;
  thumbnail_url?: string;
  category_id?: number | null;
  category?: Category;
  payload?: string;
};

async function getPost(slug: string): Promise<Post> {
  const res = await fetch(`${API_BASE}/api/blogs/${slug}`, {
    cache: "no-store",
  });
  if (res.status === 404) notFound();
  if (!res.ok) throw new Error("Failed to load post");
  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const post = await getPost(params.slug);
    const title = post.meta_title || `${post.title} | My Yoga Network`;
    const description =
      post.meta_description ||
      "Explore yoga, wellness, and mindfulness resources from My Yoga Network.";
    const image = post.thumbnail_url;

    return {
      title,
      description,
      keywords:
        post.keywords || "Yoga, Wellness, Mindfulness, Fitness, Meditation",
      openGraph: {
        title,
        description,
        type: "article",
        images: image
          ? [{ url: image, alt: post.alt || post.title }]
          : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: image ? [image] : undefined,
      },
    };
  } catch {
    // fallback SEO for safety
    return {
      title: "Blog | My Yoga Network",
      description:
        "Discover insightful yoga and wellness articles from My Yoga Network.",
    };
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  return (
    <Layout>
      <section className="container">
        <main className="max-w-3xl mx-auto px-5 py-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{post.title}</h1>

          <div className="text-sm opacity-70 mb-6">
            {post.created_at && (
              <time dateTime={post.created_at}>
                {new Date(post.created_at).toLocaleDateString()}
              </time>
            )}
            {post.category?.name && <> • {post.category.name}</>}
          </div>

          <article className="prose prose-lg">
            <div
              dangerouslySetInnerHTML={{
                __html: post.payload || "",
              }}
            />
          </article>
        </main>
      </section>
    </Layout>
  );
}
