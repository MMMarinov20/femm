import React, { useState } from "react";
import { INavbarData } from "../../../data/Interfaces/INavbarData";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useUser } from "../../../hooks/useUser";
import { handleLogout } from "../../../services/authService";
interface Props {
  color: string;
  Data: INavbarData;
}

const BurgerNavbar: React.FC<Props> = (props) => {
  const { user, updateUser } = useUser();
  const [showMenu, setShowMenu] = useState(false);
  // const [showRentals, setShowRentals] = useState(false);
  // const [showBuilds, setShowBuilds] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  // const toggleRentals = () => {
  //   setShowRentals(!showRentals);
  // };

  // const toggleBuilds = () => {
  //   setShowBuilds(!showBuilds);
  // };

  const handleLogoutSubmission = async () => {
    const response: any = await handleLogout();
    if (response) {
      window.location.href = "/";
      updateUser(false, null, "", "", "", []);
    }
  };

  return (
    <React.Fragment>
      <div
        className={`fixed top-0 right-0 h-full bg-opacity-95 bg-white z-50 ${
          showMenu ? "w-full" : "w-0"
        } transition-width duration-300 ease-in-out`}
      >
        <div
          className={`flex flex-col items-center gap-y-10 h-full px-4 ${
            showMenu ? "visible" : "hidden"
          }`}
        >
          <div className="flex items-center justify-between w-full h-[10vh]">
            <img
              loading="lazy"
              src="../../Logo.png"
              alt="logo"
              className="w-[25vw]"
            />
            <RxHamburgerMenu
              className="text-3xl cursor-pointer"
              onClick={handleMenu}
            />
          </div>

          <div className="flex flex-col justify-center items-center font-SolidenTrialRegular gap-y-5 min-[350px]:text-xl md:text-2xl">
            <Link to={"/"}>
              <h1 className="cursor-pointer">{props.Data.Home}</h1>
            </Link>
            <div className="">
              <Link to={"/rental/1/Loli's beach studio"}>
                <h1
                  className="cursor-pointer inline-flex items-center"
                  //onClick={toggleRentals}
                >
                  {/* Our Rentals <IoMdArrowDropdown /> */}
                  Loli's beach studio
                </h1>
              </Link>
              {/* {showRentals && (
                <div className="text-center text-sm min-[350px]:text-base md:text-lg text-gray-600 flex flex-col pt-2 gap-y-2">
                  <h1>Option 1</h1>
                  <h1>Option 2</h1>
                  <h1>Option 3</h1>
                </div>
              )} */}
            </div>
            <div className="">
              <Link to={"/property/urbannature"}>
                <h1
                  className="cursor-pointer inline-flex items-center"
                  // onClick={toggleBuilds}
                >
                  Urban Nature
                  {/* <IoMdArrowDropdown /> */}
                </h1>
              </Link>
              {/* {showBuilds && (
                <div className="text-center text-sm min-[350px]:text-base md:text-lg text-gray-600 flex flex-col pt-2 gap-y-2">
                  <h1>Option 1</h1>
                  <h1>Option 2</h1>
                  <h1>Option 3</h1>
                </div>
              )} */}
            </div>
            <Link to={"/about"}>
              <h1>{props.Data.About}</h1>
            </Link>
          </div>

          <div className="flex flex-col justify-center items-center gap-y-5">
            {!user.id && (
              <Link to={"/login"}>
                <div className="font-SolidenTrialExpanded border-[#FF6241] text-[#FF6241] border-[1px] w-[50vw] py-2 rounded-xl text-center min-[350px]:w-[55vw] md:w-[30vw] min-[350px]:text-lg transition-colors duration-300 hover:bg-[#FF6241] hover:text-white">
                  {props.Data.Login}
                </div>
              </Link>
            )}

            <Link to={user.id ? "/" : "/register"}>
              <div
                className="font-SolidenTrialExpanded bg-[#FF6241] text-white w-[50vw] py-2 rounded-xl text-center min-[350px]:w-[55vw] md:w-[30vw] min-[350px]:text-lg transition-colors duration-300 hover:bg-white hover:text-[#FF6241] border-[#FF6241] border-[1px]"
                onClick={
                  user.id
                    ? handleLogoutSubmission
                    : () => {
                        return;
                      }
                }
              >
                {user.id ? props.Data.Logout : props.Data.Signup}
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Nav */}
      <div
        className="w-full h-[10vh] flex items-center justify-between px-4 lg:hidden"
        style={{ backgroundColor: props.color }}
      >
        <div>
          <img
            loading="lazy"
            src="../../Logo.png"
            alt="logo"
            className="w-[25vw]"
          />
        </div>
        <div>
          <RxHamburgerMenu
            className="text-3xl cursor-pointer"
            onClick={handleMenu}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default BurgerNavbar;
