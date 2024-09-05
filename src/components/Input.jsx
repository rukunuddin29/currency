// Input.js
import React from 'react'

function Input({
  label,
  amount,
  onAmountChange,
  oncurrencychange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  className = "",
}) {

  return (
    <>
      <div className={`${className}`}>
        <div>
          <label>
            {label}
          </label>
          <input
            type="number"
            placeholder='Amount'
            value={amount}
            disabled={amountDisable}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          />
        </div>
        <div>
          <p>Currency Type</p>
          <select
            value={selectCurrency}
            onChange={(e) => oncurrencychange && oncurrencychange(e.target.value)}
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  )
}

export default Input;
