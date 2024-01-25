interface IProps {
  icon: string;
  iconStyle: string;
}

import svgsArr from "src/shared/assets/iconsArr";

export function Icon({icon, iconStyle}: IProps) {
  return <img className={iconStyle} src={svgsArr[icon]} />;
}
