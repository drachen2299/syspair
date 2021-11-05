import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { findUserByName, getAllLanguages } from "../../services";

export default function LanguageSelect() {
  const router = useRouter();
  const query = Object.keys(router.query);
  const username = [...query].shift();
  const [user, setUser] = useState({});
  const [languages, setLanguages] = useState([]);
  const [language, setLanguage] = useState("");
  useEffect(async () => {
    await findUserByName(username).then((fetchedUser) => setUser(fetchedUser));

    await getAllLanguages().then((fetchedLang) => setLanguages(fetchedLang));
  }, []);
  const handleClick = (e) => {
    e.preventDefault();
    router.push({ pathname: "/results", query: { username, language } });
  };
  return (
    <div >
      <form className="grid grid-cols-3 grid-rows-2 w-[900px] mx-auto" onSubmit={handleClick}>
        {languages.map((language) => (
          <div>
            <img
              className="w-[200px] h-[200px]"
              value={language.name}
              src={language.image}
              alt={`${language.name} Programming Language`}
            />
            <input
              type="checkbox"
              value={language.name}
              onChange={(e) => setLanguage(e.target.value)}
              />
              
          </div>
        ))}
        <button type="submit">Compare</button>
      </form>
      {console.log(language)}
    </div>
  );
}

LanguageSelect;
