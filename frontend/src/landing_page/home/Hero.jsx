function Hero() {
    return ( 
        <div className="container p-5">
            <div className="row text-center mb-5">
                <img className="mb-5" src="images/homeHero.png" alt="Hero image" />
                <h1 className="mt-5 mb-4" > Invest in everything</h1>
                <p className="mb-5 text-muted">Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <button  className="btn btn-danger fs-5 p-2" style={{width : "20%", margin: "0 auto"}} >Signup Now</button>
            </div>
        </div>
     );
}

export default Hero;