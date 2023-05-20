import { NextPage } from "next";
import { Jumbotron, Gallery } from "../components/Landing";

const IndexPage: NextPage = () => {
  return (
    <div className="px-8">
      <Jumbotron />
      <Gallery />
    </div>
  );
};

export default IndexPage;
