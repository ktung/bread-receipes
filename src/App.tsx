import { useTranslation } from "react-i18next";
import { LanguageSelector } from "./components/LanguageSelector/LanguageSelector";
import { ReceipePanel } from "./components/ReceipePanel/ReceipePanel";

export function App() {
  const { i18n } = useTranslation();
  i18n.on("languageChanged", (lng) => {
    document.documentElement.setAttribute("lang", lng);
  });

  return (
    <>
      <header className="mb-16">
        <LanguageSelector></LanguageSelector>
        <h1 className="my-2 text-center font-mono text-3xl">Bread Receipes</h1>
      </header>

      <ReceipePanel></ReceipePanel>
    </>
  );
}
