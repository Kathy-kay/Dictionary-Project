import {BsBook} from "react-icons/bs"
import sun from '../assets/images/sun.svg'
import {FaMoon} from "react-icons/fa"
import { useState, useEffect} from "react";


const Navbar = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if(theme === "dark"){
            document.documentElement.classList.add("dark");
        }
        else{
            document.documentElement.classList.remove("dark");
        }
    }, [theme])

    const switchTheme = () =>{
        setTheme(theme === "dark"? "light" : "dark")
    }

    return (
        <div className="w-full flex justify-between mt-10 ">
            
                <h1 className="text-bold text-3xl dark:text-white">DICTIONARY</h1>
           
            <div className="mode">
                <button onClick={switchTheme} className="mt-2">
                    {theme === "light" ?
                       <FaMoon size={20}/>
                    :
                       <img src={sun} alt="sun"  />
                    }
                </button>
            </div>
        </div>
    );
}
 
export default Navbar;