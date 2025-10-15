import Layout from "@/components/layout/Layout";
import Hero5 from "./AfterSchoolContent"; // Importing the existing Hero5 component

export const metadata = {
  title: "After School Program | My Yoga Network",
  description:
    "Discover My Yoga Network's After School Program, designed for Pre-K to 5th grade kids in Long Beach, CA, to transform wiggles into wellness with tailored yoga and mindfulness activities.",
};

export default function AfterSchoolPage() {
  return (
    <Layout>
      <Hero5 />
    </Layout>
  );
}