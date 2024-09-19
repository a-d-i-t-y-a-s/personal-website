import Link from "next/link"
import Image from "next/image"
import '../globals.css' 
import { Montserrat } from "next/font/google"
  
export default function Page() {
    return (
        <main className="h-screen flex flex-col overflow-hidden">
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
                        Projects
                    </div>
                </div>
                <div className="flex flex-row p-10 h-screen gap-y-8">
                    <div className="hidden md:flex w-3/12 justify-content align-items max-h-screen">  
                        <div className="flex text-xl text-center my-72 p-15 font-serif m-10">
                        These are all the projects I have completed so far and are currently working on.
                        </div>
                    </div>
                    <div className="flex flex-col flex-grow overflow-y-auto space-y-1 hide-scrollbar mb-20 md:text-lg">
                    <Link target="_blank" href="https://nasdashboardpublic-e2dbws5d7-adityas-projects-7b8d16cc.vercel.app/dashboard" rel="noopener noreferrer">
                        <div className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl font-serif hover:italic'> NAS Dashboard
                            <div className="text-lg space-y-5 ml-5 mt-5"> 
                            This project is dashboard for a company I created over coop. It was used to visualize the status of projects across the company. This is purely the frontend, but the backend was created in .NET and integrated a SQL database. It was then hosted all in house on a windows server. <br></br>
                            Skills: JS, HTML, CSS, Angular, SQL, .NET (C#) </div>
                        </div>
                        </Link>
                        <Link target="_blank" href="https://books-around-the-world-d3562b9f2c4c.herokuapp.com/" rel="noopener noreferrer">
                        <div className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl font-serif hover:italic'> GlobeBook
                            <div className="text-lg space-y-5 ml-5 mt-5"> 
                            This project is website with an interactive globe that when you click on a country, it retrieves a random author from that country and books they have published. <br></br>
                            Skills: JS, HTML, CSS</div>
                        </div>
                        </Link>
                        <Link target="_blank" href="https://22ashah.wixsite.com/seniorproject/news" rel="noopener noreferrer">
                            <div className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl font-serif hover:italic'> Data Visualization
                                <div className="text-lg space-y-20 ml-5 mt-5"> 
                                A visualization of the impact of Covid-19 on the US and on the world. <br></br>
                                Skills: Python (pandas, matplotlib, python)</div>
                            </div>
                        </Link>
                        <Link target="_blank" href="https://arxiv.org/abs/2312.03020" rel="noopener noreferrer">
                            <div className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl font-serif hover:italic'> ML Research Paper
                                <div className="text-xl space-y-20 ml-5 mt-5"> 
                                Researched and deployed a CNN that can detect tumors in ultrasound scans. We utilized Google's MobileNetV2.
                                Currently, the paper is awaiting publication from Butler Journal of Undergraduate Research and is uploaded on arXiv.  <br></br>
                                Skills: Python 
                                </div>
                            </div>
                        </Link>

                        <div className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl font-serif hover:italic'> World Quiz
                            <div className="text-xl space-y-20 ml-5 mt-5">
                            Currently in progress. <br></br>
                            Skills: NextJS, React, TailwindCSS, </div>
                        </div>

                    </div>
                </div>
        </main>

      
      )
    }
    
  