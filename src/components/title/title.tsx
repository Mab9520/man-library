import React from "react";
import { TitleConfig } from "./title.types";

const Title: React.FC<TitleConfig> = ({text}: TitleConfig) => {
  return <h1 className="text-3xl text-slate-900">{text}</h1>
};

export default Title;