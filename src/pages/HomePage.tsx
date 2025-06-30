import Hero from '../components/Hero'
import InfoSection from '../components/InfoSection'


const HomePage = () => {
  return (
    <>
      <title>Laska bar (not original)</title>
      <meta name="description" content="This is an educational website redesign of the laska.bar website, unrelated to the original brand" />
    
      <div className="home-bg">
        <div className="container relative">
          <Hero />
        </div>
        <InfoSection />
      </div>
    </>
  )
}

export default HomePage