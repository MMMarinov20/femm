import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-[#FF6241]"></div>
        </div>
        <div className="mt-4 text-[#FF6241] text-xl font-SolidenTrialBoldExpanded">
          Loading...
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoadingSpinner;
