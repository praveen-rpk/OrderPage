function calculateBill() {
  var flowersQty = parseInt(document.getElementById("flowersQty").value) || 0;
  var surpriseBoxQty = parseInt(document.getElementById("surpriseBoxQty").value) || 0;
  var toysQty = parseInt(document.getElementById("toysQty").value) || 0;
  var chocolateBoxQty = parseInt(document.getElementById("chocolateBoxQty").value) || 0;
  var photoFrameQty = parseInt(document.getElementById("photoFrameQty").value) || 0;

  var billList = document.getElementById("billList");
  billList.innerHTML = "";

  function addItemToBill(itemName, itemQty, itemPrice) {
    if (itemQty > 0) {
      var itemTotal = itemQty * itemPrice;
      billList.innerHTML += "<li class='bill-item'>" + itemName + ": <span>" + itemQty + "</span> ($" + itemTotal + ")</li>";
    }
  }

  addItemToBill("Flowers", flowersQty, 10);
  addItemToBill("Surprise Box", surpriseBoxQty, 15);
  addItemToBill("Toys", toysQty, 5);
  addItemToBill("Chocolate Box", chocolateBoxQty, 8);
  addItemToBill("Photo Frame", photoFrameQty, 12);

  var totalBill = (flowersQty * 10) + (surpriseBoxQty * 15) + (toysQty * 5) + (chocolateBoxQty * 8) + (photoFrameQty * 12);

  document.getElementById("totalBill").textContent = "Total: $" + totalBill;
}

function deleteProduct(product) {
  document.getElementById(product + "Qty").value = 0;
  calculateBill();
}

function resetBill() {
  document.getElementById("billList").innerHTML = "";
  document.getElementById("totalBill").textContent = "Total: $0";
}
