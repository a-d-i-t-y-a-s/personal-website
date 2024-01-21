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
                        About Me
                    </div>
                </div>
                <div className="flex flex-row border h-screen">
                    <div className="flex border w-screen h-80">
                        {/* <Image
                            src="/adi.jpg" 
                            alt="adi"
                            layout='fill'
                            objectFit="contain"     
                            // height={100}
                            // width={100}
                        /> */}
                    </div>

                    <div className="flex border">

                    </div>
                </div>
               
        </main>

      
      )
    }
