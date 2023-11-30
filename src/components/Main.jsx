import { Avatar } from 'flowbite-react';

function Main() {
    return (
        <>
            <div className="mt-20">
                <Avatar
                    img="./public/goku_pfp.jpg"
                    alt="Profile picture"
                    rounded
                    size="xl"
                />
            </div>

            <div className="mt-10">
                <h1 className="text-4xl font-bold text-center flex justify-center items-center flex-col">
                    Welcome to my "About Me" website
                </h1>
                <p className="mt-2 text-xl text-center mx-auto max-w-prose">
                    Hello, I'm Adrian Villalobos, a passionate software developer and engineering student
                    based in Costa Rica. On this page, you'll discover insights into both my personal life
                    and my journey as a software developer and student at the TEC (Technological Institute
                    of Costa Rica). Join me as I share my experiences, projects, and the exciting world of
                    software development!</p>
            </div>
        </>
    );
}

export default Main;