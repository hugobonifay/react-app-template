import Accueil from "./Accueil";
import HomeIcon from "@material-ui/icons/Home";
import Page2 from "./Page2";
import NoMatch from "./Theme/Components/NoMatch";

export const titles = {
    accueil: "Accueil",
    page2: "Page 2",
};

export const routes = [
    { path: "/", component: Accueil, icon: HomeIcon, label: titles.accueil },
    { path: "/page2", component: Page2, icon: HomeIcon, label: titles.pages2 },
    { path: "*", component: NoMatch, icon: null, label: null },
];