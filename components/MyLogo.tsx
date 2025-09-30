import Image from "next/image";
import myLogo from "@/public/assets/icons/hanifputra.webp";

export const MyLogo = () => (
  <Image src={myLogo} alt="Hanif Putra Logo" width={25} height={25} priority />
);
