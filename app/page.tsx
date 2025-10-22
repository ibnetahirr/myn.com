import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import Features1 from "@/components/sections/Features1"
import Features2 from "@/components/sections/Features2"
import Features3 from "@/components/sections/Features3"
import Hero1 from "@/components/sections/Hero1"
import LogoCloud1 from "@/components/sections/LogoCloud1"
import Newsletter1 from "@/components/sections/Newsletter1"
import Pricing1 from "@/components/sections/Pricing1"
import Services1 from "@/components/sections/Services1"
import Cta9 from "@/components/sections/Cta9"

import Testimonial1 from "@/components/sections/Testimonial1"
import HowItWork2 from "@/components/sections/HowItWork2"
import Features7 from "@/components/sections/Features7"
import Features8 from "@/components/sections/Features8"
import Features9 from "@/components/sections/Features9"
import Features10 from "@/components/sections/Features10"
import Features6 from "@/components/sections/Features6"
import Features5 from "@/components/sections/Features5"
import Features4 from "@/components/sections/Features4"
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
				{/* <Features3 /> */}
				{/* <Services1 /> */}

	
				


				{/* <Pricing1 /> */}
				<Testimonial1 />
				<Blog1 />
				<Newsletter1 />

			</Layout>
		</>
	)
}