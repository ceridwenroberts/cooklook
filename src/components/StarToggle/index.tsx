type StarToggleProps<T> = {
  item: T,
  favorites: T[],
  onUpdateFavorites: (newFavorites: T[]) => void,
  updateFavoritesInContext: (newFavorites: T[]) => void
};

const StarToggle = <T,>({
  item,
  favorites,
  onUpdateFavorites,
  updateFavoritesInContext,
}: StarToggleProps<T>) => {
  const checkFav = (item: T): boolean => {
    return favorites.some((fav) => fav === item);
  };

  const toggleFavorite = (item: T) => {
    const isFavorite = checkFav(item);
    const newFavorites = isFavorite
      ? favorites.filter((fav) => fav !== item)
      : [...favorites, item];
    onUpdateFavorites(newFavorites);
    updateFavoritesInContext(newFavorites);
  };

  return (
    <button
      onClick={() => toggleFavorite(item)}
      className="mr-5 w-100"
      title="Toggle category to favorites"
      type="submit"
    >
      <svg width="20" height="20" viewBox="0 0 20 20">
        <path
          d="M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z"
          stroke="currentColor"
          fill={checkFav(item) ? "red" : "none"}
          fillRule="evenodd"
          strokeLinejoin="round"
        ></path>
      </svg>
    </button>
  );
};

export default StarToggle;
