import { FC } from "react";

type HeaderProps = { className?: string };
const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <>
      <div className="fixed bg-amber-500 sm:bg-green-500 md:bg-blue-500 lg:bg-pink-500 xl:bg-red-500 m-auto p-3 border"></div>
      <div
        className={`flex justify-center py-7 text-sky-700 ${className}`}
      >
        <h1 className={`font-princess-sofia text-4xl`}> My Cooklook</h1>
      </div>
    </>
  );
};

export default Header;
