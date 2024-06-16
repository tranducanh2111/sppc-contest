// components/Navbar.tsx
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../Button'
import ThinArrow from "public/thin-arrow.svg"
import ArrowRight from 'public/arrow-right.svg'
import LogOut from 'public/logout.svg'
import TestImg from 'public/Test.png'
import ArticleList from '@/components/Article/ArticleList'
import { ArticleProps } from '@/components/Article/Article'
import SkillTestBoxList from '@/components/SkillTestBoxList'
import bookData from '@/components/SampleData/bookData.json';

// Hide the user email partially
const formatEmail = (email : string) => {
  const atIndex = email.indexOf('@');
  if (atIndex >= 0) {
    const prefix = email.substring(0, atIndex);
    const domain = email.substring(atIndex);
    const maskedPrefix = '*'.repeat(prefix.length - 3) + prefix.slice(-4);
    return maskedPrefix + domain;
  }
  return email;
};

// Only display last 3 digit of the phone number
const formatPhoneNumber = (phoneNumber : string) => {
  if (phoneNumber && phoneNumber.length >= 3) {
    const lastThreeDigits = phoneNumber.slice(-3);
    const maskedDigits = '*'.repeat(phoneNumber.length - 3);
    return maskedDigits + lastThreeDigits;
  }
  return phoneNumber;
};

const NavBarProfile: React.FC<{isProfileOpen : boolean, closeProfile: () => void}> = ({
    isProfileOpen,
    closeProfile
  }) => {
  const { user, logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    })
  }

  const tests: ArticleProps[] = [
    {
      imgSrc: TestImg,
      description:
        'Possible charges Cardi B might face after throwing a microphone at an audience member',
      url: 'https://www.google.com/',
    },
    {
      imgSrc: TestImg,
      description:
        'Possible charges Cardi B might face after throwing a microphone at an audience member',
      url: 'https://www.google.com/',
    },
    {
      imgSrc: TestImg,
      description:
        'Possible charges Cardi B might face after throwing a microphone at an audience member',
      url: 'https://www.google.com/',
    },
  ]

  return (
    <>
        <div
            className={`absolute inset-0 z-20 ${
            isProfileOpen ? 'block bg-black opacity-50' : 'hidden'
            }`}
            onClick={closeProfile}></div>

        <div className={isProfileOpen ? 'absolute right-0 w-full sm:w-[517px] bg-[#ECECEC] px-[20px] py-[40px] sm:px-[30px] space-y-[40px] z-20 sm:rounded-[12px]' : 'hidden'}>
            <div className='flex flex-col items-center bg-[#FFFFFF] w-full h-[184px] rounded-[8px] py-[12px] gap-[8px]'>
            {user?.picture ?
                <Image
                    alt={user.name || "avatar"}
                    src={user.picture}
                    objectFit="cover"
                    width={130}
                    height={130}
                    className="rounded-full border-[#FF5A1A] border-opacity-40"
                />
                :
                <Image
                alt={"No User's Avatar"}
                src={"/default_avatar.jpg"}
                objectFit="cover"
                width={130}
                height={130}
                className="rounded-full border-[#FF5A1A] border-opacity-40"
                />
            }
            <Link href={"#"} className='text-body text-[#FF5A1A]'>
                Change Avatar
            </Link>
            </div>

            <div className='bg-[#FFFFFF] py-[12px] px-[24px] rounded-[8px]'>
            <section className='flex justify-between py-[12px]'>
                <p>Name</p>
                <p>{user?.name || "John Doe"}</p>
            </section>
            <section className='flex justify-between py-[12px]'>
                <p>Email</p>
                <p>{formatEmail(user?.email || '*******gc.pr@gmail.com')}</p>
            </section>
            <section className='flex justify-between py-[12px]'>
                <p>Phone Number</p>
                <p>{formatPhoneNumber(user?.phone_number || '*******021')}</p>
            </section>
            </div>
            
            <div className='bg-[#FFFFFF] py-[12px] px-[24px] rounded-[8px] space-y-[40px]'>
            <div className='flex justify-between items-center'>
                <h2 className='text-[30px] font-[500] leading-[32px]'>News</h2>
                <Link href={"#"} className="flex items-center max-w-content h-[30px] text-primary px-1 py-[4px] rounded-[2px] ml-auto">
                    <Button className='font-medium' icon={ThinArrow} title='View more'/>
                </Link>
            </div>
            <div className='w-full overflow-x-auto hide-scrollbar'>
                <ArticleList articles={tests} />
            </div>
            </div>

            <div className='bg-[#FFFFFF] py-[12px] px-[24px] rounded-[8px] space-y-[40px]'>
            <h2 className='text-[30px] font-[500] leading-[32px]'>Recent test result</h2>
                {bookData.books[0].units[0].practice_tests.slice(0,2).map((test, index) => (
                    <SkillTestBoxList key={index} testData={test} />
                ))}
            </div>

            <div className='bg-[#FFFFFF] py-[12px] px-[24px] rounded-[8px] space-y-[40px]'>
            <div className='flex justify-between items-center'>
                <h2 className='text-[30px] font-[500] leading-[32px]'>Recent test</h2>
                <Link href={"#"} className="flex items-center max-w-content h-[30px] text-primary px-1 py-[4px] rounded-[2px] ml-auto">
                    <Button className='font-medium' icon={ThinArrow} title='View more'/>
                </Link>
            </div>
            <div className='overflow-x-auto hide-scrollbar'>
                <div className='w-[633px] grid grid-cols-3 gap-[24px]'>
                {bookData.books.slice(0,3).map((book, index) => (
                    <div className='flex justify-between space-x-[16px]'>
                    <figure className='h-[70px] w-[70px] rounded-[8px]'>
                        <Image
                        alt={"book image"}
                        src={"/default_avatar.jpg"}
                        objectFit="cover"
                        width={70}
                        height={70}
                        className='rounded-[8px]'
                        />
                    </figure>
                    <div>
                        <h5 className='text-h5 line-clamp-2'>{book.book_name}</h5>
                        <Link href={`/book/${book.bookURL}`}>
                        <button className='flex items-center justify-center space-x-[10px] py-[4px]'>
                            <span className='max-w-content text-body text-[#FF5A1A] font-bold'>Continue test</span>
                            <Image
                            src={ArrowRight}
                            alt="Logo"
                            width={14}
                            height={14}
                            />
                        </button>
                        </Link>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            </div>

            <Button title='Log out' icon={LogOut} className='bg-primary w-full text-white text-h5 justify-center' onClick={handleLogout}/>
        </div>
    </>
    )
}

export default NavBarProfile
