import React from "react";
// import { Link } from "react-router-dom";
interface Props {
  heading: string;
  subheading: string;
}

const Header: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <h1 className="font-SolidenTrialBoldExpanded text-2xl lg:text-3xl 3xl:text-5xl overflow-hidden">
        Welcome
      </h1>
      <h1
        dangerouslySetInnerHTML={{ __html: props.subheading }}
        className="font-SolidenTrialRegular text-xs 2xl:text-base"
      >
        {/* {props.heading}
        <Link to={props.method == "Sign up" ? "../register" : "../login"}>
          <span className="text-[#FF6241] underline cursor-pointer">
            {props.method}
          </span>
        </Link> */}
      </h1>
    </React.Fragment>
  );
};

export default Header;
