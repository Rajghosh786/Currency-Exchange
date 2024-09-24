import { useState, useEffect} from 'react'
import {InputBox} from "./components"
import './App.css'
import useCurrencyInfo from './customhooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState('')
  //iske niche humko from aur to lena hai user se isliye do state uska banaya hai
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  //convert amount ke liye bhi text chahiye isliye uske liye state banana hai
  const[convertedAmount,setConvertedAmount] = useState() 
  //niche custom hook use kia hai aur usme from pass kia hai kyuki from ka value hi convert karna hai na,crash bhi nai hoga kyuki from ke state me by default "usd" hai hi
  const currencyInfo = useCurrencyInfo(from)
  // iske niche humne api se jo call kia hai wo key and values dono deta hai lekin humko to sirf key chahiye wo select element me to usko convert kia hai humne yeh same vanilla me bhi kia hai 
  const options = Object.keys(currencyInfo) 
  //iske niche swap pe kaam kia hai swap me sirf upar ka select niche aur niche ka select upar kia hai(basic eg hai how to swap 2 variables ka)
  const swap = () =>{
    setFrom(to)
    setTo(from)
    // iske niche wala extra functionality hai check karke dalna
    // setConvertedAmount(amount)
    // setAmount(convertedAmount) 
  }

  //iske niche conversion multiplication kia hai
  const convert = ()=>{
    setConvertedAmount(amount * currencyInfo[to])
  }
  
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        // style={{
        //     backgroundImage: `url('pexels-maitree-rimthong-444156-1602726.jpg')`,
        // }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount = {amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency)=>{
                              setFrom(currency)
                            }}
                            selectCurrency={from}
                            onAmountChange={(amount)=>{
                              setAmount(amount)
                            }}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount = {convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency)=>{
                              setTo(currency)
                            }}
                            selectCurrency={to}
                           amountDisable 
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
