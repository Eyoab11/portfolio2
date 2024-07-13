import React from 'react';

const Projects = () => {
  return (
    <>
      <section className="px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">React and Tailwind CSS</div>
                  <h3 className="text-xl font-bold">Personal Portfolio</h3>
                </div>
                <div className="mb-5">
                  My first project, a personal portfolio, marks the beginning of my web development journey. Initially, I created the portfolio using only Tailwind CSS, which helped me understand the basics of styling and responsive design. As I advanced in my learning, I discovered React and decided to rebuild my portfolio using React alongside Tailwind CSS. This allowed me to integrate more dynamic features and state management into my project, enhancing both its functionality and user experience.
                </div>
                <h3 className="text-indigo-500 mb-2">Individually Done</h3>
                <div className="border border-gray-100 mb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Fully Done
                  </div>
                  <a
                    href="https://github.com/Eyoab11/portfolio"
                    className="h-[36px] bg-black hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    GitHub Link
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">Tailwind, MySQL, NestJS</div>
                  <h3 className="text-xl font-bold">Fitness Website</h3>
                </div>
                <div className="mb-5">
                  Anbessa Fit is a comprehensive fitness website developed collaboratively with a team, showcasing our collective skills in modern web development technologies. Initially built with Tailwind CSS for its sleek and responsive design, the project evolved as we incorporated MySQL for robust data management and NestJS for a scalable and efficient backend. Through this project, we were able to create a dynamic platform that offers users personalized fitness plans and tracking features, reflecting our ability to integrate front-end and back-end technologies seamlessly.
                </div>
                <h3 className="text-indigo-500 mb-2">With Team</h3>
                <div className="border border-gray-100 mb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Almost Done
                  </div>
                  <a
                    href="https://github.com/Eyoab11/AnbessaFit"
                    className="h-[36px] bg-black hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm sm:mb-10"
                  >
                    GitHub Link
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">Flutter</div>
                  <h3 className="text-xl font-bold">Fitness Mobile App</h3>
                </div>
                <div className="mb-5">
                  In a team project, we developed a fitness mobile application using Flutter. This app offers a seamless user experience across different devices thanks to Flutter's cross-platform capabilities. Our team focused on creating a comprehensive fitness tool that includes features such as workout tracking, personalized exercise plans, and progress monitoring. This project highlights our collaborative efforts in mobile development and our ability to leverage Flutter to build a functional and aesthetically pleasing application.
                </div>
                <h3 className="text-indigo-500 mb-2">With Team</h3>
                <div className="border border-gray-100 mb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Fully Done
                  </div>
                  <a
                    href="https://github.com/Eyoab11/flutter-2024-AnbessaFit"
                    className="h-[36px] bg-black hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    GitHub Link
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">React, Tailwind, AI Integration</div>
                  <h3 className="text-xl font-bold">Tic-Tac-Toe</h3>
                </div>
                <div className="mb-5">
                  I developed an advanced Tic-Tac-Toe game utilizing React, Tailwind CSS, and AI integration. This game features a sleek, responsive design achieved with Tailwind CSS and dynamic user interactions powered by React. To create a challenging AI opponent, I implemented the Minimax algorithm, allowing the computer to make optimal moves. This project demonstrates my ability to blend front-end technologies with sophisticated algorithms, resulting in an engaging and intelligent game experience.
                </div>
                <h3 className="text-indigo-500 mb-2">Individually Done</h3>
                <div className="border border-gray-100 mb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Fully Done
                  </div>
                  <a
                    href="https://github.com/Eyoab11/PRODIGY_WD_03"
                    className="h-[36px] bg-black hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm sm:mb-10"
                  >
                    GitHub Link
                  </a>
                  
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">React, Tailwind, API Integration</div>
                  <h3 className="text-xl font-bold">Weather App</h3>
                </div>
                <div className="mb-5">
                  I developed a weather application using React, Tailwind CSS, and API integration. This app features a clean, responsive design achieved with Tailwind CSS and dynamic user interactions powered by React. By integrating a weather API, I was able to provide real-time weather data, allowing users to get accurate and up-to-date weather information for any location. This project showcases my ability to effectively combine front-end technologies with external data sources, resulting in a functional and user-friendly application.
                </div>
                <h3 className="text-indigo-500 mb-2">Individually Done</h3>
                <div className="border border-gray-100 mb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Fully Done
                  </div>
                  <a
                    href="https://github.com/Eyoab11/PRODIGY_WD_05"
                    className="h-[36px] bg-black hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm sm:mb-10"
                  >
                    GitHub Link
                  </a>
                  
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">HTML, CSS, JavaScript</div>
                  <h3 className="text-xl font-bold">Discover Ethiopia - Travel Website</h3>
                </div>
                <div className="mb-5">
                  I'm currently working on 'Discover Ethiopia', a captivating travel website crafted using HTML, CSS, and JavaScript. This project aims to showcase the rich cultural and natural heritage of Ethiopia through stunning visuals and engaging content. By combining responsive design principles with JavaScript for interactive elements, I'm creating a seamless browsing experience that invites users to explore Ethiopia's diverse landscapes, historic sites, and vibrant culture. This project reflects my passion for web development and my enthusiasm for promoting travel and exploration.
                </div>
                <h3 className="text-indigo-500 mb-2">Individually Done</h3>
                <div className="border border-gray-100 mb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Fully Done
                  </div>
                  <a
                    href="https://github.com/Eyoab11/Discover-Ethiopia"
                    className="h-[36px] bg-black hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm sm:mb-10"
                  >
                    GitHub Link
                  </a>
                  <a
                    href="https://eyoab11.github.io/Discover-Ethiopia/"
                    className="h-[36px] bg-black hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Deployed Link
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">Bootstrap</div>
                  <h3 className="text-xl font-bold">Portfolio</h3>
                </div>
                <div className="mb-5">
                  As one of my initial projects, I created an amateur personal portfolio website using Bootstrap. This project helped me understand the basics of web development, including responsive design and grid systems. The use of Bootstrap enabled me to quickly build a clean and functional layout, showcasing my early projects and skills. This portfolio website marks the beginning of my journey into web development and reflects my commitment to learning and growing in this field.
                </div>
                <h3 className="text-indigo-500 mb-2">Individually Done</h3>
                <div className="border border-gray-100 mb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Partially Done
                  </div>
                  <a
                    href="https://github.com/Eyoab11/UGR-5756-14-bootstrap"
                    className="h-[36px] bg-black hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    GitHub Link
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">MongoDB, React, Tailwind, ExpressJs</div>
                  <h3 className="text-xl font-bold">Educational Platform - Memariya.com</h3>
                </div>
                <div className="mb-5">
                  Our largest project to date is Memariya.com, an ambitious educational platform developed collaboratively with a team. Leveraging MongoDB for robust data management, React for dynamic user interfaces, Tailwind CSS for sleek design, and Express.js for efficient server-side operations, we aimed to create a comprehensive learning experience. This platform offers interactive courses, personalized learning paths, and robust student management features. Our collaborative effort ensured seamless integration of front-end and back-end technologies, resulting in a scalable and user-centric educational platform.
                </div>
                <h3 className="text-indigo-500 mb-2">With Team</h3>
                <div className="border border-gray-100 mb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Fully Done
                  </div>
                  <a
                    href="https://github.com/Bemnet-13/Memariya.com"
                    className="h-[36px] bg-black hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    GitHub Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
