import { MdDashboard } from "react-icons/md";
import { MdWorkHistory } from "react-icons/md";
import { GrTask } from "react-icons/gr";
import { LuSettings } from "react-icons/lu";
import { GrArticle } from "react-icons/gr";

export const sidebarItems = [
  {
    name: "Dashboard",
    href: "/cms",
    icon: MdDashboard,
  },
  {
    name: "Experience",
    href: "/cms/experience",
    icon: MdWorkHistory,
  },
  {
    name: "Projects",
    href: "/cms/projects",
    icon: GrTask,
  },
  {
    name: "Settings",
    href: "/cms/settings",
    icon: LuSettings,
  },
  {
    name: "Writing",
    href: "/cms/writing",
    icon: GrArticle,
  },
];
