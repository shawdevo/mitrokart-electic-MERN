import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To MitroKart",
  description: "We sell the best products for cheap",
  keywords:
    "electronics, fashion, buy electronics ,buy clothes, cheap electroincs , cheap clothes",
};

export default Meta;
