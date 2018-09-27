sap.ui.jsview("app1.master", {
    /** Specifies the Controller belonging to this View. 
    * In the case that it is not implemented, or that null is returned, this View does not have a Controller.
    * @memberOf app1.master
    */ 
    getControllerName: function() {
        return "app1.master";
    },
    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
    * Since the Controller is given to this method, its event handlers can be attached right away. 
    * @memberOf app1.master
    */ 
    createContent: function(oController) {
        
        /* Lista simple */
		var oList = new sap.m.List("list", {
			headerText: "Animals",
			
		})

		oList.bindItems({
			path: "master>/names",
			template: new sap.m.StandardListItem({
				title: "{master>Name}",
				description: "{master>Place}",
				type: sap.m.ListType.Navigation,
				press:[oController.showDetailPage,oController]
			})
		})

        
        var oPage =  new sap.m.Page({
            title: "Master",
            content: [
                oList
            ]
        });
        return oPage
    }
});