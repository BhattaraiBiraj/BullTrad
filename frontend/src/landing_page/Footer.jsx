export default function Footer() {
    let smallsize = {
        fontSize : "14px"
    }
  return (
    <footer className="bg-light border-top">
    <div className="container">
      <div className="row">
        <div className="col-4 mt-3" style={smallsize}>
          <img
            src="images\bulltrade.logo.png"
            alt="BullTradLogo"
            style={{ width: "65%" }}

          />
          <p className="text-muted text-small">&copy; 2026, BullTrade Brokerage Company Ltd.</p>
          <p className="text-muted">Not Licensed by Securities Board of Nepal (SEBON)</p>
          <p className="text-muted">All right reserved</p>
        </div>
        <div className="col mt-5" style={smallsize}>
          <p className="fs-6">Company</p>
          <a href="" className="text-decoration-none text-muted d-block">Abouts</a>
          <br></br>
          <a href="" className="text-decoration-none text-muted d-block">Product</a>
          <br></br>
          <a href="" className="text-decoration-none text-muted d-block">Pricing</a>
          <br></br>
          <a href="" className="text-decoration-none text-muted d-block">Referral Programme</a>
          <br></br>
          <a href="" className="text-decoration-none text-muted d-block">Careers</a>
          <br></br>
          <a href="" className="text-decoration-none text-muted d-block">Press and Media</a>
          <br></br>
          <a href="" className="text-decoration-none text-muted d-block">BullTrad Care (CSR)</a>
        </div>
        <div className="col mt-5" style={smallsize}>
          <p className="fs-6">Support</p>
          <a href=""className="text-decoration-none text-muted d-block">Support</a>
          <br></br>
          <a href=""className="text-decoration-none text-muted d-block">Product</a>
          <br></br>
          <a href=""className="text-decoration-none text-muted d-block">Support Portal</a>
          <br></br>
          <a href=""className="text-decoration-none text-muted d-block">List of charges</a>
          <br></br>
          <a href=""className="text-decoration-none text-muted d-block">Download and resources</a>
          <br></br>
        </div>
        <div className="col mt-5" style={smallsize}>
          <p className="fs-6">Account</p>
          <a href=""className="text-decoration-none text-muted d-block">Open an account</a>
          <br></br>
          <a href=""className="text-decoration-none text-muted d-block">Fund Transfer</a>
          <br></br>
          <a href=""className="text-decoration-none text-muted d-block">60 days challenge</a>
          <br></br>
        </div>
      </div>
      <div className="row">
        <div className="col my-5" style={smallsize}>
          <p className="text-muted">
            BullTrad Brokerage Company Ltd. is not a NEPSE member, not registered with SEBON (Broker
            No. 299). Depository services provided through BullTrad Brokerage
            Company Ltd. Registered Office: Kathmandu, Nepal. For complaints,
            contact complaints@bulltrad.com. Please read the Risk Disclosure
            Document carefully before investing
          </p>
          <p className="text-muted">
            Investments in the securities market are subject to market risk. KYC
            is a one-time process — once verified with a SEBON-registered
            intermediary, it need not be repeated elsewhere. Keep your contact
            details updated to receive transaction alerts, never share your
            login credentials, and report any unauthorized use of the BullTrad
            name immediately.
          </p>
        </div>
      </div>
    </div>
    </footer>
  );
}
