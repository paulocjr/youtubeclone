import React from "react";
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  Divider,
  ListItemIcon,
  ListItemText,
  Box,
  Grid,
  Hidden,
  Switch,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: theme.palette.background.dark,
  },
  appBar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: "none",
  },
  icons: {
    paddingRight: theme.spacing(5),
  },
  grow: {
    flexGrow: 1,
  },
  menuIcon: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(5),
  },
  logo: {
    height: 20,
  },
  listItemText: {
    fontSize: 14,
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
}));

const videos = [
  {
    id: 1,
    title: "Lista 10 - By olx",
    channel: "Auto Super",
    views: "10 mi de visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpg",
    thumb: "/images/thumb1.png",
  },
  {
    id: 2,
    title: "Conheça os Participantes do Episódio 2",
    channel: "Master Cheff Brasil",
    views: "100 mi de visualizações",
    date: "há 2 dias",
    avatar: "/images/avatar.jpg",
    thumb: "/images/thumb2.png",
  },
  {
    id: 3,
    title: "Jogos que nunca saem do Hype",
    channel: "Maicon Kuster",
    views: "230 mi de visualizações",
    date: "há 1 dia",
    avatar: "/images/avatar.jpg",
    thumb: "/images/thumb3.png",
  },
  {
    id: 4,
    title: "LSD - Genius ft Sia, Diplo, Labrith",
    channel: "Sia",
    views: "215 mi de visualizações",
    date: "há 2 anos",
    avatar: "/images/avatar.jpg",
    thumb: "/images/thumb4.png",
  },
];

function Home( { darkMode, setDarkMode } ) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuIcon}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <img src={theme.palette.type === 'dark' ? '/images/branco.png' : '/images/preto.png'} alt='logo' className={classes.logo} />
          <div className={classes.grow}></div>
          <Switch value={darkMode} onChange={()=> setDarkMode(!darkMode)}  className={classes.icons}/>
          <IconButton
            className={classes.icons}
            aria-label="menu"
          >
            <VideoCallIcon />
          </IconButton>
          <IconButton
            className={classes.icons}
            aria-label="menu"
          >
            <AppsIcon />
          </IconButton>
          <IconButton
            className={classes.icons}
            aria-label="menu"
          >
            <MoreVertIcon />
          </IconButton>
          <Button
            startIcon={<AccountCircle />}
            variant="outlined"
            color="secondary"
          >
            Fazer Login
          </Button>
        </Toolbar>
      </AppBar>
      <Box display="flex">
        <Hidden mdDown>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar />
            <div className={classes.drawerContainer}>
              <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                  <ListItemText
                    primary={"Inicio"}
                    classes={{
                      primary: classes.listItemText,
                    }}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
                  <ListItemText
                    primary={"Em alta"}
                    classes={{
                      primary: classes.listItemText,
                    }}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                  <ListItemText
                    primary={"Inscrições"}
                    classes={{
                      primary: classes.listItemText,
                    }}
                  />
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
                  <ListItemText
                    primary={"Biblioteca"}
                    classes={{
                      primary: classes.listItemText,
                    }}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
                  <ListItemText
                    primary={"Histórico"}
                    classes={{
                      primary: classes.listItemText,
                    }}
                  />
                </ListItem>
              </List>
              <Divider />
              <Box p={7}>
                <Typography variant="body2">
                  Faça login para curtir vídeos, comentar e se inscrever.
                </Typography>
                <Box mt={2}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<AccountCircle />}
                  >
                    Fazer Login
                  </Button>
                </Box>
              </Box>
            </div>

            <Divider />
            <List>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                <ListItemText
                  primary={"Músicas"}
                  classes={{
                    primary: classes.listItemText,
                  }}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
                <ListItemText
                  primary={"Esportes"}
                  classes={{
                    primary: classes.listItemText,
                  }}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                <ListItemText
                  primary={"Jogos"}
                  classes={{
                    primary: classes.listItemText,
                  }}
                />
              </ListItem>
            </List>
          </Drawer>
        </Hidden>
        <Box p={8}>
          <Toolbar />
          <Typography
            variant="h6"
            color="textPrimary"
            style={{ fontWeight: 600 }}
          >
            Recomendados
          </Typography>

          <Grid container spacing={4}>
            {videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    style={{ width: "100%" }}
                    alt={item.title}
                    src={item.thumb}
                  />
                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant="body1"
                      color="textPrimary"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      display="block"
                      variant="body2"
                      color="textSecondary"
                    >
                      {item.channel}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {`${item.views} • ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Home;
