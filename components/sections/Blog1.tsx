// app/components/Blog1.tsx (server component)
import Link from "next/link";

const API_BASE = "https://mynapi.onrender.com";

type Blog = {
  id: number;
  title: string;
  slug: string;
  meta_description?: string;
  thumbnail_url?: string;
  alt?: string;
  category?: string;   // <-- NOW JUST A COLUMN, NOT AN OBJECT
  created_at?: string;
  display_on_home?: boolean;
};

async function getBlogs(limit = 6, offset = 0): Promise<Blog[]> {
  const res = await fetch(
    `${API_BASE}/api/blogs/home?limit=${limit}&offset=${offset}`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
}

const truncate = (s: string, n: number) =>
  s.length > n ? s.slice(0, n - 1) + "…" : s;

export default async function Blog1() {
  const blogs = await getBlogs(6, 0);

  return (
    <section className="section-blog-1 @@padding">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-12 col-md-6 me-auto">
            <h3 className="mt-3 mb-3 fw-black">Our Latest Articles</h3>
          </div>
        </div>

        <div className="row">
          {blogs.map((b, i) => (
            <div className="col-lg-4 text-start" key={b.id}>
              <div
                className="card border-0 rounded-3 mt-8 position-relative d-inline-flex"
              >
                {b.thumbnail_url ? (
                  <img
                    className="rounded-3 w-100"
                    src={b.thumbnail_url}
                    alt={b.alt ?? b.title}
                  />
                ) : (
                  <div
                    className="rounded-3 w-100"
                    style={{ aspectRatio: "16/9", background: "#f3f4f6" }}
                  />
                )}

                <div className="card-body p-0 bg-white">
                  <Link
                    href={`/post/${b.slug}`}
                    className="position-relative z-1 d-inline-flex mt-3"
                  >
                    <h6 className="my-3">{b.title}</h6>
                  </Link>

          
                </div>

                {/* Full clickable area */}
                <Link
                  href={`/post/${b.slug}`}
                  className="position-absolute bottom-0 start-0 end-0 top-0 z-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
