        // Function to display input text on the screen
        function displayText() {
            // Get the value of the input field
            let input = document.getElementById("userInput").value;
            
            // Variable to store the screen element
            let screen = document.getElementById("screen");

            // Display the input text on the screen
            screen.textContent = input ? input : "Waiting for input...";
        }