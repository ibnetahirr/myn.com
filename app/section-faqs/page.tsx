import Layout from "@/components/layout/Layout";
import SectionFaqs from "./FAQContent";

export const metadata = {
  title: "Support Center | My Yoga Network",
  description:
    "Find answers to your questions in the My Yoga Network Support Center. Learn about our services, yoga instructor requirements, and more. Contact us at (888) 960-9240 or Ram@myyoganetwork.com.",
};

export default function FaqsPage() {
  return (
    <Layout>
      <SectionFaqs />
    </Layout>
  );
}