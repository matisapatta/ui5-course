sap.ui.controller("app1.master", {
    /**
    * Called when a controller is instantiated and its View controls (if available) are already created.
    * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
    * @memberOf app1.master
    */
    onInit: function() {
        var oData = {
            names: [
                {
                    Name: "Dinosaur",
                    Place: "Mountain"
                },
                {
                    Name: "Shark",
                    Place: "River"
                },
                {
                    Name: "Elephant",
                    Place: "Forest"
                },
                {
                    Name: "Dragon",
                    Place: "Sky"
                },
                {
                    Name: "Wolf",
                    Place: "Snow"
                }
            ]

        }

        this.oDataTable = {
            names: [
                {
                    Name: "Dinosaur",
                    Place: "Mountain",
                    ID: "1"
                },
                {
                    Name: "Shark",
                    Place: "River",
                    ID: "2"
                },
                {
                    Name: "Elephant",
                    Place: "Forest",
                    ID: "3"
                },
                {
                    Name: "Dragon",
                    Place: "Sky",
                    ID: "4"
                },
                {
                    Name: "Wolf",
                    Place: "Snow",
                    ID: "5"
                }
            ]

        }
        var oModel = new sap.ui.model.json.JSONModel();
        oModel.setData(oData);
        sap.ui.getCore().setModel(oModel,"master")
    },

    /**
    * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
    * (NOT before the first rendering! onInit() is used for that one!).
    * @memberOf app1.master
    */

    onBeforeRendering: function() {

    },

    showDetailPage: function(oEvt){
        var sClickedData = oEvt.getSource().getTitle();
        var oData = this.oDataTable;
        var oNewData = [];
        for(var i = 0;i<oData["names"].length;i++){
            if(oData["names"][i]["Name"] === sClickedData){
                oNewData.push(oData["names"][i])
            }
        }
        console.log(oNewData)
        sap.ui.getCore().getModel("table").setData(oNewData)
    },

    /**
    * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
    * This hook is the same one that SAPUI5 controls get after being rendered.
    * @memberOf app1.master
    */

    onAfterRendering: function() {

    },

    /**
    * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
    * @memberOf app1.master
    */

    onExit: function() {

    }

});