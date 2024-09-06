import { gql } from "../__generated__";
import React, { useState } from "react";
import Link from "next/link";
import {
  HeaderGeneralSettingsFragmentFragment,
  PrimaryMenuItemFragmentFragment,
} from "../__generated__/graphql";

type HeaderProps = {
  siteTitle: HeaderGeneralSettingsFragmentFragment["title"];
  siteDescription: HeaderGeneralSettingsFragmentFragment["description"];
  menuItems: PrimaryMenuItemFragmentFragment[];
  BrandLogo: string;
  CTAText: string;
  CTALink: string;
};

export default function Header({
  siteTitle,
  siteDescription,
  menuItems,
  BrandLogo,
  CTAText,
  CTALink,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle the menu state
  };

  return (
    <>
      {/* Header Section */}
      <header className="sticky top-0 z-50 px-[23px] py-[20px] flex flex-row items-center justify-between bg-primary">
        <Link href="/">
          <img src={BrandLogo} alt={siteDescription} className="" />
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          className="block md:hidden cursor-pointer mobile-ham-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className="hamburger-icon">&#9776;</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="desktop-menu-nav hidden md:flex flex-row items-center list-none gap-[43px] font-kallisto">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                className="text-white text-[16px] uppercase hover:text-secondary"
                href={item.uri}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link className="btn-circle" href={CTALink}>
              {CTAText}
            </Link>
          </li>
        </nav>
      </header>

      {/* Mobile Navigation (Visible when menu is open) */}
      {isMobileMenuOpen && (
        <nav className="mobile-menu-nav fixed top-0 left-0 right-0 bg-primary w-full py-4 shadow-md z-50">
          <ul className="flex flex-col items-center gap-[20px] font-kallisto">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link
                  className="text-white text-[16px] uppercase hover:text-secondary"
                  href={item.uri}
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="btn-circle" href={CTALink} onClick={() => setIsMobileMenuOpen(false)}>
                {CTAText}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

Header.fragments = {
  generalSettingsFragment: gql(`
    fragment HeaderGeneralSettingsFragment on GeneralSettings {
      title
      description
    }
  `),
  menuItemFragment: gql(`
    fragment PrimaryMenuItemFragment on MenuItem {
      id
      uri
      path
      label
      parentId
      cssClasses
      menu {
        node {
          name
        }
      }
    }
  `),
};
