import React from "react";
import { Link } from "react-router-dom";
import { IFooterLink } from "../../../data/Interfaces/IFooterData";
interface Props {
  data: IFooterLink[];
}

const QuickLinkNav: React.FC<Props> = ({ data }) => {
  return (
    <React.Fragment>
      <div className="text-white flex flex-col gap-y-3 xl:gap-y-6 text-center lg:text-left">
        <h1 className="font-SolidenTrialBoldExpanded">Quick links</h1>
        {/* <Link to={"/"} preventScrollReset={false}>
          <h1 className="font-SolidenTrialRegular cursor-pointer">Home</h1>
        </Link>
        <Link to={"/rental/1/Loli's beach studio"} preventScrollReset={false}>
          <h1 className="font-SolidenTrialRegular cursor-pointer">
            Loli's beach studio
          </h1>
        </Link>
        <Link to={"/property"}>
          <h1 className="font-SolidenTrialRegular cursor-pointer">Rousse</h1>
        </Link>
        <Link to={"/about"}>
          <h1 className="font-SolidenTrialRegular cursor-pointer">About</h1>
        </Link> */}
        {data.map((link) => (
          <Link key={link.Url} to={link.Url}>
            <h1
              key={link.Title}
              className="font-SolidenTrialRegular cursor-pointer"
            >
              {link.Title}
            </h1>
          </Link>
        ))}
      </div>
    </React.Fragment>
  );
};

export default QuickLinkNav;
