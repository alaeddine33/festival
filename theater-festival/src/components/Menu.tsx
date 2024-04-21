import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EmailIcon from "@mui/icons-material/Email";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MicIcon from "@mui/icons-material/Mic";
import { useNavigate } from "react-router-dom";

const Menu: React.FC = (toggleDrawer: any) => {
  const navigate = useNavigate();
  const goTo = (path: string) => {
    navigate(path);
  };

  return (
    <Box
      sx={{ width: 250, backgroundColor: "#33336F", height: "100%" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem disablePadding onClick={() => goTo("/concert-poetique")}>
          <ListItemButton>
            <ListItemIcon>
              <MicIcon />
            </ListItemIcon>
            <ListItemText primary="Concert poétique" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding onClick={() => goTo("/presentation")}>
          <ListItemButton>
            <ListItemIcon>
              <TheaterComedyIcon />
            </ListItemIcon>
            <ListItemText primary="Présentation" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <EmojiEventsIcon />
            </ListItemIcon>
            <ListItemText primary="Prix Max 2011" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CalendarMonthIcon />
            </ListItemIcon>
            <ListItemText primary="Chronologie de la programmation" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary="Lectures et rencontres" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Menu;
