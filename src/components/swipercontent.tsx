import React from "react";

interface Props {
  content: JSX.Element;
}

const Swipercontent = (props: Props) => {
  return (
    <div className="w-full h-screen flex pt-24 max-w-7xl mx-auto px-4 sm:px-6">
      {props.content}
    </div>
  );
};

export default Swipercontent;
