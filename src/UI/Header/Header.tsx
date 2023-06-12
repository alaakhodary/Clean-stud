import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./style.css";

import Button from "../../components/Button";

import Taps from "../Modal/components/Taps";

import Modal from "../Modal/Modal";

import logo from "../../assest/logo.svg";

import useAuth from "../../hooks/useAuth";

interface NavigationLink {
  id: number;
  label: string;
  href: string;
}

const Header: React.FC = () => {
  const { logout, token } = useAuth();
  const [showContent, setShowContent] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeItemId, setActiveItem] = useState<number | null>(null);

  const handleActive = (itemId: number) => {
    setActiveItem(itemId === activeItemId ? itemId : null);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const toggleContent = () => {
    setShowContent((prevShowContent) => !prevShowContent);
  };

  const navigate = useNavigate();
  const goToBookNow = () => {
    navigate("/book-now");
  };

  const navigationLinks: NavigationLink[] = [
    { id: 1, label: "الرئيسية", href: "/" },
    { id: 2, label: "الخدمات", href: "/service" },
    { id: 3, label: "من نحن", href: "/about" },
    { id: 4, label: "اتصل بنا", href: "/contact-us" },
  ];

  return (
    <header className="text-base text-black">
      <div className="flex items-center justify-between px-2 py-2">
        <div className="flex items-center justify-between max-lg:w-full">
          <div>
            <img src={logo} alt="imgLogo" />
          </div>
          <button
            className="block focus:outline-none lg:hidden"
            onClick={toggleContent}
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d={
                  showContent
                    ? "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                    : "M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
                }
              />
            </svg>
          </button>
        </div>
        <div>
          <nav className="hidden items-center text-xl font-semibold lg:flex">
            <ul className="item flex">
              {navigationLinks.map((item) => (
                <li className="mr-16" key={item.id}>
                  <NavLink
                    to={item.href}
                    className={`${activeItemId === item.id ? "active" : ""}`}
                    onClick={() => handleActive(item.id)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="hidden font-bold lg:block">
          <Button
            text={!token ? "دخول" : "خروج"}
            variant="primary"
            onClick={async () => {
              if (token) {
                await logout();
              } else {
                openModal();
              }
            }}
          />
          <Button
            text="احجز الآن"
            variant="secondary"
            onClick={() => goToBookNow()}
          />
          <Modal isOpen={isOpen} onClose={closeModal}>
            <div className="flex items-center">
              <button onClick={closeModal} className="text-[#CCD2E3]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-8 w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <h2 className="mr-4 text-[18px] font-semibold">
                من فضلك قم بتسجيل الدخول للاستمرار
              </h2>
            </div>
            <Taps />
          </Modal>
        </div>
      </div>
      {showContent && (
        <div className="px-4 py-2 lg:hidden">
          <ul className="item flex flex-col text-center text-xl font-semibold">
            {navigationLinks.map((item) => (
              <li className="border-b-2 p-2 lg:border-none" key={item.id}>
                <NavLink
                  to={item.href}
                  className={`${activeItemId === item.id ? "active" : ""}`}
                  onClick={() => handleActive(item.id)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <div className="flex w-full gap-3 border-b-2 p-2 font-bold">
              <div className="header m-auto">
                {!token ? (
                  <Button text="دخول" variant="primary" onClick={openModal} />
                ) : (
                  <Button text="خروج" variant="primary" onClick={logout} />
                )}
                <Button
                  text="احجز الآن"
                  variant="secondary"
                  onClick={() => goToBookNow()}
                />
                <Modal isOpen={isOpen} onClose={closeModal}>
                  <div className="flex items-center">
                    <button onClick={closeModal} className="text-[#CCD2E3]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-8 w-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                    <h2 className="mr-5 text-[1.1rem]">
                      من فضلك قم بتسجيل الدخول للاستمرار
                    </h2>
                  </div>
                  <Taps />
                </Modal>
              </div>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
