"use client";
import Link from "next/link";


export default function Content() {
  return (
    <>
      <section
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{ minHeight: "80vh" }}
      >
        <h2 className="mb-4">Coming Soon!</h2>

        <Link href="/contact-us" className="btn btn-primary px-4 py-2">
          Contact Us for Details
        </Link>
      </section>
    </>
  );
}
