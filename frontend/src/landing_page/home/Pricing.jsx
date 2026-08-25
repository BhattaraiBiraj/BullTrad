function Pricing() {
    return ( 
        <div className="container my-5">
            <div className="row p-4">
                <div className="col-4">
                    <h1>Fair pricing, always</h1>
                    <p className=" mt-4 text-muted">BullTrad brings honest, straightforward pricing to Nepali investors - no confusing fee structures, no surprise deductions, just simple flat rates.</p>
                    <a className="btn btn-danger text-decoration-none px-5" href="#fjdk">See pricing  <i className="fa-solid fa-arrow-right-long mx-2"></i></a>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <div className=" mb-5 row justify-content-center">
                        <div className="col border text-center p-3">
                            <h2 className="my-3">रू 0</h2>
                            <p>Stock Transfer Fee</p>
                        </div>
                         <div className=" col border text-center p-3">
                            <h2 className="my-3">रू 25</h2>
                            <p>Depository Participant <br></br>(DP) Fees</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;