import React from "react";
import { Link } from "react-router-dom";
interface Props {
  heading: string;
  subheading: string;
  alternative: string;
}

const Header: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <h1 className="font-SolidenTrialBoldExpanded text-2xl lg:text-3xl 3xl:text-5xl overflow-hidden">
        Welcome
      </h1>
      <Link to={props.alternative}>
        <h1
          dangerouslySetInnerHTML={{ __html: props.subheading }}
          className="font-SolidenTrialRegular text-xs 2xl:text-base cursor-ponter"
        ></h1>
      </Link>
    </React.Fragment>
  );
};

export default Header;
