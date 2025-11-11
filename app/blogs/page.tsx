// app/(site)/PageBlog2.tsx (server component)
import Layout from "@/components/layout/Layout";
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

async function getBlogs(limit = 12, offset = 0): Promise<Blog[]> {
  const res = await fetch(`${API_BASE}/api/blogs?limit=${limit}&offset=${offset}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
}

const truncate = (s: string | undefined, n: number) =>
  s ? (s.length > n ? s.slice(0, n - 1) + "…" : s) : "";

/**
 * Thumb
 * - Keeps a fixed 16:9 area without stretching
 * - Uses CSS aspect-ratio (so it works even if Bootstrap ratio utilities aren't loaded)
 * - flex: 0 0 auto prevents the image from collapsing in flex rows
 */
function Thumb({ src, alt }: { src?: string; alt: string }) {
  // If API might return "", treat it as undefined so we show the grey placeholder
  const safeSrc = src && src.trim().length > 0 ? src : undefined;

  return (
    <div
      className="rounded-3 overflow-hidden w-100 mb-3 mb-md-0"
      style={{
        aspectRatio: "16 / 9",
        width: "100%",
        maxWidth: 520,
        flex: "0 0 auto",
      }}
    >
      {safeSrc ? (
        <img
          src={safeSrc}
          alt={alt}
          className="d-block"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
          }}
          loading="lazy"
        />
      ) : (
        <div
          className="w-100 h-100"
          style={{ background: "#f3f4f6" }}
          aria-label={alt}
        />
      )}
    </div>
  );
}

export default async function PageBlog2() {
  const blogs = await getBlogs(12, 0);
  const recent = blogs.slice(0, 6);

  return (
    <Layout>
      {/* Recent Posts */}
      <section className="section-blog-7 section-padding border-bottom">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h3 className="ds-3 mt-3 mb-3">Recent Posts</h3>
              <span className="fs-5 fw-medium">
                Explore the insights and trends shaping our industry
              </span>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-10 mx-lg-auto mt-8">
              {recent.map((b, i) => (
                <div
                  key={b.id}
                  className="border-top py-5 position-relative d-flex flex-column flex-md-row align-items-center"
                  data-aos="fade-zoom-in"
                  data-aos-delay={(i + 1) * 100}
                >
                  {/* Responsive, non-stretching image */}
                  <Thumb src={b.thumbnail_url} alt={b.alt ?? b.title} />

                  {/* Text content */}
                  <div className="ms-0 ms-md-4 w-100 w-lg-50 me-auto">
                    <Link
                      href={`/blog?category=${encodeURIComponent(b.category?.title ?? "General")}`}
                      className="bg-primary-soft position-relative z-1 d-inline-flex rounded-pill px-3 py-2 mt-3"
                    >
                      <span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase">
                        {b.category?.title ?? "General"}
                      </span>
                    </Link>
                    <h6 className="my-3">
                      <Link href={`/blog/${b.slug}`} className="text-reset">
                        {b.title}
                      </Link>
                    </h6>
                    <p>{truncate(b.meta_description, 180)}</p>
                     <Link
                    href={`/blog/${b.slug}`}
                    className="rounded-pill bg-white border d-lg-inline-block px-4 py-2 d-none"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={11} viewBox="0 0 18 11" fill="none">
                      <path
                        className="fill-dark"
                        d="M13.0633 0.563232L12.2615 1.36505L15.8294 4.93297H0V6.06692H15.8294L12.2615 9.6348L13.0633 10.4366L18 5.49991L13.0633 0.563232Z"
                        fill="#111827"
                      />
                    </svg>
                    <span className="ms-2 fw-bold text-900">Learn More</span>
                  </Link>
                  </div>

                 
                </div>
              ))}

           
            </div>
          </div>
        </div>
      </section>

    
    </Layout>
  );
}
