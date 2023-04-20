// CORE
import { Outlet } from "react-router-dom";
// COMPONENTS
import { Header } from "../header/Header";
// MUI
import { Container } from "@mui/material";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Outlet />
      </Container>
    </div>
  );
};
