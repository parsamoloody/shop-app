import svgLogo from "../../../../public/assets/logo/svg/static_logo_techno_new.svg";
import Link from "next/link";
import Image from "next/image";

export default function Logo({ styling }: {styling: string})  {
  return (
    <Link
    href="#"
    className={`flex items-center space-x-3 rtl:space-x-reverse w-26 ${styling}`}
  >
    <Image src={svgLogo} width={100} height={100} alt="Techno Life" />
  </Link>
  );
}