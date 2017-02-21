var submitButton = document.querySelector('.submitBtnVal');

// function addErrorClass(childWithParent) {
//     childWithParent.parentNode.classList.add("has-error");
// }


function validateInputs() {

    var nameInputBox = document.querySelector('#fullName');
    var name = nameInputBox.value;

    var emailControl = document.querySelector('#emailAddr');
    var email = emailControl.value;

    var phoneControl = document.querySelector('#phoneNx');
    var phone = phoneControl.value;


    if (!name || name.trim().length == 0) {
        alert("Please Enter Your Full Name");
        // addErrorClass(nameInputBox);
        return false;
    }

    if (!email || email.trim().length == 0) {
        alert("Please Enter a Valid Email Address");
        // addErrorClass(nameInputBox);
        return false;
    }

    if (!phone || parseInt(phoneControl) == "NaN" || phone !== /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/) {
        alert("Please enter a valid phone number");
        // addErrorClass(phoneControl);
        return false;
    }

}


submitButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    validateInputs();
});