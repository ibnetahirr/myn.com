import Layout from "@/components/layout/Layout";
import Content from "./content"; 

export const metadata = {
  title: "Yoga for Hotels and Resorts | My Yoga Network",
  description:
    "Elevate your guests' experience with our Hospitality Yoga & Wellness Programs. We offer a unique way to enhance guest satisfaction and promote holistic well-being.",
};

export default function HotelPage() {
  return (
    <Layout>
      <Content />
    </Layout>
  );
}
