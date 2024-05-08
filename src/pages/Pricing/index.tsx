import { Helmet } from "react-helmet";
import Breakdown from "./Breakdown";
import Options from "./Options";
import Questions from "./Questions";

export default function Pricing() {
  return (
    <>
      <Helmet>
        <title>Pricing - vSuS</title>
      </Helmet>
      <Options />
      <Breakdown />
      <Questions />
    </>
  );
}
