import React from 'react';

const NavBar = () => {
    const linkClass = 'text-black hover:bg-gray-300 rounded-full px-3 py-2';

    return (
        <nav className="bg-customGrey border-b">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex items-center">
                        {/* If you want to add a logo or brand name */}
                    </div>
                    <div className="text-black bg-white rounded-3xl h-10">
                        <div className="flex space-x-3">
                            <a href="#home" className={linkClass}>Home</a>
                            <a href="#about" className={linkClass}>About</a>
                            <a href="#projects" className={linkClass}>Projects</a>
                            <a href="#contact" className={linkClass}>Contact</a>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button className="bg-gray-200 border border-gray-400 text-gray-700 py-2 px-4 rounded-lg">CV</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
