import React from "react";

const Location: React.FC = () => {
  return (
    <React.Fragment>
      <div>
        <h1 className="font-SolidenTrialBoldExpanded text-3xl px-4 text-center md:text-5xl 2xl:text-6xl">
          Location
        </h1>
        <div className="w-screen py-20 px-4 lg:px-[10vw]">
          <iframe
            className="w-full h-[80vh] rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.358739554448!2d25.955529776538736!3d43.84839263978398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ae60c8806680dd%3A0xaf05c8592a97d2ee!2sRuse%20Center%2C%20ul.%20%22Angel%20Kanchev%22%2032%2C%207000%20Ruse!5e0!3m2!1sen!2sbg!4v1716491133343!5m2!1sen!2sbg"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Location;
