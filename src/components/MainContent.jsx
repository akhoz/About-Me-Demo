import { Avatar } from 'flowbite-react';
import { IoIosArrowDropdownCircle } from "react-icons/io";

function MainContent() {
    return (
        <>
            <div className="mt-20">
                <Avatar
                    img="./public/goku_pfp.jpg"
                    alt="Profile picture"
                    rounded
                    size="xl"
                />
                <hr className="my-10 border-t-2 border-black w-1/2 mx-auto" />
            </div>

            <div className="mt-10">
                <h1 className="text-4xl font-bold text-center flex justify-center items-center flex-col">
                    Welcome to my "About Me" website
                </h1>
                <p className="my-2 text-xl text-center mx-auto max-w-prose italic">
                    Hello, I'm Adrian Villalobos, a passionate software developer and engineering student
                    based in Costa Rica. On this page, you'll discover insights into both my personal life
                    and my journey as a software developer and student at the TEC (Technological Institute
                    of Costa Rica). Join me as I share my experiences, projects, and the exciting world of
                    software development!</p>
                <h2 className="my-20 text-2xl font-bold text-center flex justify-center items-center flex-col">
                    Take a look to what you can find in this website
                </h2>
                <div className="flex justify-center items-center mb-20">
                    <IoIosArrowDropdownCircle className="text-6xl animate-bounce" />
                </div>
            </div>
        </>
    );
}

export default MainContent;