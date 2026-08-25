

function Awards() {
    return ( 
        <div className="container mt-5 mb">
            <div className="row">
                <div className="col-6">
                    <img src="images/largestBroker.svg" />
                </div>
                <div className="col-6 p-5">
                    <h1 className="mb-4">Largest Stock broker in Nepal</h1>
                    <p className="fs-5 text-muted">Thousands of Nepali investors trust BullTrad every day to trade and grow their wealth across:</p>
                    <div className="row">
                        <div className="col-6 text-muted">
                            <ul>
                                <li><p>Futures and Options</p></li>
                                <li><p>Mutual Funds</p></li>
                                <li><p>Derivatives</p></li>
                            </ul>
                        </div>
                        <div className="col-6 text-muted">
                            <ul>
                                <li><p>Stocks and IPOs</p></li>
                                <li><p>Bonds and Govt. Securities</p></li>
                                <li><p>Commodities</p></li>
                            </ul>
                        </div>
                    </div>
                    <img className="mt-3" src="images/pressLogos.png" style={{width : "95%"}} />
                </div>
            </div>
        </div>
     );
}

export default Awards;