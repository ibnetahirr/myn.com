import Layout from "@/components/layout/Layout";
import PageTermsConditions from "./TermsContent";

export const metadata = {
  title: "Terms and Conditions | My Yoga Network",
  description:
    "Read the Terms and Conditions for using My Yoga Network's services. Learn about eligibility, account registration, intellectual property, payment, and more. Contact us at (888) 960-9240 or team@myyoganetwork.com.",
};

export default function TermsConditionPage() {
  return (
    <Layout>
      <PageTermsConditions />
    </Layout>
  );
}
