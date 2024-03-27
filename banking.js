function getInputValue(iputId) {
  //   debugger;
  // get the amount deposited
  const inputField = document.getElementById(iputId);
  const inputAmount = parseFloat(inputField.value);
  // clear the deposit input field

  inputField.value = "";
  return inputAmount;
}
function balanceUptade(totalFieldId) {
  const fieldsTotal = document.getElementById(totalFieldId);
  return fieldsTotal;
}
function updateTotalField(totalFieldId, fieldAmount, isAdd) {
  //   debugger;
  //   const fieldTotal = document.getElementById(totalFieldId);
  const fieldTotal = balanceUptade(totalFieldId);
  if (isAdd) {
    fieldTotal.innerText = parseFloat(fieldTotal.innerText) + fieldAmount;
  } else {
    fieldTotal.innerText = parseFloat(fieldTotal.innerText) - fieldAmount;
  }
}

// get deposit button event
document.getElementById("deposit-button").addEventListener("click", () => {
  const depositAmount = getInputValue("deposit-input");
  if (!isNaN(depositAmount) && depositAmount > 0) {
    /* const depositTotal = document.getElementById("deposit-total");
    depositTotal.innerText = depositAmount + parseFloat(depositTotal.innerText); */
    updateTotalField("deposit-total", depositAmount, true);
    // update  account balance
    /* const balanceTotal = document.getElementById("balance-total");
    balanceTotal.innerText = depositAmount + parseFloat(balanceTotal.innerText); */
    updateTotalField("balance-total", depositAmount, true);
  } else {
    alert("Please inter positive Number");
  }
});

// get withdraw button event
document.getElementById("withdraw-button").addEventListener("click", () => {
  //   // get the amount withdraw
  //   const withdrawInput = document.getElementById("withdraw-input");
  //   const withdrawAmount = parseFloat(withdrawInput.value);
  const withdrawAmount = getInputValue("withdraw-input");
  const balanceCheck = balanceUptade("balance-total");
  const balances = parseFloat(balanceCheck.innerText);
  if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
    if (balances > withdrawAmount) {
      // const withdrawTotal = document.getElementById("withdraw-total");
      // //   console.log(withdrawTotal.innerText);
      // withdrawTotal.innerText =
      //   withdrawAmount + parseFloat(withdrawTotal.innerText);
      updateTotalField("withdraw-total", withdrawAmount, true);
      /*    // update  account balance
    const balanceTotal = document.getElementById("balance-total");
    balanceTotal.innerText =
      parseFloat(balanceTotal.innerText) - withdrawAmount; */
      updateTotalField("balance-total", withdrawAmount, false);
    } else {
      alert("Excess balance amount");
    }
  } else {
    alert("Please inter positive Number");
  }
  //   // clear the withdraw input field

  //   withdrawInput.value = "";
});
