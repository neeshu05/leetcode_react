import React, { useState } from 'react'

function Input() {
    const [phoneNumber,setPhoneNumber] = useState('')
    
    const formatPhoneNumber = (value) => {
        let digitsOnly = value.replace(/\D/g, '');
        if (digitsOnly.length <= 3) {
        return digitsOnly;
        } else if (digitsOnly.length > 3 && digitsOnly.length <= 6) {
        return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3, 6)}`;
        } else {
        return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6)}`;
        }
    };
    
    function phoneHandler(e){
        let phone = e.target.value
        let formatedNumber = formatPhoneNumber(phone)
        setPhoneNumber(formatedNumber)
    }
    return (
    <div>
        <input type='text' value={phoneNumber} placeholder='(913) 7894-8941' onChange={phoneHandler}></input>
    </div>
  )
}

export default Input