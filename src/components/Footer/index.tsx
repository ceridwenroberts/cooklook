const Footer = () => {
  return (
    <div className="flex flex-col items-center py-14 font-outfit font-sx text-sky-900 text-sm">
      <p>
        {"\u00A9"} {new Date().getFullYear()} Ceridwen Roberts. All rights
        reserved.
      </p>
      <p>Created with</p>
      <p className="pt-2">
        <a
          href="https://www.themealdb.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-princess-sofia font-bold text-lg"
        >
          The MealDb
        </a>
      </p>
    </div>
  );
};

export default Footer;
