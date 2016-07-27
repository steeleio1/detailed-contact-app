function SingleContactController (ContactService) {

	init ()

    function init() {
    ContactService.deleteContact.then( (res) => {
    	console.log(res)
      $state.go('root.home')
      });
  };

}

SingleContactController.$inject = ["ContactService"];
export { SingleContactController };

