import React, { ReactChild } from 'react';

import { useState,useContext, createContext  } from 'react';
import translations from './translations';

interface IProps{
    setlang: React.Dispatch<string>;
    t: (param:string) => string;
}

export const LangContext: React.Context<Object> = createContext({});

const Lang = ({ defaultLang, children}:{defaultLang:string, children:ReactChild[]}) => {
    const [lang, setLang] = useState(defaultLang);
    const hypertranslate = (text) =>  {
        if (lang === defaultLang) { return text; }
        else {
            return translations[lang][text];
        }
    }
    return (
        <LangContext.Provider value={{ setLang, t:hypertranslate }}>{children}</LangContext.Provider>
    )
}
export const useSetLang = () => {
    const { setLang } = useContext(LangContext);
    return setLang;
}

export default Lang;


// export const useUser = () => { // context를 리턴하는 함수를 export해서 useContext를 매번 쓸 필요가 없게 할 수도 있음(사실 별로 차이안남)
//     const { user } = useContext(Context);
    
//     return user;
// }
// export const useFns = () => {
//     const { fn } = useContext(Context);
//     return fn;
// }
// export const Context = React.createContext();

// const ContextProvider = ({ children }) => {
//     const [user, setUser] = useState({
//         name: 'inu',
//         loggedIn: false,
//     })
//     const logUserIn = () => setUser(prev => ({ ...prev, loggedIn: true}));
//     const logUserOut = ()=> setUser(prev=> ({...prev,  loggedIn:false}))
//     return (<Context.Provider value={{ user, fn: {logUserIn, logUserOut} }}>{children}</Context.Provider>)
// } //Provider 내부에 있는 children component가 value에 접근할 수 있다. 