import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const CustomLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Header = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="error">
        <Toolbar>
          {props.showHomeBtn && (
            <Button variant="text">
              <CustomLink to="/">Home</CustomLink>
            </Button>
          )}
          <Typography
            variant="h4"
            component="h1"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
