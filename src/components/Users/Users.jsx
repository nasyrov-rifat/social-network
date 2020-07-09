import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

let Users = (props) => {
    return <div>
        <Paginator {...props}/>
        <User {...props} />
    </div>
}

export default Users;