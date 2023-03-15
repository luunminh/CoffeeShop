import React from 'react'


export const isValidEmail = (strEmail) => {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(strEmail))
}

export const isValidPassword = (strPass) => {
    return (strPass.trim().length) >= 6;
}

export const isValidInput = (str) => {
    return (str.trim().length > 0)
}

export const isValidPhoneNumber = (strNumber) => {
    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return regex.test(strNumber)
}