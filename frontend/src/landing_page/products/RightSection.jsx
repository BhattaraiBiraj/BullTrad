function RightSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
    return ( 
        <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-6 mt-4 p-2 ">
          <h1>{productName}</h1>
          <p className="text-muted">{productDescription}</p>
          <div>
            <a href={learnMore}>Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
          
        </div>
        <div className="col-2"></div>
        <div className="col-4 p-3">
          <img src={imageUrl}></img>
        </div>
        
      </div>
    </div>
    );
}

export default RightSection;