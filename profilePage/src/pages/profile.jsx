import '../App.css'

import ProfileHeader from '../components/profile-header'
import AboutSection from '../components/about-section'
import PricingSection from '../components/pricing-section'
import AvailabilityCalendar from '../components/availability-calendear'
import PortfolioSection from '../components/portfolio-section'
import ReviewsSection from '../components/review-section'
import FixedActions from '../components/fixed-actions'
import RateUsPage from '../components/rate-us-page'

export default function ProfilePage() {
  return (
    <div className="max-w-5xl mx-auto pb-20">
      <ProfileHeader />
      <AboutSection />
      <PricingSection />
      <AvailabilityCalendar />
      <PortfolioSection />
      <ReviewsSection />
      <FixedActions />
      <RateUsPage />
    </div>
  )
}