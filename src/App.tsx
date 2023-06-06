import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ComponentNavigation1 from "./pages/ComponentNavigation1";
import ComponentImportantFacts from "./pages/ComponentImportantFacts";
import ComponentRecipe from "./pages/ComponentRecipe";
import ComponentTroubleShooting from "./pages/ComponentTroubleShooting";
import ComponentWarning from "./pages/ComponentWarning";
import ComponentProcedure1 from "./pages/ComponentProcedure1";
import ComponentTabel from "./pages/ComponentTabel";
import ComponentExplanation1 from "./pages/ComponentExplanation1";
import ComponentOverview1 from "./pages/ComponentOverview1";
import ComponentLandingPage1 from "./pages/ComponentLandingPage1";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/component-navigation1":
        title = "";
        metaDescription = "";
        break;
      case "/component-important-facts":
        title = "";
        metaDescription = "";
        break;
      case "/component-recipe":
        title = "";
        metaDescription = "";
        break;
      case "/component-troubleshooting":
        title = "";
        metaDescription = "";
        break;
      case "/component-warning":
        title = "";
        metaDescription = "";
        break;
      case "/component-procedure1":
        title = "";
        metaDescription = "";
        break;
      case "/component-tabel":
        title = "";
        metaDescription = "";
        break;
      case "/component-explanation1":
        title = "";
        metaDescription = "";
        break;
      case "/component-overview1":
        title = "";
        metaDescription = "";
        break;
      case "/component-landing-page1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/component-navigation1" element={<ComponentNavigation1 />} />
      <Route
        path="/component-important-facts"
        element={<ComponentImportantFacts />}
      />
      <Route path="/component-recipe" element={<ComponentRecipe />} />
      <Route
        path="/component-troubleshooting"
        element={<ComponentTroubleShooting />}
      />
      <Route path="/component-warning" element={<ComponentWarning />} />
      <Route path="/component-procedure1" element={<ComponentProcedure1 />} />
      <Route path="/component-tabel" element={<ComponentTabel />} />
      <Route
        path="/component-explanation1"
        element={<ComponentExplanation1 />}
      />
      <Route path="/component-overview1" element={<ComponentOverview1 />} />
      <Route
        path="/component-landing-page1"
        element={<ComponentLandingPage1 />}
      />
    </Routes>
  );
}
export default App;
