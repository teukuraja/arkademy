function checkPassword(masukan) {
	var syarat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,8}$/;

	if (masukan.value.match(syarat)) {
		alert('True');
		return true;
	}else{
		alert('False');
		return false;
	}
}