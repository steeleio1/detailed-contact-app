import angular from "angular";
import "angular-ui-router";


// import config & const
import { config } from "./config";
import { serverConstant } from './server.constant';

// import controllers
import { AddContactController }    from "./controllers/addcontact.controller";
import { SingleContactController } from "./controllers/singlecontact.controller";
import { ContactsListController }    from "./controllers/contactlist.controller";


// import services
import { ContactService } from "./services";


console.log (angular);


angular
  .module('app', ['ui.router'])
  .config(config)
  .constant('SERVER', serverConstant)
  .constant("serverConstant", serverConstant)
  .controller("ContactsListController", ContactsListController)
  .controller("SingleContactController", SingleContactController)
  .controller("AddContactController"/* This is what the controller is called in the config*/, AddContactController /*This is the instance of the controller Must match the name of the import*/)
  .service("ContactService", ContactService);
