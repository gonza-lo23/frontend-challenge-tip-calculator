'use client';
import * as React from 'react';
import Board from "./Board";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Tablas from './Tablas';
import ExampleContextProvider from './globalContext';
import { ExampleContext } from './globalContext';


export default function Home() {

  interface priceValue {
    priceAmount:number;
    priceTotal:number;
  }
 
  const {selectedButton,setSelectedButton} = React.useContext(ExampleContext)

  const context = React.useContext(ExampleContext) as any; 

 const [priceAmount,setPriceAmount] = React.useState({})
  
 const selectedButtonFunction = (event:React.ChangeEvent<HTMLInputElement>)=>{
  const inputValue = Number(event.target.value);

  context.setNumberBill(inputValue);
};

  const mostrarResultado = () =>{
    return context.selectedButton
  }


  return (
    <ExampleContextProvider>
   <main  className=" grid grid-cols-1 gap-6 p-6 font-mono md:grid-cols-2">
    <div className="grid gap-6">
    <Form1 title={'Bill'} sign={'$'} />
    <Tablas/>
    <Form2 
    title={'Number of People'}
    sign={'$'}/>
    </div>
    <div className="col-span-1">
      <Board/>
    </div>
   </main>
   </ExampleContextProvider>
   
  )
}
