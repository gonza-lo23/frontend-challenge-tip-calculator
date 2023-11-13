"use client";
import * as React from 'react';

export const ExampleContext = React.createContext({});

export default function ExampleContextProvider({ children }: any){
  const [inputValueTec, setInputValueTec] = React.useState();

  const [numberBill1, setNumberBill1] = React.useState(0);
  const [numberBill2, setNumberBill2] = React.useState(0);
  const [numberPersons, setNumberPersons] = React.useState(0);
  const [selectedButton, setSelectedButton] = React.useState(0);
  const [resultOfAmount, setResultOfAmount] = React.useState(0);


  return (
    <ExampleContext.Provider 
    value={{
    numberBill1, 
    setNumberBill1,
    numberBill2, 
    setNumberBill2,
    numberPersons,
    setNumberPersons,
    selectedButton, 
    setSelectedButton,
    resultOfAmount, 
    setResultOfAmount,
    inputValueTec, 
    setInputValueTec
    }}>

      {children}
    </ExampleContext.Provider>
  );
}
