import Layout from "@/components/layout/Layout";
import PagePrivacyPolicy from "./PrivacyContent";

export const metadata = {
  title: "Privacy Policy | My Yoga Network",
  description:
    "Explore the My Yoga Network Privacy Policy effective March 12, 2024. Learn how we collect, use, and protect your information. Contact us at info@myyoganetwork.com for inquiries.",
};

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <PagePrivacyPolicy />
    </Layout>
  );
}