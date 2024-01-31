import {Header} from "src/widgets/header";
import ProductList from "src/widgets/productList";

export function Catalog() {
  return (
    <div className="m-11">
      <Header />
      <div className="relative w-[100vw] h-[1px] border-[1px] border-[#EAEAEA] left-0 my-10 ml-[-44px]"></div>
      <ProductList />
    </div>
  );
}
