import { useContext, useEffect, useState } from "react";
import { findUserByName } from "../services";
import { userContext } from "./context";

export function useUserData() {
  const { usersName } = useContext(userContext);
  const [username, setUsername] = useState(null);
  const [usersFullData, setUsersFullData] = useState({});

  useEffect( async () => {
    if (username === null) {    
          await findUserByName(usersName)
          .then((fetchedUser) => setUserData(fetchedUser));
          setSurveyUserName(userData.username);
          setAgeRange(userData.age_range);
          setIndustry(userData.industry);
          setLanguageId(userData.language_id?.id.toString());
          setTypeOfDev(userData.type_of_dev);
        } else {
          return null
        }
      }, []);
  
}