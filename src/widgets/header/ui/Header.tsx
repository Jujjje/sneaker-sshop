import {Icon} from "src/shared/ui/icons/Icon";
import {Logo} from "./Logo";
import {Link} from "react-router-dom";
import cn from "classnames";

export function Header() {
  const iconStyle = "w-[18px]";

  const icons = [
    {icon: "cart", iconStyle, txt: "1205 ₽"},
    {icon: "favorite", iconStyle, txt: "Закладки"},
    {icon: "profile", iconStyle, txt: "Профиль"},
  ];
  return (
    <>
      <header className="flex justify-between relative">
        <Logo />
        <ul className="flex  gap-x-8">
          {icons.map((i) => {
            return (
              <Link
                to={`/${i.icon}`}
                className="flex items-center gap-x-[10px]"
                key={i.icon}
              >
                <Icon icon={i.icon} iconStyle={i.iconStyle} />
                {/* <p className="text-[#5C5C5C]">{i.txt}</p> */}
                <p
                  className={cn("text-[#5C5C5C]", {
                    "font-medium": i.icon === "cart",
                  })}
                >
                  {i.txt}
                </p>
              </Link>
            );
          })}
        </ul>
      </header>
      <div className="absolute w-full h-[1px] border-[1px] border-[#EAEAEA] left-0 mt-10"></div>
    </>
  );
}
