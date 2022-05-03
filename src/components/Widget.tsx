import { ChatTeardropDots } from 'phosphor-react';
import { useState } from 'react';

export function Widget() {
   const[isWidgetOpen, setIsWidgetOpen] = useState(false)

   function toggleWidgethVisibility() {
      setIsWidgetOpen(!isWidgetOpen)//essa função vai pegar o valor atual do estado e o ponto de exclamação serve para inverter o valor assim que chamada a função
   }

   return (
     <div className="absolute bottom-5 right-5 ">
         {isWidgetOpen ? <p>Helo World</p> : null } 
         <button onClick={toggleWidgethVisibility} className="bg-violet-500 rounded-full px-3 h-12 text-white flex items-center group ">
            <ChatTeardropDots className="w-6 h-6" />

            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-700">
               <span className="pl-2"></span>
               Feedback
               </span>
         </button>
     </div>
   )

};