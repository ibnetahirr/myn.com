import Layout from "@/components/layout/Layout";
import PageAbout from "./YogaTherapistContent"; 

export const metadata = {
  title: "Find a Yoga Therapist | My Yoga Network",
  description:
    "Connect with certified yoga therapists at My Yoga Network. Contact us at (888) 960-9240 or contact@myyoganetwork.com to find tailored wellness solutions in Long Beach, CA, or apply to teach.",
};

export default function FindYogaTherapistPage() {
  return (
    <Layout>
      <PageAbout />
    </Layout>
  );
}