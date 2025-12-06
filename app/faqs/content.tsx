"use client";
import { useState } from "react";

export default function FAQs() {
  // FAQ DATA
  const faqs = [
    {
      id: 1,
      question: "What is My Yoga Network?",
      answer:
        "My Yoga Network is an online platform that connects certified yoga instructors with clients such as hotels, healthcare facilities, and individuals. We provide tailored yoga sessions to enhance wellness, therapeutic care, and personal fitness.",
    },
    {
      id: 2,
      question: "What services does My Yoga Network offer to hotels?",
      answer:
        "MYN partners with hotels to provide Yoga sessions by certified instructors on the property. Our programs improve guest satisfaction by offering wellness, mindfulness, and relaxation experiences.",
    },
    {
      id: 3,
      question:
        "Is yoga therapy suitable for individuals with specific medical conditions?",
      answer:
        "Yes, therapeutic yoga is customizable for conditions like PTSD, chronic pain, and mobility challenges. Instructors adapt poses safely for recovery and rehabilitation.",
    },
    {
      id: 4,
      question: "Are online yoga sessions available?",
      answer:
        "Yes, My Yoga Network offers virtual yoga sessions ideal for home practice or remote locations where in-person sessions aren't feasible.",
    },
    {
      id: 5,
      question: "What types of yoga are available?",
      answer:
        "We offer Hatha, Vinyasa, restorative yoga, and specialized therapeutic yoga. Clients can choose styles based on fitness levels, goals, and preferences.",
    },
  ];

  // Expand all FAQs by default
  const [openItems, setOpenItems] = useState(faqs.map((f) => f.id));

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="section-faqs-1 section-padding position-relative">
      <div className="container position-relative z-2">
        <div className="text-center mb-5">
          <h3 className="mt-3 mb-3">Frequently Asked Questions</h3>
          <p className="fs-5">
            Share your details and questions below, and we'll get back to you.
          </p>
        </div>

        <div className="accordion">

          {faqs.map((faq) => (
            <div key={faq.id} className="mb-3 card p-3 border bg-white rounded-2 shadow-2">
              <div
                className="px-0 card-header border-0 d-flex align-items-center pointer"
                onClick={() => toggleItem(faq.id)}
              >
                <h6 className="m-0">{faq.question}</h6>

                <span className="ms-auto arrow me-2" style={{ transform: openItems.includes(faq.id) ? "rotate(180deg)" : "rotate(0deg)", transition: "0.3s" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" fill="none">
                    <path
                      d="M11.5 1L6.25 6.5L1 1"
                      stroke="#111827"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>

              <div className={`accordion-collapse collapse ${openItems.includes(faq.id) ? "show" : ""}`}>
                <p className="ps-0 card-body">{faq.answer}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
