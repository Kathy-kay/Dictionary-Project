import { useRef } from 'react';
import {GrPlay}  from 'react-icons/gr'

const Content = ({audioUrl, word, phonetic}) => {
    const ref = useRef();
    const playAudio = () =>{
        ref.current.play();
    }
   
    return (
        <div className="diction-container mt-8 dark:text-white">
                 <div className="flex justify-between">
                    <h1 className="font-semibold text-3xl capitalize" >{word}</h1>
                    <button className="cursor-pointer w-14 h-14 rounded-full bg-violet-300" onClick={playAudio}>
                        <GrPlay className="flex ml-5  border-none text-violet-900" size={20}/>
                    </button>
                    <audio className='hidden' ref={ref} src={audioUrl}/>
                </div>
                <p className='dark:text-violet-700'>{phonetic}</p>
        </div>
    );
}
 
export default Content;