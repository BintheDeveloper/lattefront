import React, {useState, useMemo, createContext} from 'react'
import Templates from './Templates'
import '../css/App.css'

// export const UserContext = createContext({
//   setLoggedIn: () => {},
// });

function App() {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const value = useMemo(() => ({setLoggedIn, loggedIn},[setLoggedIn, loggedIn]))

  return (
    <>
      <Templates/>
    </>
  );
}

export default App;
