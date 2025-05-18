import { mongodblogo } from "../assets";
import Sajal from "../assets/sajal-pic.png"
import { BsFillPersonFill } from "react-icons/bs";
import DemoPersion from "../assets/person.avif"

function Team(){
    return(
        <>
          <div className="w-full mb-4" >
            <h1 className="text-4xl ml-[50px] mb-[35px] font-bold !text-center text-blue-900 inline-block after:content-[''] after:block after:w-full after:h-1 after:bg-gradient-to-r after:from-red-500 after:to-transparent after:mt-2 ml-10 mt-5 md:ml-[268px] lg:ml-[380px] xl:ml-[520px]">Meet Our Team</h1>
            <div className="flex gap-8 justify-center items-center">
                <div>
                   <img src={Sajal} alt="sajal" className="h-[150px] w-[150px] rounded-full border border-gray-300"/>
                    <div>
                        <h1 className="text-2xl font-semibold text-blue-900">Sajal Ghosh</h1>
                        <p className="text-gray-600 text-sm font-medium ">Full Stack Developer </p>
                    </div>
                </div>
                <div>
                    <img src={DemoPersion} alt="abhik" className="h-[150px] w-[150px] rounded-full border border-gray-300"/>
                 
                    <div>
                        <h1 className="text-2xl font-semibold text-blue-900">Abhik Laha</h1>
                        <p className="text-gray-600 text-sm font-medium ">Full Stack Developer</p>
                    </div>
                </div>
                <div>
                    <img src={DemoPersion} alt="abhik" className="h-[150px] w-[150px] rounded-full border border-gray-300"/>
                 
                    <div>
                        <h1 className="text-2xl font-semibold text-blue-900">Subhrodeep Das</h1>
                        <p className="text-gray-600 text-sm font-medium ">Full Stack Developer</p>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default Team;