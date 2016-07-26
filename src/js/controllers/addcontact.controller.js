function AddContactController (ContactService) {

let vm = this;

vm.addContact = addContact;

	function addContact (contact/*from line2 add.tpl*/) {
		console.log("adding")
		ContactService.updateContact(contact).then( (res) => {

		})
	}

}

AddContactController.$inject =["ContactService"];
export { AddContactController };