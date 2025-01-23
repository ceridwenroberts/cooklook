export type UserType = {
    name: string,
    category: string,
    savedRecipies: string[]
}
export type UserContextType = {
    user: UserType | null,
    setUser: (user:UserType) => void
}

export type RecipeType = {
    strMeal: string,
    idMeal: string,
    strMealThumb: string,
    srtArea?: string,
    strInstructions?: string
}

