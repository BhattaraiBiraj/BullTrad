import Awards from './Award'
import Stats from './Stats';
import Education from './Education';
import Hero from './Hero'
import Pricing from './Pricing'

import OpenAccount from '../OpenAccount'
import Navbar from '../Navbar'
import Footer from '../Footer'


export default function HomePage() {
    return ( 
        <>
            <Navbar />
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
            <Footer />
        </>
     );
}

