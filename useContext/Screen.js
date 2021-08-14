import { useContext } from "react";
import { useFns, Context, ChangeLang, useSetLang, LangContext } from "./context";
import Header from "./Header";

export const Screen = ()=> {
    const { setLang, t } = useContext(LangContext); //그냥 useContext(LangContext);하면 됨
     
    return (
        <>
            <h1>{t("Hello!")}</h1>
            <button onClick={() => setLang('es')}>{t("Translate")}</button>
            </>
    );// setLang은 바로 쓰면 안되고 함수형으로 주어야함 setState를 바로 하면 안되는것
}
//redux로 할 수 있는건 useContext로도 할 수 있다.