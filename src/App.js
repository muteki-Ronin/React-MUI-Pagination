// CORE
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routers } from "./core/config";
// COMPONENTS
import { Layout } from "./components/layout/Layout";
// PAGES
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routers.home} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={routers.about} element={<AboutPage />} />
          <Route path={routers.contacts} element={<ContactPage />} />
          <Route path={routers.notfound} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
