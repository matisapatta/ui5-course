sap.ui.jsview("app1.view4", {
    /** Specifies the Controller belonging to this View. 
    * In the case that it is not implemented, or that null is returned, this View does not have a Controller.
    * @memberOf app1.view4
    */ 
    getControllerName: function() {
        return "app1.view4";
    },
    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
    * Since the Controller is given to this method, its event handlers can be attached right away. 
    * @memberOf app1.view4
    */ 
    createContent: function(oController) {
        var oLabel = new sap.m.Label({
            text:"{table>/data}"
        })
        var oPage =  new sap.m.Page({
            title: "Table page",
            showNavButton: true,
            navButtonPress: function (oEvt) { app.back(); },
            content: [
                oLabel
            ]
        });
        return oPage
    }
});