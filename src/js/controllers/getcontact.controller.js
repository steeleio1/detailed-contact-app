function ContactsListController (ContactService) {

vm.contacts = contacts;

	init();

	  function init () {
	    ContactService.getContacts().then( res => {
	     
	      // ?? = res.data;
	    });
	  }


}

ContactsListController.$inject = ["ContactService"];
export {ContactsListController};