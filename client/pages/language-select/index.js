import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function LanguageSelect() {
  const router = useRouter()
  const query = Object.keys(router.query);
  const username = [...query].shift();
  const [user, setUser] = useState({});
  const [languages, setLanguages] = useState([]);
  useEffect(() => {
    findUserByName(username).then((fetchedUser) => setUser(fetchedUser));
  }, []);

  useEffect(async () => {
    
  }, [])
  // call all languages from language
  // store user.language_id
  // if user.language_id in languages only return the other languages and store them in var
  // populate the remaining as option dropdowns 

  return (
    <div>
      {/* populate the languages that are not language_id as option dropdown onChange store the selected language as the value and then onSubmit add the selected language as an aditional router query */}
    </div>
  );
};

LanguageSelect;