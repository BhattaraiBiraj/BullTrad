function Hero() {
    return ( 
        <div id="Support-container-box" className="p-5">
            <div className="container">
                <div className="row py-5 d-flex justify-content-between">
                    <div className="col-auto">
                        <h3>Support Portal</h3>
                    </div>
                    <div className="col-auto">
                        <p className="me-5 pe-5"><a href="" className="white">Track Ticket</a></p>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-6">
                        <h3 className="fs-4">Search for an answer or browse help topics to create a ticket</h3>
                        <input type="text" className="form-control p-3 my-5 " placeholder="Eg: how do i activate F&O, why is my order getting..."/>
                        <div>
                            <a href="" className="small me-4 white">Track account opening</a>
<a href="" className="small me-4 white">Track segment activation</a>
<a href="" className="small me-4 white">Intraday margins</a>
<a href="" className="small me-4 white">Kite user manual</a>

                        </div>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-4">
                        <h3>Featured</h3>
                        <ol>
                            <li><a href="" className="white lh-lg">Current takeovers and Delistings - January 2026</a></li>
                            <li><a href="" className="white lh-lg">Latest Intraday leverages - MIS & CO</a></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Hero;