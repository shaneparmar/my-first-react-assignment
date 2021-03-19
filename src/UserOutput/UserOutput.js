import React from "react";

const userOutput= (props) => {
    return(
        <div>
            <p>UserName: {props.userName} </p>
            <p>I hope i'll be overwritten!</p>
        </div>
    )
}

export default userOutput;