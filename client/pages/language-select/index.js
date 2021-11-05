import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { findUserByName, getAllLanguages } from '../../services';

export default function LanguageSelect() {
  const router = useRouter()
  const query = Object.keys(router.query);
  const username = [...query].shift();
  const [user, setUser] = useState({});
  const [languages, setLanguages] = useState([]);
  useEffect(async () => {
    await findUserByName(username).then((fetchedUser) => setUser(fetchedUser));

    await getAllLanguages().then((fetchedLang) => setLanguages(fetchedLang));
    // const results = languages.filter(language => user.language_id?.id === language?.id);
    
  }, []);

  console.log(user.language_id?.id)
  console.log([...languages])
  // call all languages from language
  // store user.language_id
  // if user.language_id in languages only return the other languages and store them in var
  // populate the remaining as option dropdowns 

  return (
    <div>
      <form>
        <select value='languages' id="languages">
          {languages.map((language) => {
            //console.log(language.name);
            <option value={language.id}>{language.name}</option>
          })}
        </select>
      </form>
    </div>
  );
};

LanguageSelect;