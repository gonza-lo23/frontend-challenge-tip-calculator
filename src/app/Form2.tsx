"use client";
import * as React from 'react'
import { ExampleContext } from './globalContext';

interface propos {
    title : string;
    sign:string;
}


function Form2(objeto:propos) {
    

  const [esCero, setEsCero] = React.useState(true);
    const context = React.useContext(ExampleContext) as any;

    
    const handleInputChange2 = (event:React.ChangeEvent<HTMLInputElement>)=>{
        const inputValue = Number(event.target.value);
        const invalidInput = inputValue > 0;

    setEsCero(invalidInput) ;
    context.setNumberPersons(inputValue);
        
        
    };

  return (
    <div>   
      <div className='flex gap-4'>
    <p className="font-xl font-bold text-gray-600">{objeto.title}</p>
    {esCero ? null : (
        <p className=" align-right flex ml-24 text-red-500">Can't be zero</p>
      )}</div> 
    <form> 
        <div className={`border ${esCero ? 
          null
          : 'border-red-500 rounded-md'}`}>
        <input
        placeholder={objeto.sign}
        className=
          'rounded-md
          border-gray-100 
          focus:border-sky-500
          focus:ring-sky-500
          placeholder:text-left
          focus:outline-none
          focus:ring-2
          cursor-pointer
          w-full border 
          p-2 text-right bg-gray-100'
        type='number'
        onChange={handleInputChange2}
        />
        </div>
    </form>
    </div>
  )
}

export default Form2