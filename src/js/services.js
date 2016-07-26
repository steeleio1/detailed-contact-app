function ContactService ($http, SERVER) {

	this.updateContact = updateContact;
	this.getContacts = getContacts;

	function updateContact (contactData) {
    	return $http.post(SERVER.URL/*posts to server*/, contactData);
    }

  	function getContacts () {
  		return $http.get(SERVER.URL);
  	}


}


ContactService.$inject = ["$http", "SERVER"];
export { ContactService }