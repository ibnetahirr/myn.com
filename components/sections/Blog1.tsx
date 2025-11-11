// app/components/Blog1.tsx (server component)
import Link from "next/link";

const API_BASE = "https://mynapi.onrender.com";
type Category = { id: number; title: string };
type Blog = {
  id: number;
  title: string;
  slug: string;
  meta_description?: string;
  thumbnail_url?: string;
  alt?: string;
  category?: Category;
  created_at?: string;
};

async function getBlogs(limit = 3, offset = 0): Promise<Blog[]> {
  const res = await fetch(`${API_BASE}/api/blogs?limit=${limit}&offset=${offset}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
}

const truncate = (s: string, n: number) => (s.length > n ? s.slice(0, n - 1) + "…" : s);

export default async function Blog1() {
  const blogs = await getBlogs(6, 0); // adjust how many you want to show

  return (
    <section className="section-blog-1 @@padding">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-12 col-md-6 me-auto">
            <h3 className="ds-3 mt-3 mb-3">Our Latest Articles</h3>
            <span className="fs-5 fw-medium">Explore the insights and trends shaping our industry</span>
          </div>
          <div className="col-12 col-md-6 mt-3 mt-md-0">
            <Link href="/blogs" className="ms-md-5 fw-bold text-primary">
              See all articles
              <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={14} viewBox="0 0 24 14" fill="none">
                <path className="fill-dark" d="M17.4177 0.417969L16.3487 1.48705L21.1059 6.24429H0V7.75621H21.1059L16.3487 12.5134L17.4177 13.5825L24 7.0002L17.4177 0.417969Z" fill="black" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="row">
          {blogs.map((b, i) => (
            <div className="col-lg-4 text-start" key={b.id}>
              <div
                className="card border-0 rounded-3 mt-8 position-relative d-inline-flex"
                data-aos="fade-zoom-in"
                data-aos-delay={(i + 1) * 100}
              >
                {b.thumbnail_url ? (
                  <img className="rounded-3 w-100" src={b.thumbnail_url} alt={b.alt ?? b.title} />
                ) : (
                  <div className="rounded-3 w-100" style={{ aspectRatio: "16/9", background: "#f3f4f6" }} />
                )}

                <div className="card-body p-0 bg-white">
                  <Link
                    href={`/blogs?category=${encodeURIComponent(b.category?.title ?? "general")}`}
                    className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3"
                  >
                    <span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">
                      {b.category?.title ?? "General"}
                    </span>
                  </Link>
                  <h6 className="my-3">{b.title}</h6>
                </div>

                <Link href={`/blog/${b.slug}`} className="position-absolute bottom-0 start-0 end-0 top-0 z-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
