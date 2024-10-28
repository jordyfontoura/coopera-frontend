import Image from "next/image";
import logoImage from "@/assets/logo.png";

interface ILogoProps {
  className?: string;
}

export function Logo(props: ILogoProps) {
  return (
    <div className="flex items-center space-x-2 ">
      <div className={`relative min-h-12 aspect-square ${props.className}`}>
        <Image src={logoImage} alt="Logo" fill objectFit="contain" />
      </div>
      <div className="flex flex-col justify-center text-center">
        <h1 className="text-md font-bold uppercase leading-4 text-primary">Coopera</h1>
        <p className="text-sm uppercase leading-3 text-tertiary">Esportes</p>
      </div>
    </div>
  );
}
