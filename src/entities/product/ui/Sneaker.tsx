import React from "react";
import {ISneaker} from "src/shared/api/queries";

const Sneaker: React.FC<ISneaker> = (props) => {
  return (
    <div className="w-[210px] h-[260px]">
      <img className="w-[133px] h-[112px]" src={props.imageUrl} />
    </div>
  );
};

export default Sneaker;
