import cn from "classnames";
import React from "react";
import {ISneaker} from "src/shared/api/queries";

interface ISneakerProps extends ISneaker {
  HandleIsButton: React.FC;
  HandleIsFavorite: React.FC;
}
const Sneaker: React.FC<ISneakerProps> = ({
  imageUrl,
  title,
  price,
  HandleIsButton,
  HandleIsFavorite,
}) => {
  const [isHovered, setisHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
      className={cn(
        "flex flex-col w-[210px] h-[260px] rounded-[40px] border border-[#F3F3F3] duration-1000 justify-between py-5 px-9",
        {"shadow-productShadow": isHovered}
      )}
    >
      <div className="w-[133px] h-[112px] relative">
        <HandleIsFavorite />
        <img className="w-[133px] h-[112px]" src={imageUrl} />
      </div>

      <p className="text-[14px]">{title}</p>
      <div className="w-[150px] flex flex-row justify-between items-center">
        <div className="">
          <p className="text-[#BDBDBD] text-[11px]">Цена: </p>
          <p className="font-bold">{price} руб.</p>
        </div>
        <HandleIsButton />
      </div>
    </div>
  );
};

export default Sneaker;
