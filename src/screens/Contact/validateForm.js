export default function validateForm({ name, email, phoneNumber, messageBody }) {


	const email_regex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const phone_regex = 
        /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im
        if (!email) {
		return 'Email required';
	} else if (email_regex.test(email.toLocalLowerCase)) {
		return 'Email address is invalid';
	}
	if (!phoneNumber) {
		return 'Phone Number is required';
	} else if (phoneNumber.length < 10 && phone_regex.test(phoneNumber.toLocalLowerCase)) {
		return 'Phone Number needs to be 10 characters exactly  i.e. 4567774545';
	}

	if (!name) {
		return 'Name is required';
	} 
    if (!messageBody) {
       return 'Message is required' 
    }
	return null;
}

