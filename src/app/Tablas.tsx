import * as React from 'react'
import ExampleContextProvider from './globalContext';
import { ExampleContext } from './globalContext';





function Tablas() {

const context = React.useContext(ExampleContext) as any; 

const selectedButtonFunction = (event:React.ChangeEvent<HTMLInputElement>)=>{
    const inputValue = Number(event.target.value);
    
    context.setSelectedButton(inputValue);
    };
    
  return (
    <div>
    <p className="font-xl font-bold text-gray-600 mb-4">Select Tip %</p>
    <div className=" gap-6 grid md:grid-cols-3 grid-cols-2 md:gap-x-2 md:gap-y-2 ">
    <button 
    id='5'
    value='5'
    onClick={selectedButtonFunction}
    className="focus:bg-teal-300 focus:text-black bg-teal-950 rounded-md
     md:w-28 w-40 text-2xl text-white h-10 md:h-14 font-bold ">5%</button>
    <button 
    id='10'
    value={10}
    onClick={selectedButtonFunction}
    className="focus:bg-teal-300 focus:text-black  bg-teal-950 rounded-md 
     text-2xl md:w-28 w-40 text-white  h-10 md:h-14 font-bold ">10%</button>
    <button
    id='15'
    value='15'
    onClick={selectedButtonFunction}
     className="focus:bg-teal-300 focus:text-black bg-teal-950 rounded-md
     text-2xl md:w-28 w-40 text-white  h-10 md:h-14 font-bold ">15%</button>
    <button 
    id='25'
    value='25'
    onClick={selectedButtonFunction}
    className="focus:bg-teal-300 focus:text-black bg-teal-950 rounded-md
     text-2xl md:w-28 w-40 text-white  h-10 md:h-14  font-bold ">25%</button>
    <button
    id='50'
    value='50'
    onClick={selectedButtonFunction}
     className="focus:bg-teal-300 focus:text-black bg-teal-950 rounded-md 
     text-2xl  md:w-28 w-40 text-white  h-10 md:h-14 font-bold ">50%</button>
    <input 
    placeholder="Custom"
    className="
    focus:outline-none
        invalid:text-red-500
        focus:border-sky-500
        focus:ring-2
        focus:ring-sky-500
     bg-gray-100 rounded-md
     text-2xl text-gray-500 text-center
     cursor-pointer
     border 
     focus:border-sky-500
     focus:ring-sky-500
     md:w-28 w-40 h-10 md:h-14 font-bold "
     type='number'
     onChange={selectedButtonFunction}
     ></input>
     </div>
    </div>
  )
}

export default Tablas