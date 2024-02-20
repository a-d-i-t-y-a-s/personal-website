import Link from "next/link"
import Image from "next/image"
import '../globals.css' 
import { Montserrat } from "next/font/google"

export default function Page() {
    return (
        <main className="h-screen flex flex-col overflow-hidden overflow-y-auto md:overflow-hidden ">
             <div className="flex flex-row justify-content p-10 w-screen">
                    <Link href="/">
                    <Image
                        src="/backarrow.svg" 
                        alt="Back"
                        width={25} // Set the width of the SVG
                        height={25} //
                    />
                    </Link>
                    <div className="flex flex-grow text-4xl font-semibold justify-center">
                        About Me
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row h-screen">
                    <div className="flex flex-col  w-80 h-80 p-10">
                        <Image
                            src="/adi.jpg" 
                            alt="adi"
                            // layout="fill"
                            // objectFit="contain"     
                            height={100}
                            width={250}
                            className="rounded-xl priority flex"
                        />

                        <div className="hidden md:flex flex-col justify-center align-items text-center my-5"> 
                             Aditya Shah
                        </div>
                    </div>

                    <div className="flex flex-col w-screen p-10 text-lg mt-10 md:mt-0">
                        Hi my name is Aditya Shah and I am currently an undergradute student at Rochester Institute of Technology. 
                        I was born in the United States but grew up in Kathmandu, Nepal. 
                        <br></br>
                        <br></br>
                        I started programming in middle school where I would create small little games on Scratch. I got inspired 
                        by that and realized I had the power to create anything I want. Fast-forward to today, I have interned at 
                        Pitstop Nepal and Fonepay. I enjoy building web applications that are driven to solve a problems that people face
                        in an efficient manner. I always hate using a website that has a convulatde page layout structure when it can be made
                        easier for both the programmer and the user. 
                        
                        <br></br>
                        <br></br>
                        My primary focus nowadays is learning as much as I can in university and applying it through personal projects.
                        I am currently looking for a Summer 2024 internship/coop in positions such as Software Engineering, Software
                        Engineering, Product Manager, and AI/ML Intern.     
                    </div>
                </div>
               
        </main>

      
      )
    }
