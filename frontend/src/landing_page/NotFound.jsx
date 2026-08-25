import { Link } from "react-router-dom";

function NotFound() {
    return ( 
            <div className="container text-center">
                <div style={{height: "200px"}}></div>
                <h1 className="my-4">404 Page Not Found</h1>
                <p>Sorry, The page you are looking for does not exist.</p>
                <Link className="btn btn-danger mt-4" to="/">Go to home page</Link>
                <div style={{height: "200px"}}></div>
            </div>
                   
            
            
     );
}

export default NotFound;