import React from "react";
import {UseItems} from "src/entities/product/api";
import {Sneaker} from "src/entities/product/ui";
import AddToCart from "src/features/sneaker/cart/ui/AddToCart";
import {Favorite} from "src/features/sneaker/favorite";
import {ISneaker} from "src/shared/api/queries";

const ProductList: React.FC = () => {
  const {data} = UseItems();

  const renderedSneakers = data?.data.map((i: ISneaker) => {
    return (
      <Sneaker
        key={i.id}
        {...i}
        HandleIsButton={AddToCart}
        HandleIsFavorite={Favorite}
      />
    );
  });
  return (
    <div className="">
      <p className="text-[32px] font-bold mb-10">Все кроссовки</p>
      <div className="flex flex-wrap justify-between gap-y-[54px] gap-x-[40px]">
        {renderedSneakers}
      </div>
    </div>
  );
};

export default ProductList;
