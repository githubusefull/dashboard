'use client';
import React from 'react'
import styles from './Navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {signIn, signOut, getProviders} from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import {
    MdNotifications,
    MdOutlineChat,
    MdPublic,
    MdSearch,
  } from "react-icons/md";const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter()
    const isUserLogin = true;
    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);
    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        }
        setProviders();
    }, []) 
  return (
    <div className="p-3">
      <nav className="flex justify-between w-full pt-2 bg-bg rounded-[5px]">
        <Link href="/" className="flex  flex-center">
          <Image
            className=" ml-2 mb-2"
            width={40}
            height={40}
            src="/assets/images/dashboard.png"
          />
        </Link>

        {/* mobile */}

        <div className="sm:flex hidden">
          <div className="flex justify-between gap-8 pr-8 mt-[5px]">
            <p className={styles.title}>Feedback</p>
            <p className={styles.title}>Support</p>
            <Link href="/dashboard">
              <p className={styles.title}>Dashboard</p>
            </Link>
          </div>

          <div className={styles.search}>
            <MdSearch fontSize={23} />
            <input
              type="text"
              placeholder="Search..."
              className={styles.input}
            />
          </div>

          {isUserLogin ? (
            <div className="flex gap-3 md:gap-5">
              <Link href="/dashboard">
                <button type="button" onClick={signOut} className={styles.btn}>
                  Logout
                </button>
              </Link>
            </div>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="white_btn"
                  >
                    Sign In
                  </button>
                ))}
            </>
          )}
        </div>
        {/* mobile nav*/}
        <div className="sm:hidden flex relative">
          {isUserLogin ? (
            <div className="flex">
              <Image
                src="/assets/images/developer.png"
                width={34}
                height={30}
                className="mr-3 cursor-pointer mb-3"
                alt="profile"
                onClick={() => setToggleDropdown((prev) => !prev)}
              />
              {toggleDropdown && (
                <div className="dropdown">
                  <Link
                    className="dropdown_link"
                    href="/profile"
                    onClick={() => setToggleDropdown(false)}
                  >
                    My Profile
                  </Link>
                  <Link
                    className="dropdown_link"
                    href="/create-prompt"
                    onClick={() => setToggleDropdown(false)}
                  >
                    Create Prompt
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setToggleDropdown(false);
                      signOut();
                    }}
                    className="w-full white_btn"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="white_btn"
                  >
                    Sign In
                  </button>
                ))}
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar
