function LeftSection({
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
        <div className="col-4 p-3">
          <img src={imageUrl}></img>
        </div>
        <div className="col-2"></div>
        <div className="col-6 mt-4 p-2 ">
          <h1>{productName}</h1>
          <p className="text-muted">{productDescription}</p>
          <div>
            <a href={tryDemo}>Try Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a href={learnMore} style={{marginLeft : "50px"}}>Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="images/googlePlayBadge.svg"></img>
            </a>
            <a href={appStore} style={{marginLeft : "50px"}}>
              <img src="images/appstoreBadge.svg"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
