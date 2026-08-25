import Hero from "./Hero";
import Brokerage from "../pricing/Brokerage";
import OpenAccount from "../OpenAccount"

export default function PricingPage() {
    return ( 
        <>
            <Hero />
            <OpenAccount />
            <Brokerage />
        </>
     );
}