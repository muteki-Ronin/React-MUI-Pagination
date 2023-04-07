// CORE
import { Routes, Route } from "react-router-dom";
// PAGES
import { HomePage } from "./Pages/HomePage";
import { About } from "./Pages/About";
import { NotFound } from "./Pages/NotFound";
// MUI
import { Container } from "@mui/material";

export const App = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
