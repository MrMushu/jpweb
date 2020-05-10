import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import SEO from "../components/seo";

const SecondPage = () => (
  <div>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
);

export default SecondPage;
