import Layout from "@/components/layout/Layout";
import AboutContent from "./AboutContent"; 

export const metadata = {
  title: "About Us | My Yoga Network",
  description:
    "Learn more about My Yoga Network, our mission, team, and wellness programs for individuals and organizations.",
};

export default function AboutPage() {
  return (
    <Layout>
      <AboutContent />
    </Layout>
  );
}
