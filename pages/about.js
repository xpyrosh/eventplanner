import React from "react";
import Link from "next/link";

const about = () => {
    return (
        <div>
            <h1>About Page</h1>
            <p>This is a site to plan events</p>
            <p>V.1.0</p>
            <Link href="/">Home Page</Link>
        </div>
    );
};

export default about;
