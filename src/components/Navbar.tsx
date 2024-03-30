import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import logo from "../../public/logo.webp";
import { pages } from "../utils/types";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const titleFontWeight = 600;
  const title = "Ecom Apparel";

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (count: number) => {
    navigate(pages[count].link);
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#ffffff",
        height: "10vh",
        color: "black",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xl">
        {/* When window is big */}
        <div className="justify-between items-center w-xl hidden sm:flex">
          <button onClick={() => navigate("/")} className="font-bold text-lg">
            {title}
          </button>

          <Box className="space-x-6 flex">
            {pages.map((page) => (
              <button
                key={page.name}
                className="my-2 block"
                onClick={() => navigate(page.link)}
              >
                {page.name}
              </button>
            ))}
          </Box>
        </div>
        {/* When window is small */}
        <Box className="flex flex-row justify-between sm:hidden ">
          <h1 className=" font-bold text-lg">{title}</h1>

          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page, idx) => (
              <div key={idx}>
                <MenuItem
                  key={page.name}
                  onClick={() => handleCloseNavMenu(idx)}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              </div>
            ))}
          </Menu>
        </Box>
      </Container>
    </AppBar>
  );
}
