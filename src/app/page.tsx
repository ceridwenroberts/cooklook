"use client";
import { useUserContext } from "@/utils/contexts";
import { MealsResonse, UserContextType } from "@/utils/types";
import { RecipeType } from "@/utils/types";
import { useEffect, useState } from "react";
import { fetchRandom } from "@/utils/api";
import RecipePreviewCard from "@/components/RecipePreviewCard";

export default function Home() {
  const { user } = useUserContext() as UserContextType;
  const [recipes, setRecipes] = useState<RecipeType[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchRandomRecipes = async () => {
      setIsLoading(true);

      let i: number = 0;
      let randomRecipes: RecipeType[] = [];

      while (i < 6) {
        try {
          if (user) {
            const data: MealsResonse = await fetchRandom();
            const randomRecipe: RecipeType = data.meals[0];
            const isDuplicate = randomRecipes.find(
              (recipe) => recipe.idMeal === randomRecipe.idMeal
            );

            if (!isDuplicate) {
              randomRecipes = [...randomRecipes, randomRecipe];
              setRecipes(randomRecipes);
              i++;
            }
          }
        } catch (err) {
          console.log("Error:", err);
        }
        if (randomRecipes.length === 6) setIsLoading(false);
      }
    };

    fetchRandomRecipes();
  }, []);

  return (
    <>
      {user && (
        <div className="flex flex-col flex-grow m-auto font-outfit text-center">
          <h1 className="py-14 font-princess-sofia text-sky-900 text-5xl sm:text-8xl text-center whitespace-pre-line">
            {`Welcome back,\n${user.name}!`}
          </h1>
          <div className="px-6 pb-8 md:pb-10">
            <p className="text-sky-900 sm:text-lg lg:text-lg">
              Can we interest you in one of our specials..?
            </p>
          </div>
          {isLoading ?
            <div className="flex place-content-center py-14 text-lg sm:text-2xl">
              <div className="font-princess-sofia">Loading specials...</div>
            </div>
          : <div className="flex flex-wrap justify-center m-auto mx:-mx-4 md:-mb-7 max-w-7xl">
              {recipes &&
                recipes.map((recipe: RecipeType) => (
                  <RecipePreviewCard
                    key={recipe.idMeal}
                    recipe={recipe}
                    recipes={recipes}
                  />
                ))}
            </div>
          }
        </div>
      )}
    </>
  );
}
