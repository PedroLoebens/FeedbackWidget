import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react' //biblioteca utilizada para facilitar a acessibilidade da aplicação

export function Widget() {
   
   return (
     <Popover className="absolute bottom-5 right-5 ">
         <Popover.Panel>Helo World</Popover.Panel>
         <Popover.Button className="bg-violet-500 rounded-full px-3 h-12 text-white flex items-center group ">
            <ChatTeardropDots className="w-6 h-6" />

            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-700">
               <span className="pl-2"></span>
               Feedback
               </span>
         </Popover.Button>
      </Popover>
   )

};