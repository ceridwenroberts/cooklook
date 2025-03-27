import { Dispatch, SetStateAction } from "react";

export type UserType = {
  name: string;
  savedCategories: string[];
  savedRecipies: string[];
};

export type UserContextType = {
  user: UserType | null;
  setUser: Dispatch<SetStateAction<UserType | null>>;
};

export type MealsResonse = {
  meals: RecipeType[];
}

export type RecipeType = {
  strMeal: string;
  idMeal: string;
  strMealThumb?: string;
  strInstructions: string;
  strCategory?: string;
  [key: `strIngredient${number}`]: string;
  [key: `strMeasure${number}`]: string;
};

export type CategoryType = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb?: string;
  strCategoryDescription?: string;
};

export type FavoritesContextType = {
  favRecipes: RecipeType[];
  setFavRecipes: Dispatch<SetStateAction<RecipeType[]>>;
  favCategories: CategoryType[];
  setFavCategories: Dispatch<SetStateAction<CategoryType[]>>;
  categories: CategoryType[];
  setCategories: Dispatch<SetStateAction<CategoryType[]>>;
};