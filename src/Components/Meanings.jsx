
const Meanings = ({partOfSpeech, definitions, synonyms}) => {
    
    return (
        

                <div className="my-6">
                    <div className="flex flex-row items-center text-lg font-bold font-serif">
                        <p className="dark:text-white">{partOfSpeech}</p>
                        <hr className="w-full ml-10"/>
                    </div>
                    <p className="text-gray-500 my-4 font-normal">Meaning</p>
                    <ul className="list-disc px-10 text-gray-700 font-semibold space-y-2 dark:text-gray-400">
                       {
                         definitions.map((def, index ) =>(
                            <li key={index}>{def.definition}</li>
                         ))
                       }
                        
                    </ul>
                    
                    {
                        synonyms.length > 0 && (
                            <div className="my-10 w-full flex ">
                                <p className=" text-gray-500 mr-5 ">Synonyms:{" "}  </p>
                                {synonyms.map((synonym, index) => (
                                    <p key={index} className=" text-violet-900 mx-2 ">{synonym}</p>
                                ))}
                                                    
                            </div>
                        )
                    }
                </div>

            
        
    );
}
 
export default Meanings;