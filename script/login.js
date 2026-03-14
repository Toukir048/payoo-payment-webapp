        document.getElementById("login-btn").addEventListener('click',
            () => {
                const mobileNumber = document.getElementById("mobile-number");
                const pin = document.getElementById("pin");

                const userNumber = mobileNumber.value;
                const userPin = pin.value;
                if (userNumber == '01234567890' && userPin == '1234') {
                    alert("Login Success");
                    window.location.replace("../home.html");
                }
                else if (userNumber == '' || userPin == '') {
                    alert("Details Cannot be empty");
                    return;
                }
                else{
                    alert("Wrong Information");
                    return;
                }
            }
        )