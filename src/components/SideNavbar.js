import React, { useMemo, useState } from "react";
import ClassNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import user from "../assets/victoria.png";
import CollapsIcon from "./icons/CollapsIcon.js";
import ArticleIcon from "./icons/ArticleIcon.js";
import UserIcon from "./icons/UserIcon.js";
import VideosIcon from "./icons/VideosIcon.js";

const menuItems = [
  { id: 1, label: "Noticias", icon: ArticleIcon, link: "/admin/news" },
  { id: 2, label: "Personal", icon: UserIcon, link: "/admin/users" },
  { id: 3, label: "Diccionario", icon: VideosIcon, link: "/admin/dictionary" },
  { id: 4, label: "Juego", icon: VideosIcon, link: "/admin/game" },
];

function SideNavbar() {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const { pathname } = useLocation();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === pathname),
    [pathname]
  );

  const wrapperClasses = ClassNames(
    "h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col shadow-2xl",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = ClassNames(
    "p-4 rounded bg-light-lighter absolute",
    {
      ["left-[16rem]"]: !toggleCollapse,
      "rotate-180": toggleCollapse,
    }
  );
  const logo = ClassNames(
    " w-[3rem] h-[3rem] object-cover rounded-lg p-1 bg-light",
    {
      hidden: toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    return ClassNames(
      "flex items-center cursor-pointer hover:bg-secondary rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-light-lighter"]: activeMenu.id === menu.id,
      }
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4">
            <image src={user} className={logo} />
            <span
              className={ClassNames(
                "mt-2 text-lg font-medium text-text-light",
                {
                  hidden: toggleCollapse,
                }
              )}
            >
              Menu
            </span>
          </div>
          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <CollapsIcon />
            </button>
          )}
        </div>

        <div className="flex flex-col items-start mt-24">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            return (
              <div className={classes}>
                <Link
                  className="flex py-4 px-3 items-center w-full h-full"
                  to={menu.link}
                >
                  <div style={{ width: "2.5rem" }}>
                    <Icon />
                  </div>
                  {!toggleCollapse && (
                    <span
                      className={ClassNames(
                        "text-md font-medium text-text-light"
                      )}
                    >
                      {menu.label}
                    </span>
                  )}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default SideNavbar;
