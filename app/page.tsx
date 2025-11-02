import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import Features1 from "@/components/sections/Features1"
import Features2 from "@/components/sections/Features2"
import Features3 from "@/components/sections/Features3"
import Hero1 from "@/components/sections/Hero1"
import LogoCloud1 from "@/components/sections/LogoCloud1"
import Newsletter1 from "@/components/sections/Newsletter1"
import Testimonial1 from "@/components/sections/Testimonial1"
import HowItWork2 from "@/components/sections/HowItWork2"
export default function Home() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<Hero1 />
				<LogoCloud1 />
				<Features1 />
				{/* <Cta9/> */}
				
				<HowItWork2 />

				<Features2 />
				<Features3 />
				{/* <Services1 /> */}
				{/* <Pricing1 /> */}
				<Testimonial1 />
				<Blog1 />
				<Newsletter1 />

			</Layout>
		</>
	)
}