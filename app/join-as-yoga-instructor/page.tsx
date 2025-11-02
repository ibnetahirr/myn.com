import Layout from "@/components/layout/Layout";
import LoginContent from "./InstructorContent";

export const metadata = {
  title: "Join as Instructor | My Yoga Network",
  description:
    "Become a yoga instructor with My Yoga Network and connect with clients across the U.S. Enjoy professional growth, fair compensation, and a supportive community.",
};

export default function PageLogin() {
  return (
    <Layout>
      <LoginContent />
    </Layout>
  );
}
