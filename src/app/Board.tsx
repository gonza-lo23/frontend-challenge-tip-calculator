'use client';
import * as React from 'react'
import { ExampleContext } from './globalContext';

interface numbersBoard {
  tipAmount:number;
  totalAmount:number;
}


function Board() {
  
  const context = React.useContext(ExampleContext) as any;
  

  const totalPersonFunction = () =>{
   if(context.numberBill1 != null && context.selectedButton != null ){
   return (context.numberBill1 * context.selectedButton / 100 ).toFixed(2)}
   else{
    return 0
   }

  }

  const reseteoTodo = () =>{

    return(
    context.setNumberBill1(()=> 0),
    context.setNumberBill2(()=> 0),
    context.setNumberPersons(()=> 0)
    )
  }

  const tipAmountFunction = () =>{
   
   const totalResult =context.setResultOfAmount(context.numberBill1 * context.selectedButton/ 100);
    const ll = context.resultOfAmount / context.numberPersons ;
    if(context.resultOfAmount != null){
      return Math.floor(ll ).toFixed(2)}
      else{
        return 0
      }
   }
  
   const G = ()=>{
    const totalResult =context.setResultOfAmount(context.numberBill1 * context.selectedButton/ 100);
    const z = context.resultOfAmount / context.numberPersons ;

    if(context.numberBill2 != null && context.selectedButton != null ){
      return ((context.numberBill2 + z )/ 2 ).toFixed(2)
    }
      else{
       return 202
      }
   }

  return (
    <div className='
    grid-rows-3 grid
    md:py-3 py-2 md:px-3
    h-80 w-96 
    md:h-96
    justify-center 
    rounded-xl text-white
    bg-teal-950 gap-2 md:gap-6 '>
        <div className='grid grid-cols-2 md:grid-cols-1 md:gap-1 gap-2 '>
        <div className='mb-6 row-start-1 place-content-between flex gap-4'>
        <div className='m-5'>
        <div className='font-bold text-lg'>Tip Amount</div>
        <p className='text-gray-400 text-sm'>/ person</p>
        </div>
        <div className='
         font-bold text-5xl
         text-emerald-300 m-3'>${tipAmountFunction()}</div>
        </div>
        <div className='row-start-2 m-4 gap-6 place-content-between	 flex '>
        <div className='m-5 ml-1'>
        <div className='font-bold text-lg text-white-300'>Total</div>
        <p className='text-gray-400 text-sm'>/ person</p>
        </div>
        <div className='font-bold text-5xl text-emerald-300 mt-3'>${G()}</div>
        </div>
        </div>
        <button 
        id='reset'
        onClick={reseteoTodo}
        className='
        focus:bg-teal-300 focus:text-black
        font-mono grid row-start-3
        self-center mt-5  mx-5
        font-bold
        text-2xl text-emerald-500
        rounded-md
        bg-emerald-900 w-72 md:w-80 h-12'>Reset</button>
        </div>
  )
}

export default Board