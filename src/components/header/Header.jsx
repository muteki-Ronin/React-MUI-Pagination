// CORE
import { NavLink, useLocation } from "react-router-dom";
import { routers } from "../../core/config";
// MUI
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography component="h1" variant="h6" sx={{ flexGrow: 1 }}>
          PAGINATION
        </Typography>
        <Box
          sx={{
            a: {
              "&:not(:last-child)": { marginRight: "10px" },
            },
          }}
        >
          <Button
            color={pathname === routers.home ? "warning" : "inherit"}
            component={NavLink}
            to={routers.home}
          >
            Home
          </Button>
          <Button
            color={pathname === routers.about ? "warning" : "inherit"}
            component={NavLink}
            to={routers.about}
          >
            About
          </Button>
          <Button
            color={pathname === routers.contacts ? "warning" : "inherit"}
            component={NavLink}
            to={routers.contacts}
          >
            Contacts
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
