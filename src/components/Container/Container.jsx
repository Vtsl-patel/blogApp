import React from "react";

// not routing, this is for giving children same styling and avoid repeating it everywhere, just wrap around continer and its done

function Container({children}) {
    return (
        <div className="w-full max-w-7xl mx-auto px-4">{children}</div>
    )
}

export default Container