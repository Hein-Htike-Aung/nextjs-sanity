import { NextPage } from "next";
import React from "react";

const NoResults: NextPage<{
  text: string;
}> = ({ text }) => {
  return <div>{text}</div>;
};

export default NoResults;
