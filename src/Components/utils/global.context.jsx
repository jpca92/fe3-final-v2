import { createContext, useContext ,useState, useEffect, useReducer} from "react";

const initialState =[]
const themeState =  ""
const ContextGlobal = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return action.payload ;
    default:
      return state;
  }
};

const themeReducer = (theme, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return action.payload;
    default:
      return new Error();
  }
}

export const ContextProvider = ({ children }) => {
  const [favs, setFavs] = useState([])
  const [state, dispatch] = useReducer(reducer, initialState)
  const [theme, setTheme] = useReducer(themeReducer, themeState)

  useEffect(() => {
    async function fetchDataAsync() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const info = await response.json();
      dispatch({ type: 'GET_DATA', payload: info });
    }
    fetchDataAsync();
  }, []);

  const handleTheme = () => {
    setTheme({ type: 'SET_THEME', payload: theme ==='dark' ? '' : 'dark' });
  };

  return (
    <ContextGlobal.Provider value={{favs, setFavs, state, dispatch, handleTheme,theme, themeState}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal);