import React from "react";
import {UseItems} from "src/entities/product/api";
import {Sneaker} from "src/entities/product/ui";
import {ISneaker} from "src/shared/api/queries";

const ProductList: React.FC = () => {
  const {data} = UseItems();

  const renderedSneakers = data?.data.map((i: ISneaker) => {
    return <Sneaker key={i.id} {...i} />;
  });
  return (
    <div className="">
      <p className="text-[32px] font-bold">Все кроссовки</p>
      <div className="flex flex-wrap justify-between">{renderedSneakers}</div>
    </div>
  );
};

export default ProductList;
