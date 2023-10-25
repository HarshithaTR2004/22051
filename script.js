let itemList = [];
let total = 0;

function addItem() {
    const itemInput = document.getElementById("item");
    const priceInput = document.getElementById("price");

    const itemName = itemInput.value;
    const itemPrice = parseFloat(priceInput.value);

    if (itemName && itemPrice > 0) {
        itemList.push({ name: itemName, price: itemPrice });

        const itemNode = document.createElement("li");
        itemNode.innerHTML = `<span>${itemName}</span><span>₹${itemPrice.toFixed(2)}</span>`;
        document.getElementById("item-list").appendChild(itemNode);

        total += itemPrice;
        document.getElementById("total").textContent = `Total: ₹${total.toFixed(2)}`;

        // Clear input fields
        itemInput.value = "";
        priceInput.value = "";
    }
}

        // Function to generate a random CAPTCHA code
        function generateCaptcha() {
            // Generate a random 4-digit number as the CAPTCHA
            var captchaCode = Math.floor(1000 + Math.random() * 9000);

            // Display the CAPTCHA image
            var captchaImage = document.getElementById("captchaImage");
            captchaImage.innerHTML = captchaCode;

            // Store the CAPTCHA code in a hidden field
            document.getElementById("captchaHidden").value = captchaCode;
        }

        // Function to validate the form
        function validateForm() {
            var enteredCaptcha = document.getElementById("captchaInput").value;
            var actualCaptcha = document.getElementById("captchaHidden").value;

            if (enteredCaptcha !== actualCaptcha) {
                alert("CAPTCHA code is incorrect. Please try again.");
                return false; // Prevent form submission
            }

            // Perform other login validation here
            return true; // Allow form submission
        }

        // Initialize the CAPTCHA on page load
        window.onload = generateCaptcha;

