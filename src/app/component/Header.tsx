"use client";
import React, { useState } from "react";
import { userInfo, headerItems } from "@/constants/constant";
import { LuMenu } from "react-icons/lu";
import { Link as ScrollLink } from "react-scroll";

const Header: React.FC = () => {
    const [showNav, setShowNav] = useState<boolean>(false);

    return (
        <header className="bg-white text-black p-5 justify-between w-full z-0 top-0 md:flex shadow-lg text-lg">
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold pacifico-regular">{userInfo.name}</h2>
                <LuMenu
                    className='md:hidden cursor-pointer'
                    onClick={() => setShowNav(prevState => !prevState)}
                />
            </div>

            {/* Navigation Links */}
            <div className={`md:flex md:items-center ${showNav ? "block md:block" : "hidden md:block"}`}>
                <div className="mt-2 md:mt-0 mr-9 flex items-center space-x-4 md:space-x-7">
                    {
                        Object.keys(headerItems).map(item => (
                            <ScrollLink
                                to={headerItems[item as keyof typeof headerItems].page}
                                key={headerItems[item as keyof typeof headerItems].label}
                                className='hidden md:block cursor-pointer font-semibold'
                                spy={true}
                                smooth={true}
                            >
                                {headerItems[item as keyof typeof headerItems].label}
                            </ScrollLink>
                        ))
                    }
                </div>
            </div>

            {showNav && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center md:hidden z-50">
                    <div className="flex flex-col space-y-4">
                        {
                            Object.keys(headerItems).map(item => (
                                <ScrollLink
                                    to={headerItems[item as keyof typeof headerItems].page}
                                    key={headerItems[item as keyof typeof headerItems].label}
                                    className='text-white text-lg font-semibold cursor-pointer hover:bg-gray-700 p-4 rounded'
                                    spy={true}
                                    smooth={true}
                                    onClick={() => setShowNav(false)}
                                >
                                    {headerItems[item as keyof typeof headerItems].label}
                                </ScrollLink>
                            ))
                        }
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;



