import React from "react";
const Text = (props) =>{
    return(
        <div style={{
            fontSize: '20px',
            marginLeft:"8px"
          }}>{props.text}</div>
    )
}
export default Text;