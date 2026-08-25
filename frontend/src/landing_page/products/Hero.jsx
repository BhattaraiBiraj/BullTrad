function Hero() {
    return ( 
        <div className="container text-center p-4 my-5">
      <h1>Technology</h1>
      <h3 className="text-muted mt-4">Sleek, modern and intutive trading platforms </h3>
      <p className="mt-4">
        Check out our{" "}
        <a href="" style={{ textDecoration: "none" }}>
          {" "}
          investment offerings{" "}
          <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </a>
      </p>
    </div>
    );
}

export default Hero;