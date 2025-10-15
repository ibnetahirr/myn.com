import Layout from "@/components/layout/Layout";
import KidsProgramSection from "./KidsProgramContent"; // Updated import to match renamed component

export const metadata = {
  title: "Kids Program | My Yoga Network",
  description:
    "Explore My Yoga Network's Kids Program, featuring tailored yoga classes for children aged 3-12 in Long Beach, CA, to enhance wellness and growth.",
};

export default function KidsProgramPage() {
  return (
    <Layout>
      <KidsProgramSection />
    </Layout>
  );
}