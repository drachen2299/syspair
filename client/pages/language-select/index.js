import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function LanguageSelect() {
  const router = useRouter()
  const query = Object.keys(router.query);
  const username = [...query].shift();
  const [user, setUser] = useState({});
  useEffect(() => {
    findUserByName(username).then((fetchedUser) => setUser(fetchedUser));
  }, []);
  
  return (
    <div>
      
    </div>
  );
};

LanguageSelect;