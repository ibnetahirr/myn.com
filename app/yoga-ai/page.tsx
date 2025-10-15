"use client";

import Layout from "@/components/layout/Layout";
import YogaAi from "./components/YogaAi";
import Link from "next/link";


export default function YogaAiPage() {
  return (
    <Layout>
      {/* Breadcrumb Header */}
      <section className="section-page-header py-10 fix position-relative">
        <div className="container position-relative z-1">
          <div className="text-start">
            <h3>Yoga AI</h3>
            <div className="d-flex">
              <Link href="/">
                <p className="mb-0 text-900">Home</p>
              </Link>
              <svg
                className="mx-3 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                width={8}
                height={13}
                viewBox="0 0 8 13"
                fill="none"
              >
                <path
                  className="stroke-dark"
                  d="M1 1.5L6.5 6.75L1 12"
                  stroke="#111827"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-primary mb-0">Yoga AI</p>
            </div>
          </div>
        </div>
        <img
          className="position-absolute bottom-0 start-0 end-0 top-0 z-0"
          src="/assets/imgs/page-header/bg-line.png"
          alt="my-yoga-network"
        />
      </section>

      {/* Chat Section */}
      <section className="section py-10" id="yoga-ai-chat">
        <div className="container">
          <h2 className="text-center mb-3">🧘 Yoga AI Assistant</h2>
          <p className="text-center mb-10 max-w-2xl mx-auto">
            Chat with your personal Yoga Assistant. Ask about yoga poses, routines, or meditation tips.
          </p>
          <YogaAi />
        </div>
      </section>
    </Layout>
  );
}
