function Hero() {
    return ( 
        <div className="container border-bottom">
            <div className="row text-center my-5 p-3">
                <h1>Pricing</h1>
                <h3 className="text-muted mt-3 fs-5">Free equity investments and flat रू20 intraday and  F&O trades </h3>
            </div>
            <div className="row">
                <div className="col-4 p-5">
                    <img src="images/pricingEquity.svg"></img>
                    <h1  className="text-center fs-3">Free equity delivery</h1>
                    <p  className="text-muted text-center my-4">All equity delivery investments are absolutely free - रू0  brokerage </p>
                </div>
                <div className="col-4 p-5">
                    <img src="images\intradayTrades.svg"></img>
                    <h1  className="text-center fs-3">Intraday and F&O trades</h1>
                    <p className="text-muted text-center my-4">Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.</p>
                </div>
                <div className="col-4 p-5">
                    <img src="images/pricingEquity.svg"></img>
                    <h1  className="text-center fs-3">Free direct MF</h1>
                    <p className="text-muted text-center my-4">All direct mutual fund investments are absolutely free — रू0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;