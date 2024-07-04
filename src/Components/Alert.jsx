

import React from "react";
function Alert(props) {
  const capital = (text) => {
    const lower = text.toLowerCase();
    return lower.charAt(0).toUpperCase() + text.slice(1);
  };
  return (
    <div
      style={{
        height: "30px",
      }}
    >
      {props.attension && (
        <div
          className={`alert alert-${props.attension.type} 
					alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capital(props.attension.type)}</strong>:{props.attension.msg}
        </div>
      )}
    </div>
  );
}
export default Alert;
