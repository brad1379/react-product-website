import { Link } from "react-router-dom"
import hero from "../assets/hero.svg"

function Home() {
   return(
       <div className="home">
            <div className="home__copy">
                <p className="home__eyebrow">Welcome to</p>
                <h1 className="home__title">Home Appliance Depot</h1>
                <p className="home__text">
                    A small shop of well-made pieces for the home — lighting, furniture, and
                    decor worth keeping around. Browse the collection and find something you love.
                </p>
                <Link to="/products" className="home__cta">Shop the collection</Link>
            </div>
            <img src={hero} alt="" className="home__hero" />
       </div>
   )
}

export default Home
