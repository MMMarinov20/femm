import React from "react";
import { RiArrowDownSFill } from "react-icons/ri";
interface Props {
  text: string;
  link?: string;
  active: boolean;
}

const Link: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <div>
        <p className="font-Graphik text-2xl font-medium text-[#091157]">
          {props.text}
        </p>
        {props.active && (
          <p className="text-center flex justify-center items-center -mt-2">
            <RiArrowDownSFill className="text-center text-3xl text-[#091157]" />
          </p>
        )}
      </div>
    </React.Fragment>
  );
};

export default Link;
