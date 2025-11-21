import Layout from "@/components/layout/Layout";
import Content from "./content"; 

export const metadata = {
  title: "Yoga for Corporate | My Yoga Network",
  description:
    "My Yoga Network provides certified yoga teachers for hotels, resorts, healthcare facilities, and private practices, promoting wellness for all. Contact today!",
};

export default function CorporatePage() {
  return (
    <Layout>
      <Content />
    </Layout>
  );
}
