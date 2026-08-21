export default function Stats() {
    return ( 
        <div className="container">
            <div className="row my-5 p-3">
                <div className="col-5">
                    <h1 className="mt-4">Trust with BullTrad</h1>
                    <div className="mt-5 mb-4 ">
                        <h2 className="fs-3">Investors come first</h2>
                        <p className="text-muted">That's why thousands of Nepali investors choose BullTrad to manage their portfolios with confidence and transparency.</p>
                    </div>
                    <div className="mt-5 mb-4 ">
                        <h2 className="fs-3">No noise, no pressure</h2>
                        <p className="text-muted">No spam, no growth hacks, no annoying push notifications. Just clean, reliable tools you can use at your own pace.</p>
                    </div>
                    <div className="mt-5 mb-4 ">
                         <h2 className="fs-3">The BullTrad ecosystem</h2>
                        <p className="text-muted">More than a trading app — a growing set of tools designed to support every part of your investing journey.</p>
                    </div>
                    <div className="mt-5 mb-4 ">
                        <h2 className="fs-3">Smarter investing habits</h2>
                        <p className="text-muted">With built-in nudges and safety checks, we help you make thoughtful decisions, not impulsive ones.</p>
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-6">
                    <img className="mb-4" src="images\ecosystem.png" style={{width : "90%"}} />
                    <div className=" mb-5 row text-center">
                        <div className="col-6">
                            <a className="btn btn-danger text-decoration-none px-4" href="#fhajdsh">Explore our products  <i class="fa-solid fa-arrow-right-long mx-2"></i>
                            </a>
                        </div>
                        <div className="col-6">
                            <a className="btn btn-danger text-decoration-none px-5" href="#fhajdsh">Try kite demo <i class="fa-solid fa-arrow-right-long mx-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}