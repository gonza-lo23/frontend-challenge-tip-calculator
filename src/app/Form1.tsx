"use client";
import * as React from 'react'
import { ExampleContext } from './globalContext';

interface propos {
    title : string;
    sign:string;
}


function Form1(objeto:propos) {
    

    const context = React.useContext(ExampleContext) as any;

    
    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        let numeroLocos = Number(event.target.value);
        
        
        context.setNumberBill1(numeroLocos);
        context.setNumberBill2(numeroLocos);        
    };

    

  return (
       <div>    
        <p className="font-xl font-bold text-gray-600">{objeto.title}</p>
        <form> 
        <label className="relative block">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">{objeto.sign}</svg>
          </span>
        <input
        id='btnLoco'
        className='
        rounded-md
        border-gray-100
        cursor-pointer
        focus:outline-none
        w-full border 
        invalid:text-red-500
        focus:border-sky-500
        focus:ring-2
        focus:ring-sky-500
        placeholder:text-left
        p-2 text-right bg-gray-100'
        type='number'
        onChange={handleInputChange}
        />
        </label >
    </form>
    </div>
  )
}

export default Form1