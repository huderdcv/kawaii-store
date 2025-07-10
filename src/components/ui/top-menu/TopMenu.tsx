'use client';
import { useEffect, useRef, useState } from 'react';

import Link from 'next/link';
import { IoSearchOutline, IoCartOutline } from 'react-icons/io5';
import { Menu, X } from 'lucide-react'; // Íconos

import { titleFont } from '@/config/fonts';
import { useCartStore, useUIStore } from '@/store';

export const TopMenu = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);
  const totalItemsInCart = useCartStore((state) => state.getTotalItems());

  const [loaded, setLoaded] = useState(false);

  //menu desplegable
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Cierra el dropdown al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Función para cerrar el menú después de seleccionar
  const handleLinkClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="flex px-5 justify-between items-center w-full bg-[#FF7C00]">
      {/* Logo */}
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>
            Kawaii
          </span>
          <span>|Store</span>
        </Link>
      </div>

      {/* Center Menu */}
      <div className="hidden sm:block">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-[#ffaf63]"
          href="/franchise/pokemon"
        >
          Pokemon
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-[#ffaf63]"
          href="/franchise/dragonball"
        >
          Dragon Ball
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-[#ffaf63]"
          href="/franchise/bts"
        >
          BTS
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-[#ffaf63]"
          href="/franchise/none"
        >
          Sin franquicia
        </Link>
      </div>

      {/* Search, Cart, Menu */}
      <div className="flex items-center">
        {/* desplegable */}
        {/* Pantallas pequeñas */}
        <div className="sm:hidden relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`p-2 m-2 border-none rounded-md shadow-sm flex items-center gap-2 ${
              !isDropdownOpen ? 'bg-[#FF7C00]' : 'bg-[#ffaf63]'
            } hover:bg-[#ffaf63]`}
          >
            {isDropdownOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
            <span>Franquicias</span>
          </button>

          {isDropdownOpen && (
            <div className="absolute z-10 w-full bg-white shadow-md rounded-md mt-2">
              <Link
                onClick={handleLinkClick}
                className="block px-4 py-2 hover:bg-[#ffaf63]"
                href="/franchise/pokemon"
              >
                Pokemon
              </Link>
              <Link
                onClick={handleLinkClick}
                className="block px-4 py-2 hover:bg-[#ffaf63]"
                href="/franchise/dragonball"
              >
                Dragon Ball
              </Link>
              <Link
                onClick={handleLinkClick}
                className="block px-4 py-2 hover:bg-[#ffaf63]"
                href="/franchise/bts"
              >
                BTS
              </Link>
              <Link
                onClick={handleLinkClick}
                className="block px-4 py-2 hover:bg-[#ffaf63]"
                href="/franchise/none"
              >
                Sin franquicia
              </Link>
            </div>
          )}
        </div>
        <Link href="/search" className="mx-2">
          <IoSearchOutline className="w-5 h-5" />
        </Link>

        <Link
          href={totalItemsInCart === 0 && loaded ? '/empty' : '/cart'}
          className="mx-2"
        >
          <div className="relative">
            {loaded && totalItemsInCart > 0 && (
              <span className="fade-in absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-blue-700 text-white">
                {totalItemsInCart}
              </span>
            )}
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>

        <button
          onClick={openSideMenu}
          className="m-2 p-2 rounded-md transition-all hover:bg-[#ffaf63]"
        >
          Menú
        </button>
      </div>
    </nav>
  );
};
