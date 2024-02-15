import { useTranslation } from "react-i18next";
import flagEs from "../assets/spain2.png"
 import flagEn from "../assets/usa.png"

const languages = [
  { code: "en", flag: flagEn },
  { code: "es", flag: flagEs },
];

const LanguageSelector = () => {
    const {i18n} = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    };

  return (
    <div className="pt-5 mt-2 bg-main text-start">
     <div className="container">
     {languages.map((lng) => {
        return (
          <button
          key={lng.code}
          onClick={() => changeLanguage(lng.code)}
          className={`${
            lng.code === i18n.language ? "selected" : ""
          } custom-button p-3`}
        >
          {lng.lang} <img src={lng.flag} alt={lng.code} className="w-25" />
        </button>
        );
      })}
     </div>
    </div>
  );
};

export default LanguageSelector;
