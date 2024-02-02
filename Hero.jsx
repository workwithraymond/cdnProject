import heroImg from './src/assets/hero.svg'

const Hero = () => {
  return ( <section className="hero">
        <div className="hero-center">
        <div className="hero-title">
            <h1>Contentful CMS</h1>
            <p>I'm baby iceland quinoa chicharrones, vice blue bottle jean shorts VHS hella microdosing.</p>
        
        </div>
        <div className="img-container">
        <img src={heroImg} alt="" className='img'/>
        
        </div>
        </div>
        
    </section>
  )
}
export default Hero