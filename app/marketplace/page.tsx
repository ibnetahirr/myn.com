import Layout from "@/components/layout/Layout";

const API_BASE = "https://mynapi.onrender.com";

type YogaClass = {
  id: number;
  title: string;
  style: string;
  duration: number;
  price: number;
};

type Company = {
  id: number;
  name: string;
  description?: string;
  location?: string;
  logo_url?: string;
  classes: YogaClass[];
};

async function getCompanies(limit = 6, offset = 0): Promise<Company[]> {
  const res = await fetch(
    `${API_BASE}/api/companies?limit=${limit}&offset=${offset}`,
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to fetch companies");
  return res.json();
}

type PageProps = {
  searchParams?: {
    page?: string;
  };
};

export default async function MarketplacePage({ searchParams }: PageProps) {
  const page = Math.max(Number(searchParams?.page || "1"), 1);
  const limit = 6;
  const offset = (page - 1) * limit;

  const companies = await getCompanies(limit, offset);
  const hasNextPage = companies.length === limit;
  const hasPrevPage = page > 1;

  return (
    <Layout>
      {/* HERO */}
      <section className="section-feature-5 section-padding border-bottom">
        <div className="container text-center">
          <h3 className="ds-3 mt-3 mb-3">Yoga Marketplace</h3>
          <p className="fs-5">
            Explore trusted companies and book yoga classes that fit your lifestyle
          </p>
        </div>
      </section>

      {/* COMPANIES */}
      <section className="section-padding">
        <div className="container">
          <div className="row g-4">
            {companies.map((company) => (
              <div key={company.id} className="col-lg-6">
                <div className="p-4 bg-white rounded-4 shadow-sm h-100">
                  {/* Company Header */}
                  <div className="d-flex align-items-center mb-3">
                    {company.logo_url && (
                      <img
                        src={company.logo_url}
                        alt={company.name}
                        className="rounded-3 me-3"
                        style={{
                          width: 64,
                          height: 64,
                          objectFit: "cover",
                        }}
                      />
                    )}
                    <div>
                      <h5 className="fw-bold mb-0">{company.name}</h5>
                      <small className="text-muted">{company.location}</small>
                    </div>
                  </div>

                  <p className="mb-4">{company.description}</p>

                  {/* Classes */}
                  <h6 className="fw-bold mb-3">Available Classes</h6>

                  {company.classes.length === 0 && (
                    <p className="text-muted">No classes available.</p>
                  )}

                  {company.classes.map((cls) => (
                    <div
                      key={cls.id}
                      className="d-flex justify-content-between align-items-center p-3 mb-2 border rounded-3"
                    >
                      <div>
                        <strong>{cls.title}</strong>
                        <div className="small text-muted">
                          {cls.style} · {cls.duration} mins
                        </div>
                      </div>

                      <div className="text-end">
                        <div className="fw-bold text-primary">
                          ${cls.price}
                        </div>
                        <button className="btn btn-sm btn-outline-secondary mt-1">
                          View
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="d-flex justify-content-center align-items-center gap-3 mt-6">
            <a
              href={`/marketplace${hasPrevPage ? `?page=${page - 1}` : ""}`}
              className={`btn btn-outline-secondary rounded-pill px-4 ${
                !hasPrevPage ? "disabled" : ""
              }`}
            >
              Previous
            </a>

            <span className="fw-medium">Page {page}</span>

            <a
              href={`/marketplace${hasNextPage ? `?page=${page + 1}` : ""}`}
              className={`btn btn-outline-secondary rounded-pill px-4 ${
                !hasNextPage ? "disabled" : ""
              }`}
            >
              Next
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
