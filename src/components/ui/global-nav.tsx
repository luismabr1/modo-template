import Link from 'next/link';

import LogoModo from './LogoModo';

function GlobalNav() {
  return (
    <nav className="sticky top-0 grid h-16 w-full grid-cols-2 items-center justify-center bg-[hsla(0,0%,0%,1)] px-8 py-4 shadow-bottom backdrop-blur-sm backdrop-saturate-150">
      <div className="flex justify-start text-2xl text-white">
        <Link href="/">
          <LogoModo />
        </Link>
      </div>

      <div className="flex justify-end gap-x-4 text-white">
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
