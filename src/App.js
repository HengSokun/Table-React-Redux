// import { useTranslation } from "react-i18next";
import "./App.css";
import SignIn from "./components/SignIn";
// import Page from './components/page';

function App() {
  // const { t, i18n } = useTranslation();

  // const handleLanguage = (lang) => {
  //   i18n.changeLanguage(lang);
  // };

  return (
    <div className="App">
      {/* <button
        onClick={() => handleLanguage("en")}
        className="p-3 bg-fuchsia-600 m-2 rounded"
      >
        English
      </button>
      <button
        onClick={() => handleLanguage("kh")}
        className="p-3 bg-orange-500  m-2 rounded"
      >
        Khmer
      </button>
      <div className="text-lg">
        <p>{t("sr.sr")}</p>
        <p>{t("sr.class")}</p>
      </div> */}
      <SignIn/>
      {/* <Page/> */}
    </div>
  );
}

export default App;
