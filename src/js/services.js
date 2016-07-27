function ContactService ($http, SERVER) {

	this.updateContact = updateContact;
	this.getContacts = getContacts;
	this.deleteContact = deleteContact;

	function updateContact (contactData) {
    	return $http.post(SERVER.URL/*posts to server*/, contactData);
    }

  	function getContacts () {
  		return $http.get(SERVER.URL);
  	}

  	function deleteContact () {
  		return $http.delete(SERVER.URL + contacts._id)
  	}

}


ContactService.$inject = ["$http", "SERVER"];
export { ContactService }