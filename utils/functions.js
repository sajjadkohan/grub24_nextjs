const fixedNumber = (number) => {
    let num = parseFloat(number);
    let newNum = num.toFixed(1);
    return newNum
}

export{fixedNumber}