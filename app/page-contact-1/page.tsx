import Layout from "@/components/layout/Layout";
import PageContact1 from "./ContactContent"; // Importing the existing PageContact1 component

export const metadata = {
  title: "Contact Us | My Yoga Network",
  description:
    "Get in touch with My Yoga Network for customized yoga and wellness programs. Contact us at +1 888-960-9240 or team@myyoganetwork.com for consultations, support, or partnerships in Long Beach, CA.",
};

export default function ContactPage() {
  return (
    <Layout>
      <PageContact1 />
    </Layout>
  );
}
