import Layout from "@/components/layout/Layout";
import Hero5 from "./HealthContent"; 

export const metadata = {
  title: "Health Care | My Yoga Network",
  description:
    "Enhance patient wellness with My Yoga Network's tailored yoga programs. Contact us at (888) 960-9240 or contact@myyoganetwork.com for healthcare solutions in Long Beach, CA.",
};

export default function HealthPage() {
  return (
    <Layout>
      <Hero5 />
    </Layout>
  );
}