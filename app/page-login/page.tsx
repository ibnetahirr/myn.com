import Layout from "@/components/layout/Layout";
import LoginContent from "./LoginContent";

export const metadata = {
  title: "Login | My Yoga Network",
  description:
    "Login to My Yoga Network and access personalized yoga and wellness programs designed for individuals and organizations.",
};

export default function PageLogin() {
  return (
    <Layout>
      <LoginContent />
    </Layout>
  );
}
