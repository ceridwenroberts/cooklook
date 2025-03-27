"use client";
import Image from "next/image";
import RecipePreviewCard from "@/components/RecipePreviewCard";
import { useFavoritesContext, useUserContext } from "@/utils/contexts";
import {
  CategoryType,
  FavoritesContextType,
  UserContextType,
} from "@/utils/types";
import Link from "next/link";

const Cooklook = () => {
  const { user } = useUserContext() as UserContextType;
  const { favCategories, setFavCategories, favRecipes } =
    useFavoritesContext() as FavoritesContextType;

  const removeClick = (category: CategoryType) => {
    setFavCategories((prev) =>
      prev.filter((fav) => fav.idCategory !== category.idCategory)
    );
  };

  return (
    <div className="flex flex-col self-center px-1 sm:px-2 container">
      <>
        <div className="flex flex-col items-center self-center gap-5 px-4 w-full max-w-7xl stretch">
          <h1 className="justify-self-center p-4 pt-14 font-princess-sofia text-5xl sm:text-7xl text-center">{`${user?.name}'s Cooklook`}</h1>
        </div>

        {!favCategories.length && !favRecipes.length && (
          <div className="mx-auto pt-9 w-full font-princess-sofia text-3xl text-center">
            <p className="pb-4">Nothing here yet...</p>
            <p className="text-xl">Go browsing and save some favorites!</p>
          </div>
        )}

        {(favCategories?.length > 0 || favRecipes?.length > 0) && (
          <div className="inline-flex items-center px-4 w-full text-xl tracking-wide">
            <svg width="20" height="20" viewBox="0 0 20 20">
              <path
                d="M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z"
                stroke="currentColor"
                fill="current"
                fillRule="evenodd"
                strokeLinejoin="round"
              ></path>
            </svg>
            <p className="pl-2 font-princess-sofia">Categories</p>
            <hr className="bg-gray-100 dark:bg-gray-700 my-3 md:my-10 ml-4 border-0 rounded-sm w-full h-0.5"></hr>
          </div>
        )}
        <div className="flex flex-wrap gap-2 sm:gap-4 px-3 py-2">
          {favCategories &&
            favCategories.map((category) => (
              <div
                key={category.idCategory}
                className="flex gap-3 bg-white box-shadow-lg px-3 py-1 border border-b-[7px] border-black rounded-lg font-princess-sofia text-base sm:text-xl"
              >
                <Link
                  href={`/category/${category.strCategory} `}
                  key={category.idCategory}
                >
                  {category.strCategory}
                </Link>

                <Image
                  src="/closeCross.svg"
                  alt="Remove favorite category"
                  height={10}
                  width={10}
                  onClick={() => removeClick(category)}
                  className="cursor-pointer"
                />
              </div>
            ))}
        </div>
      </>
      {(favCategories?.length > 0 || favRecipes?.length > 0) && (
        <div className="inline-flex items-center px-4 w-full text-xl tracking-wide">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M17 16C15.8 17.3235 12.5 20.5 12.5 20.5C12.5 20.5 9.2 17.3235 8 16C5.2 12.9118 4.5 11.7059 4.5 9.5C4.5 7.29412 6.1 5.5 8.5 5.5C10.5 5.5 11.7 6.82353 12.5 8.14706C13.3 6.82353 14.5 5.5 16.5 5.5C18.9 5.5 20.5 7.29412 20.5 9.5C20.5 11.7059 19.8 12.9118 17 16Z"
              fill="black" // Red fill when favorited
              stroke="currentColor" // Outline stroke color
              // strokeWidth="2" // Outline thickness
            />
          </svg>
          <p className="pl-2 font-princess-sofia">Recipes</p>
          <hr className="bg-gray-100 dark:bg-gray-700 my-3 md:my-10 ml-4 border-0 rounded-sm w-full h-0.5"></hr>
        </div>
      )}
      <div className="flex flex-wrap mx:-mx-4 my-4 md:-mb-7">
        {favRecipes &&
          favRecipes.map((recipe) => (
            <RecipePreviewCard
              key={recipe.idMeal}
              recipe={recipe}
              recipes={favRecipes}
            />
            //         <div //frame
            //   key={recipe.idMeal}
            //   className={` ${
            //     favRecipes && favRecipes.length === 1 && "flex-grow"
            //   } w-1/2 md:w-1/3 lg:w-1/4 pb-8 px-2 md:px-4 flex space-around overflow-hidden `}
            // >
            //   <div //card
            //     className="flex flex-col flex-grow bg-white box-shadow-lg border border-b-[7px] border-black rounded-lg w-[280px] h-full overflow-hidden hover:cursor-pointer"
            //   >
            //     <Link href={`/recipe/${recipe.idMeal}`}>
            //       <div //img frame
            //         className="relative grid bg-image aspect-square overflow-hidden"
            //       >
            //         {recipe.strMealThumb ? (
            //           <Image
            //             src={`${recipe.strMealThumb}`}
            //             width={350} //NOTE: Use preview or original size img?
            //             height={350}
            //             alt={recipe.strMeal}
            //           />
            //         ) : (
            //           <p>No image available</p>
            //         )}
            //         <Image
            //           src={"/doily_edged_strip-cropped.svg"}
            //           alt={"Doily border"}
            //           width={2687.462}
            //           height={50}
            //           className="bottom-0 absolute outline-none outline-solid max-w-1200 rotate-180 // //"
            //         />
            //       </div>
            //     </Link>
            //     <div //info-wrapper
            //       className="inline-flex place-content-between px-2 pt-2 pb-3 h-100"
            //     >
            //       <Link href={`/recipe/${recipe.idMeal}`}>
            //         <h2 className="pl-1 text-sm md:text-base lg:text-base text-ellipsis">
            //           {recipe.strMeal}
            //         </h2>
            //       </Link>

            //       <HeartToggle item={recipe} className=" " />
            //     </div>
            //   </div>
            // </div>
          ))}
      </div>
    </div>
  );
};
export default Cooklook;
