// App.js
import { useState } from 'react'
import Input from './components/Input'
import useCurrencyInfo from './hooks/useCurrencyinfo'


function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [converted, setConverted] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  // Corrected Object.keys usage
  const option = Object.keys(currencyInfo)

  const convert = () => {
    setConverted(amount * currencyInfo[to])
  }

  const swap = () => {
    const temp = from
    setFrom(to)
    setTo(temp)
  }

  return (
    <div className='container'>
      <form onSubmit={(e) => { e.preventDefault(); convert() }}>
        <Input 
          label="From" 
          amount={amount} 
          currencyOptions={option}
          oncurrencychange={(currency) => setFrom(currency)} 
          onAmountChange={(value) => setAmount(value)} 
          selectCurrency={from} 
        />

        <button type="button" onClick={swap}>Swap</button>

        <Input 
          label="To" 
          amount={converted} 
          currencyOptions={option}
          oncurrencychange={(currency) => setTo(currency)} 
          selectCurrency={to} 
          amountDisable={true} 
        />

        <button type="submit">Convert</button>
      </form>
    </div>
  )
}

export default App
