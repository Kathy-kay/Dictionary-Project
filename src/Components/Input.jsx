import { useState } from "react";
import {AiOutlineSearch} from "react-icons/ai"
import Content from "./Content"
import Meanings from "./Meanings"


const Input = () => {
    const [word, setWord] = useState("");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)


    const handleInputChange = (e) =>{
        setWord(e.target.value);
        
    };
  
        const searchWord = async () =>{
            try{
                setLoading(true);
                setError(null);
                const fetchData = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
                const response = await fetchData.json();
                
                setData(response[0])
                setLoading(false);
            }
            catch (error){
                console.log("Error fetching data :", error);
                setError("Failed to fetch data. Please try again")
                setLoading(false)
            }
        }

        const heading = () =>{
            const audio = data?.phonetics.find(voice => voice.audio !== "").audio;
            return {
                audioUrl : audio,
                word : data?.word,
                phonetic : data?.phonetic,
            };
        };
 
    return (
        <div className="mt-8">
           <input type="text" 
           value={word}
           onChange ={handleInputChange} 
           className="w-full bg-gray-100 dark:bg-gray-800 border-none outline-none
           rounded-lg px-3 py-4 font-medium"/>
           <button  onClick={searchWord}>                                                          
           <AiOutlineSearch className="-mx-7 col text-violet-950 cursor-pointer" size={20}/>
           </button>
                                                         
           {loading ? (
                <div className="mt-4">Loading...</div>
           ) : error ? (
                <div className="mt-4 text-red-500">{error}</div>
           ) : (
                data?.meanings?.length > 0 && ( 
                < >
                    <Content {...heading()}/>
                {
                   data.meanings.map((content, index) => (
                        <Meanings {...content} key={index}/>
                    ))  
                }
                </>
                )

            )}
            
           
        </div>
    );
}
 
export default Input;