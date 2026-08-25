function Brokerage() {
    return ( 
        <div className="container">
            <div className="row my-5">
                <div className="col-7">
                   <h3 className="text-danger mt-5 text-center mx-auto" style={{ width: "fit-content", padding: "0 1rem" }}>
    <a href="" style={{ textDecoration: "none", color: "inherit" }}>Brokerage calculator</a>
</h3>
                   <ul className="text-muted border-top mt-5" style={{fontSize:"13px"}}>
  <li className="mb-3 mt-5">Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
  <li className="mb-3">Digital contract notes will be sent via e-mail.</li>
  <li className="mb-3">Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
  <li className="mb-3">For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
  <li className="mb-3">For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
  <li className="mb-3">If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
</ul>
                </div>
                <div className="col-5">
            <h3 className="text-danger my-5 text-center mx-auto" style={{ width: "fit-content" }}>
    <a href="" style={{ textDecoration: "none", color: "inherit" }}>List of charges</a>
</h3>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;