import React from "react";
import { google, slack, atlassian, dropbox, shopify } from "./import";
import "./brand.css";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={google} alt="google icon" />
      </div>
      <div>
        <img src={slack} alt="slack icon" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian icon" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox icon" />
      </div>
      <div>
        <img src={shopify} alt="shopify icon" />
      </div>
    </div>
  );
};

export default Brand;
