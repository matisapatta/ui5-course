sap.ui.jsview("app1.view3", {
    /** Specifies the Controller belonging to this View. 
    * In the case that it is not implemented, or that null is returned, this View does not have a Controller.
    * @memberOf app1.view3
    */ 
    getControllerName: function() {
        return "app1.view3";
    },
    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
    * Since the Controller is given to this method, its event handlers can be attached right away. 
    * @memberOf app1.view3
    */ 
    createContent: function(oController) {
        var oLabel = new sap.m.Label({
            text: "{label>/data}"
        })

        var oBtn = new sap.m.Button({
            text: "Draggable",
            press: [oController.goToNextPage, oController]
        }).addEventDelegate({
            onAfterRendering:function(oBtn){
                $(oBtn.srcControl.getDomRef()).draggable({
                    cancel: false
                })
            }
        })
        var oPage =  new sap.m.Page({
            title: "List page",
            showNavButton: true,
            navButtonPress: function (oEvt) { app.back(); },
            content: [
                oLabel,
                oBtn
            ]
        });
        return oPage
    }
});