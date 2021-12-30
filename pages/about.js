import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const about = () => {
    return (
        <Layout title="About Event Planner">
            <h1>About Page</h1>
            <p>This is a site to plan events</p>
            <p>V.1.0</p>
            <Link href="/">Home Page</Link>
        </Layout>
    );
};

export default about;
