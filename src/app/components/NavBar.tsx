import React from "react";
import Image from "next/image";
import { FaRegMoon } from "react-icons/fa6";
import Link from "next/link";

// TODO: theme switching

export function Navbar() {
  return (
    <div className="col-span-12 !py-0 navbar">
      <div className="flex-none px-2 mx-2">
        <Link
          href="/"
          className="btn btn-ghost hover:bg-transparent no-underline text-xl p-0 join-item"
        >
          <Image
            src="/logo_icon.svg"
            alt="Dexter Logo"
            width={40}
            height={40}
            className="!my-0"
          />
          <span className="xs:invisible sm:visible uppercase">DeXter</span>
        </Link>
      </div>
      <div className="flex-1 px-2 mx-2">
        <div className="items-stretch hidden lg:flex">
          <Link
            className="btn btn-lg btn-ghost hover:!no-underline pt-2 border-t-0 border-x-0 border-b-4 border-transparent hover:border-accent hover:text-accent uppercase"
            href="/"
          >
            Trade
          </Link>
          <Link
            className="btn btn-lg btn-ghost hover:!no-underline pt-2 border-t-0 border-x-0 border-b-4 border-transparent hover:border-accent hover:text-accent uppercase"
            href="/markets"
          >
            Markets
          </Link>
        </div>
      </div>

      <div className="navbar-end">
        <div
          className="btn mx-2 border-none"
          style={{ height: "40px", minHeight: "40px" }}
        >
          <FaRegMoon className="h-6 w-6 text-secondary-content" />
        </div>

        <radix-connect-button></radix-connect-button>
      </div>
    </div>
  );
}
