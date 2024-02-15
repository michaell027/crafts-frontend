import React from "react";

interface Props {
    children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <div>
      <h1>Posts Layout</h1>
      {children}
    </div>
  );
};

export default layout;