
import { Navigate } from "react-router-dom";

function withAuth(Component){
    return function (props){
        if(localStorage.getItem("user") != null)
        {
            return(<>                
                <Component {...props} />
            </>);
        }
        console.log(localStorage.getItem("user") + " was not authorized.");

        return(<>
            <Navigate to="/"/>
        </>);
    }
}

export default withAuth;