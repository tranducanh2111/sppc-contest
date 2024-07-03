// components/Navbar.tsx
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button";
import ThinArrow from "public/thin-arrow.svg";
// import ArrowRight from 'public/arrow-right.svg'
import LogOut from "public/logout.svg";

// Hide the user email partially
const formatEmail = (email: string) => {
  const atIndex = email.indexOf("@");
  if (atIndex >= 0) {
    const prefix = email.substring(0, atIndex);
    const domain = email.substring(atIndex);
    const maskedPrefix = "*".repeat(prefix.length - 3) + prefix.slice(-4);
    return maskedPrefix + domain;
  }
  return email;
};

// Only display last 3 digit of the phone number
const formatPhoneNumber = (phoneNumber: string) => {
  if (phoneNumber && phoneNumber.length >= 3) {
    const lastThreeDigits = phoneNumber.slice(-3);
    const maskedDigits = "*".repeat(phoneNumber.length - 3);
    return maskedDigits + lastThreeDigits;
  }
  return phoneNumber;
};

const NavBarProfile: React.FC<{
  isProfileOpen: boolean;
  closeProfile: () => void;
}> = ({ isProfileOpen, closeProfile }) => {
  const { user, logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <section>
      <div
        className={`absolute inset-0 z-20 ${
          isProfileOpen ? "block bg-black opacity-50" : "hidden"
        }`}
        onClick={closeProfile}
      ></div>

      <div
        className={
          isProfileOpen
            ? "absolute right-0 w-full sm:w-[517px] bg-[#ECECEC] px-[20px] py-[40px] sm:px-[30px] space-y-[40px] z-[1010] sm:rounded-[12px]"
            : "hidden"
        }
      >
        <div className="flex flex-col items-center bg-[#FFFFFF] w-full h-[184px] rounded-[8px] py-[12px] gap-[8px]">
          {user?.picture ? (
            <Image
              alt={user.name || "avatar"}
              src={user.picture}
              width={130}
              height={130}
              className="rounded-full border-[#FF5A1A] border-opacity-40 object-cover"
            />
          ) : (
            <Image
              alt={"No User's Avatar"}
              src={"/default_avatar.jpg"}
              width={130}
              height={130}
              className="rounded-full border-[#FF5A1A] border-opacity-40 object-cover"
            />
          )}
          <Link href={"#"} className="text-body text-primary">
            Change Avatar
          </Link>
        </div>

        <div className="bg-[#FFFFFF] py-[12px] px-[24px] rounded-[8px]">
          <section className="flex justify-between py-[12px]">
            <p>Name</p>
            <p>{user?.name || "John Doe"}</p>
          </section>
          <section className="flex justify-between py-[12px]">
            <p>Email</p>
            <p>{formatEmail(user?.email || "*******gc.pr@gmail.com")}</p>
          </section>
          <section className="flex justify-between py-[12px]">
            <p>Phone Number</p>
            <p>{formatPhoneNumber(user?.phone_number || "*******021")}</p>
          </section>
        </div>

        <div className="bg-[#FFFFFF] py-[12px] px-[24px] rounded-[8px] space-y-[40px]">
          <div className="flex justify-between items-center">
            <h2 className="text-[30px] font-[500] leading-[32px]">News</h2>
            <Link
              href={"#"}
              className="flex items-center max-w-content h-[30px] text-primary px-1 py-[4px] rounded-[2px] ml-auto"
            >
              <Button
                className="font-medium"
                icon={ThinArrow}
                title="View more"
              />
            </Link>
          </div>
        </div>
        <Button
          title="Log out"
          icon={LogOut}
          className="bg-primary w-full text-white text-h5 justify-center"
          onClick={handleLogout}
        />
      </div>
    </section>
  );
};

export default NavBarProfile;
