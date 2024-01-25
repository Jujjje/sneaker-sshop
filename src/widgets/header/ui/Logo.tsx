import logo from "src/shared/assets/logo.png";

export function Logo() {
  return (
    <div className="flex gap-x-4">
      <img src={logo} className="w-[40px] h-[40px]" />
      <div className="">
        <p className="font-bold">REACT SNEAKERS</p>
        <p className="">Магазин лучших кроссовок</p>
      </div>
    </div>
  );
}
