const fixedNumber = (number) => {
    let num = parseFloat(number);
    if (num === 0) {
        num = 5;
      }
    let newNum = num.toFixed(1);
    return newNum
}

export{fixedNumber}