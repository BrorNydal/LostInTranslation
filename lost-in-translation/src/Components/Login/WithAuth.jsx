
import { Navigate } from "react-router-dom";

function withAuth(Component){
    return function (props){
        console.log(localStorage)
        if(localStorage.getItem("user") != null)
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

export default withAuth;