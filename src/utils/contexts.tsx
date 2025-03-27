"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import {
  UserType,
  UserContextType,
  FavoritesContextType,
  CategoryType,
} from "./types";
import { RecipeType } from "./types";

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

const FavoritesContext = createContext<FavoritesContextType | null>(null);
export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favRecipes, setFavRecipes] = useState<RecipeType[]>([]);
  const [favCategories, setFavCategories] = useState<CategoryType[]>(
    []
  );
  const [categories, setCategories] = useState<CategoryType[]>([]);
  return (
    <FavoritesContext.Provider
      value={{
        favRecipes,
        setFavRecipes,
        favCategories,
        setFavCategories,
        categories,
        setCategories,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritesContext = () => {
  return useContext(FavoritesContext);
};