/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import HeartToggle from "@/components/HeartToggle";
import StarToggle from "@/components/StarToggle";
import { fetchRecipeById } from "@/utils/api";
import { RecipeType } from "@/utils/types";
import Image from "next/image";
import { Fragment, use, useEffect, useState } from "react";

const RecipiePage = ({ params }: { params: Promise<{ id: string }> }) => {
  const [recipe, setRecipe] = useState<RecipeType | null>(null);
  const { id } = use(params);
  const [showInstr, setShowInstr] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showIngr, setShowIngr] = useState<boolean>(false);

  useEffect(() => {
    const fetchRecipe = async (id: string) => {
      try {
        if (id) {
          const data = await fetchRecipeById(id);
          if (data.meals === "Invalid ID") {
            console.error("Received 'Invalid ID' from API");
            return;
          }
          setRecipe(data.meals[0]);
        }
      } catch (err) {
        console.log("Error:", err);
      }
    };
    if (id) {
      fetchRecipe(id);
    } else {
      console.log("No ID found");
    }
  }, []);

  const instructions: string[] = recipe?.strInstructions?.split("\r\n") || [];
  console.log("recipe", recipe);

  const ingredientsList: {
    ingredient: string | null;
    measure: string | null;
  }[] = [];

  if (recipe)
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "")
        ingredientsList.push({ measure, ingredient });
    }

  return (
    <>
      {recipe && (
        <div className="flex flex-col self-center p-4 sm:p-10 py-14 max-w-4xl">
          <div className="gap-4 grid grid-cols-12">
            <div className="self-center col-span-6 sm:col-span-7 overflow-visible">
              <h1 className="mx-3 px-3 font-princess-sofia text-sky-900 text-4xl sm:text-6xl text-center">
                {recipe.strMeal}
              </h1>
            </div>
            <div className="relative col-span-6 sm:col-span-5 box-shadow-lg border border-b-[7px] border-black rounded-lg w-full max-w-[500px] aspect-square">
              {recipe.strMealThumb ?
                <Image
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  fill
                  className="rounded-lg object-cover"
                />
              : <p>No image available</p>}
            </div>
            <div className="flex justify-self-end gap-4 col-span-12">
              <HeartToggle
                item={recipe}
                className="justify-around items-center bg-white box-shadow-lg px-3 py-1 border border-b-[7px] border-black rounded-lg"
              />
              <div className="flex self-end gap-3 bg-white box-shadow-lg px-3 py-1 border border-b-[7px] border-black rounded-lg font-princess-sofia text-xl">
                <div key={recipe.strCategory}>{recipe.strCategory}</div>

                <StarToggle
                  item={{
                    idCategory: `${recipe.strCategory}`,
                    strCategory: `${recipe.strCategory}`,
                    strCategoryThumb: undefined,
                    strCategoryDescription: undefined,
                  }}
                />
              </div>
            </div>
            <div className="col-span-12 sm:col-span-7 bg-white box-shadow-lg p-5 pt-6 pb-7 border border-b-[7px] border-black rounded-lg text-sm">
              <button
                className="font-princess-sofia text-sky-900 text-2xl"
                onClick={() => setShowInstr((prev) => !prev)}
              >
                Instructions
              </button>

              {showInstr && (
                <div>
                  {instructions.map((instruction, index) => (
                    <div key={index} className="p-2 text-xs">
                      {instruction}
                    </div>
                  ))}
                </div>
              )}

              <ol className="ml-5 p-1 list-disc list-outside">
                {instructions.map((instruction, index) =>
                  instruction.trim() ?
                    <li className="p-2" key={index}>
                      {instruction}
                    </li>
                  : null
                )}
              </ol>
            </div>
            <div className="col-span-12 sm:col-span-5 bg-white box-shadow-lg px-5 pt-6 pb-7 border border-b-[7px] border-black rounded-lg">
              <button
                onClick={() => setShowIngr((prev) => !prev)}
                className="font-princess-sofia text-sky-900 text-2xl"
              >
                Ingredients
              </button>
              {
                // showIngr &&
                <div className="flex justify-center align-top">
                  <table className="justify-center table-auto">
                    <tbody className="">
                      {ingredientsList.map((item, index) => (
                        <tr key={index} className="text-sm align-top">
                          <td className="py-3 pr-4 text-right">
                            {item.measure}
                          </td>
                          <td className="font-princess-sofia text-xl align-middle">
                            {item.ingredient}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              }
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipiePage;
