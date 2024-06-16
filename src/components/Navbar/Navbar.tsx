// components/Navbar.tsx
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../public/Logo.svg'
import Search from './Search'
import Button from '@/components/Button'
import SideLogo from 'public/Sidebar.svg'

// const Navbar: React.FC<{openSidebar: () => void, openProfile: () => void}> = ({openSidebar, openProfile}) => {
const Navbar: React.FC<{openSidebar: () => void, toggleProfile : () => void}> = ({openSidebar, toggleProfile }) => {  
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect({
      appState: { targetUrl: window.location.pathname },
    })
  }

  return (
      <nav className="bg-white-800 pt-[16px] h-[86px]">
        <div className="w-[90%] mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/">
                <div className="flex-shrink-0">
                  <Image src={Logo} alt="Logo" width={95} height={95} />
                </div>
              </Link>
            </div>
            <div className="hidden md:flex flex-1 max-w-[600px] px-[30px]">
              <Search />
            </div>
            <div className="flex justify-center items-center">
              {isAuthenticated ? (
                <button type='button' className="profile_image" onClick={toggleProfile}>
                  {user?.picture ?
                    <Image
                      alt={user.name || "avatar"}
                      src={user.picture}
                      objectFit="cover"
                      width={46}
                      height={46}
                      className="rounded-full sm:hover:border-[6px] border-primary border-opacity-40"
                    />
                    :
                    <Image
                      alt={"No User's Avatar"}
                      src={"/default_avatar.jpg"}
                      objectFit="cover"
                      width={46}
                      height={46}
                      className="rounded-full sm:hover:border-[6px] border-primary border-opacity-40"
                    />
                  }
                </button>
              ) : (
                <div className="flex items-center">
                  <Button
                    title="Log In"
                    onClick={handleLogin}
                    className="text-black"
                  />
                  <Button
                    title="Sign Up"
                    onClick={handleLogin}
                    className="bg-primary text-white"
                  />
                </div>
              )}
              <button
                className="ml-[25px] text-gray-600 hover:text-gray-900 block sm:hidden"
                onClick={openSidebar}>
                <Image src={SideLogo} alt="Logo" width={30} height={30} />
              </button>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar