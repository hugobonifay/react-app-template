import Accueil from "./Accueil";
import HomeIcon from "@material-ui/icons/Home";
import Page2 from "./Page2";
import AllInboxIcon from '@material-ui/icons/AllInbox';
import NoMatch from "./NoMatch";

export const routes = [
    { path: "/", component: Accueil, icon: HomeIcon, label: "Accueil", },
    { path: "/page2", component: Page2, icon: AllInboxIcon, label: "Page 2", },
    { path: "*", component: NoMatch, icon: null, label: null },
];