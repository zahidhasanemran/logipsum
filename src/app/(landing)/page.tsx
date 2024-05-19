import Certified from '@/components/Landing/Certificate'
import Curriculum from '@/components/Landing/Curriculum'
import Hero from '@/components/Landing/Hero/Hero'
import JobPlacement from '@/components/Landing/JobPlacement'
import OurInstructor from '@/components/Landing/OurInstructor'
import PricingPlan from '@/components/Landing/PricingPlan'
import Roadmap from '@/components/Landing/Roadmap'
import Testimonial from '@/components/Landing/Testimonial/index'

export default function Home() {
  return (
    <div>
      <Hero />
      <JobPlacement />
      <Roadmap />
      <Curriculum />
      <OurInstructor />
      <Testimonial />
      <Certified />
      <PricingPlan />
    </div>
  )
}
