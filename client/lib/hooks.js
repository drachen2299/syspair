// import { useEffect, useState, useAuth } from "react";
// import { findUserById, findUserByName } from "../services";

// export function useUserData() {
//   const [user, setUser] = useState({});
//   const [username, setUsername] = useState(null);
  

//   useEffect( () => {
//     if (user) {
//     findUserById(userId).then((fetchedUser) => setUser(fetchedUser))
  
// }


import { useEffect, useState } from "react";

function useDarkMode() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.theme : "dark"
  );
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return [colorTheme, setTheme];
}

export default useDarkMode;