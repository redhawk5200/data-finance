import React , {useState} from "react";
import { TiThMenu } from "react-icons/ti";
import { IoIosCloseCircle } from "react-icons/io";


const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () =>{
        setNav(!nav);
    }

    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
            <ul className="hidden md:flex">
                <li className="p-4 ">Home</li>
                <li className="p-4 ">Company</li>
                <li className="p-4 ">Resources</li>
                <li className="p-4 ">About</li>
                <li className="p-4 ">Contact</li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {!nav ? <IoIosCloseCircle size={25} />: <TiThMenu size={25} />}      
            </div>
            <div className={ !nav ? 'fixed left-0 top-0 bg-[#000300] w-[60%] border-r h-full border-r-gray-900 ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
            <ul className="uppercase p-4">
                <li className="p-4 border-gray-600 border-b">Home</li>
                <li className="p-4 border-gray-600 border-b">Company</li>
                <li className="p-4 border-gray-600 border-b">Resources</li>
                <li className="p-4 border-gray-600 border-b">About</li>
                <li className="p-4 border-gray-600 border-b">Contact</li>
            </ul>
            </div>
        </div>
    );
    }

export default Navbar;