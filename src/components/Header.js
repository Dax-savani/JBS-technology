import React, { useState } from "react";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Collapse
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/images/Header/JBS-technology-logo-2 1.jpg";
import { useTheme } from "@emotion/react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Array of menu items
  const menuItems = [
    { label: "Home",to: "/" },
    { label: "About" ,to: "/about"},
    { label: "Portfolio" ,to: "/portfolio"},
    { label: "Services" ,to: "/services"},
    { label: "Careers" ,to: "/careers"},
    { label: "Contact Us" ,to: "/contact"},
  ];

  return (
    <>
      <AppBar
        sx={{
          position: "fixed",
          bgcolor: "background.paper",
          boxShadow: "0 2px 48px 0 rgba(0,0,0,.08)",
        }}
      >
        <Toolbar>
          <Container
            maxWidth="lg"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: "flex",
                flexGrow: 1,
                alignItems: "center",
              }}
            >
              <Box sx={{ height: "50px", width: "60px", padding: "3px" }}>
                <img src={logo} alt="Logo" />
              </Box>
            </Typography>

            {/* Mobile Menu Toggle */}
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                onClick={toggleMobileMenu}
                color="black"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Mobile Menu */}
            <Collapse
              in={mobileMenuOpen}
              timeout="auto"
              unmountOnExit
              sx={{
                width: "100%",
                position: "absolute",
                top: "100%",
                right: "0%",
                zIndex: "modal",
                boxShadow: "0 0px 8px rgba(0, 0, 0, 0.08)",
              }}
            >
              <Box
                sx={{
                  pb: 2,
                  pt: 1,
                  bgcolor: "background.paper",
                }}
              >
                {/* Mobile Menu Items */}
                {menuItems.map((item, index) => (
                  <NavLink key={index} to={item.to}>
                    <Typography
                      sx={{
                        my: 2,
                        color: theme.palette.black.main,
                        display: "block",
                        textDecoration: "none",
                        paddingLeft: "30px",
                        "&:hover": {
                          color: theme.palette.primary.main,
                        },
                      }}
                    >
                      {item.label}
                    </Typography>
                  </NavLink>
                ))}
              </Box>
            </Collapse>

            {/* Desktop Menu */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              {/* Desktop Menu Items */}
              {menuItems.map((item, index) => (
                <NavLink key={index} to={item.to}>
                  <Typography
                    sx={{
                      mx: 1.5,
                      color: theme.palette.black.main,
                      display: "block",
                      textDecoration: "none",
                      fontSize: "15px",
                      transition: "0.3s",
                      "&:hover": {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    {" "}
                    {item.label}
                  </Typography>
                </NavLink>
              ))}
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
