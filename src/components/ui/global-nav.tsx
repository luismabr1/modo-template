'use client';

import Link from 'next/link';
import { useState } from 'react';

import BarsIcon from './BarsIcon';
import LogoModo from './LogoModo';

function GlobalNav() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="sticky inset-x-0 top-0 z-50 grid h-16 w-full grid-cols-2 items-center justify-center bg-[hsla(0,0%,0%,1)] px-8 py-4 shadow-bottom backdrop-blur-sm backdrop-saturate-150">
      <div className="flex justify-start text-2xl text-white">
        <Link href="/">
          <LogoModo />
        </Link>
      </div>
      <div className={'grow gap-x-4 text-white lg:flex lg:justify-end'}>
        <div className="hidden sm:hidden md:hidden lg:flex">
          <Link className="ml-2 flex items-center gap-x-2 font-medium" href="/example">
            Somos MoDo
          </Link>
          <Link className="ml-2 flex items-center gap-x-2 font-medium" href="/example">
            Gastronomia
          </Link>
          <Link className="ml-2 flex items-center gap-x-2 font-medium" href="/example">
            Entretenimiento
          </Link>
          <Link className="ml-2 flex items-center gap-x-2 font-medium" href="/example">
            Agenda
          </Link>
          <button>
            <Link className="ml-2 flex items-center gap-x-2 font-medium" href="/example">
              Reserva
            </Link>
          </button>
        </div>
        <span onClick={() => setNavbarOpen(!navbarOpen)} className="justify-start invert">
          <BarsIcon />
        </span>
      </div>
      <div
        className={`absolute right-0 z-10 mt-3 w-56 origin-top-right flex-col divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in lg:hidden${
          navbarOpen ? ' flex' : ' hidden'
        }`}
      >
        <Link className="ml-2 flex items-center gap-x-2 font-medium" href="/example">
          Somos MoDo
        </Link>
        <Link className="ml-2 flex items-center gap-x-2 font-medium" href="/example">
          Gastronomia
        </Link>
        <Link className="ml-2 flex items-center gap-x-2 font-medium" href="/example">
          Entretenimiento
        </Link>
        <Link className="ml-2 flex items-center gap-x-2 font-medium" href="/example">
          Agenda
        </Link>
        <button>
          <Link className="ml-2 flex items-center gap-x-2 font-medium" href="/example">
            Reserva
          </Link>
        </button>
      </div>
    </nav>
  );
}

export default GlobalNav;
