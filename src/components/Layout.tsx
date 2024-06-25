import React, { ReactNode } from 'react'
import SidebarModal from './Navbar/Sidebar'
import { usePathname } from 'next/navigation'
import Profile from '@/components/Navbar/Profile'

const Layout: React.FC<{
  children: ReactNode
  isOpen: boolean
  openSidebar: () => void
  closeSidebar: () => void
  isProfileOpen: boolean
  closeProfile: () => void
}> = ({ children, isOpen, isProfileOpen, openSidebar, closeSidebar, closeProfile }) => {
  const pathName = usePathname()
  const contailURL = pathName?.split('/')[1];
  return contailURL=== 'test' ? (
    <div>{children}</div>
  ) : (
    <>
      <main className="flex justify-start overflow-x-hidden">
        {/* Sidebar */}
        <SidebarModal
          isOpen={isOpen}
          openSidebar={openSidebar}
          closeSidebar={closeSidebar}
        />

        {/* Content */}
        <div className="relative flex-1 min-h-[1472px] sm:min-h-[1504px] overflow-x-hidden border-l-4">
          <Profile
            isProfileOpen={isProfileOpen}
            closeProfile={closeProfile}
          />
          <div className={`relative ${isProfileOpen && 'hidden sm:block'}`}>
            {children}
          </div>
        </div>
      </main>
    </>
  )
}

export default Layout
