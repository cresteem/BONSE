import { Metadata } from "next";
import Home from "../components/home";
import metainfo from "../meta-info";

export const metadata: Metadata = metainfo;

export default () => {
  return <Home />;
};
