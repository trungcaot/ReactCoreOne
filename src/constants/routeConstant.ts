// icons
import HomeIcon from "@material-ui/icons/Home";
import DashboardIcon from "@material-ui/icons/BarChartOutlined";
import CodeIcon from "@material-ui/icons/CodeOutlined";
import SettingsIcon from "@material-ui/icons/SettingsOutlined";
import GitHubIcon from "@material-ui/icons/GitHub";
import PrivateIcon from "@material-ui/icons/LockOutlined";
import PublicIcon from "@material-ui/icons/LockOpenOutlined";

// component pages
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import PrivateRepo from "../pages/GitHub/PrivateRepo";
import PublicRepo from "../pages/GitHub/PublicRepo";
import CodeEditor from "../pages/CodeEditor";
import Settings from "../pages/Setting";

import RouteItem from "../models/RouteItem";

export const routes: Array<RouteItem> = [
  {
    keyRoute: "router-home",
    title: "Home",
    tooltip: "Home",
    path: "/",
    enabled: true,
    component: Home,
    icon: HomeIcon,
    appendDivider: true
  },
  {
    keyRoute: "router-dashboard",
    title: "Dashboard",
    tooltip: "Dashboard",
    path: "/dashboard",
    enabled: true,
    component: Dashboard,
    icon: DashboardIcon
  },
  {
    keyRoute: "router-gh",
    title: "GitHub",
    tooltip: "GitHub",
    enabled: true,
    icon: GitHubIcon,
    subRoutes: [
      {
        keyRoute: "router-gh-private",
        title: "Private Repos",
        tooltip: "Private Repos",
        path: "/gh/private",
        enabled: true,
        component: PrivateRepo,
        icon: PrivateIcon
      },
      {
        keyRoute: "router-gh-public",
        title: "Public Repos",
        tooltip: "Public Repos",
        path: "/gh/public",
        enabled: false,
        component: PublicRepo,
        icon: PublicIcon
      }
    ]
  },
  {
    keyRoute: "router-code",
    title: "Code Editor",
    tooltip: "Code Editor",
    path: "/code-editor",
    enabled: true,
    component: CodeEditor,
    icon: CodeIcon,
    appendDivider: true
  },
  {
    keyRoute: "router-settings",
    title: "Settings",
    tooltip: "Settings",
    path: "/settings",
    enabled: true,
    component: Settings,
    icon: SettingsIcon
  }
];
