"use client";

import CategoryPreviewCard from "@/components/CategoryPreviewCard";
// import StarToggle from "@/components/StarToggle";
import { useFavoritesContext } from "@/utils/contexts";
import { FavoritesContextType } from "@/utils/types";
// import Link from "next/link";

const Category = () => {
  const { categories } = useFavoritesContext() as FavoritesContextType;
  return (
    <>
      {/* <h1 className="font-princess-sofia text-sky-700">All Categories</h1> */}
      <ul className="flex flex-wrap place-content-evenly self-center gap-[1vw] sm:gap-1 md:gap-5 sm:m-5 md:mx-4 md:mb-7 max-w-7xl text-sky-700">
        {categories && categories.length > 0 ?
          categories.map((category) => (
            <CategoryPreviewCard
              key={category.idCategory}
              category={category}
            />
          ))
        : <p>Loading categories...</p>}
      </ul>
    </>
  );
};

export default Category;
