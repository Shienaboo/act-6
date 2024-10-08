function passwordPrompt() {
    let correctPassword = "shienboo25";
    let userPassword;

    do {
        userPassword = prompt("Input password");

        if (userPassword === null) {
            alert("Action canceled");
            return;
        }

        if (userPassword !== correctPassword) {
            alert("Incorrect, try again.");
        }
    }while (userPassword !== correctPassword);

    alert("Access granted");
    }