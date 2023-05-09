// import React from "react";
// import { useHistory } from "react-router-dom";

const RequireAuth = ({ children }) => {
    // const history = useHistory();
    const auth = document.cookie?.indexOf("bearer") !== -1; // FIX AFTER BACK

    if (!auth) {
        // history.push('/login');
        return children
    }

    return children;
};

export { RequireAuth };
