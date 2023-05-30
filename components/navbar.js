import React from 'react'
import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="nav p-3 border-bottom">
          <Link href="/" passHref>
            <h2 className="pointer">Ebenezer Don</h2>
          </Link>
          <Link href="/bio" passHref>
            <p className="ms-5 pointer lead my-auto">Bio</p>
          </Link>
          <Link href="/about" passHref>
            <p className="ms-5 pointer lead my-auto">About</p>
          </Link>
        </nav>
      )
}