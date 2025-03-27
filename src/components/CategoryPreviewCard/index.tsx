type PreviewCardProps = {
  key: string;
  category: CategoryType;
};

import { CategoryType } from "@/utils/types";
import Link from "next/link";
import StarToggle from "../StarToggle";

const CategoryPreviewCard = ({ category }: PreviewCardProps) => {
  return (
    <>
      <div
        key={category.idCategory}
        className="relative flex justify-around bg-[url(/doily-square-vec.svg)] bg-contain bg-no-repeat p-4 px-2 md:px-4 w-1/3 sm:w-1/4 md:w-1/4 lg:w-1/6 aspect-square shrink-0 align-center"
      >
        <Link href={`/category/${category.strCategory}`} className="flex">
          <div className="flex flex-col justify-center w-full">
            <div
              className="justify-self-end self-end m-0"
              onClick={(e) => e.preventDefault()}
            >
              <StarToggle item={category} />
            </div>

            <h2
              className={`font-princess-sofia text-lg sm:text-2xl text-center self-center justify-around mr-3 mb-5`}
            >
              {category.strCategory}
            </h2>
            <div className="flex justify-center items-center">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  alert(category.strCategoryDescription);
                }}
                className="flex justify-center items-center p-2 border border-1 border-pink-500 rounded-full aspect-square font-princess-sofia text-pink-500 text-center italic leading-none p"
              >
                i
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CategoryPreviewCard;
