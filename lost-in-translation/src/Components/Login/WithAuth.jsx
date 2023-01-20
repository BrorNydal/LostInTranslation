
import { Navigate } from "react-router-dom";

function withAuth(Component){
    return function (props){
        if(localStorage.getItem("auth") == "true")
        {
            return(<>
                <Component {...props} />
            </>);
        }

        return(<>
            <Navigate to="/"/>
        </>);
    }
}