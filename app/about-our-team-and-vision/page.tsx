import Layout from "@/components/layout/Layout";
import AboutContent from "./content"; 

export const metadata = {
  title: "About My Yoga Network: Find Best Yoga Therapy Programs",
  description:
    "My Yoga Network offers the best yoga therapy programs to help you enhance your practice and deepen your expertise. Find the perfect program to meet your needs. Contact today!",
};

export default function AboutPage() {
  return (
    <Layout>
      <AboutContent />
    </Layout>
  );
}
