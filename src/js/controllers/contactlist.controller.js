function ContactsListController (ContactService) {

let vm = this;

	init();

	  function init () {
	    ContactService.getContacts().then( res => {
	     console.log(res)
		vm.contacts = res.data;
	    });
	  }


}

ContactsListController.$inject = ["ContactService"];
export { ContactsListController };