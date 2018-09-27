sap.ui.controller("app1.view1", {
    /**
    * Called when a controller is instantiated and its View controls (if available) are already created.
    * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
    * @memberOf app1.view1
    */
    onInit: function () {


        var oData = {
            names: [
                {
                    Name: "Dinosaur",
                    Place: "Mountain",
                    ID: "1",
                    icon: "sap-icon://sap-ui5"
                },
                {
                    Name: "Shark",
                    Place: "River",
                    ID: "2",
                    icon: "sap-icon://general-leave-request"
                },
                {
                    Name: "Elephant",
                    Place: "Forest",
                    ID: "3",
                    icon: "sap-icon://map-2"
                },
                {
                    Name: "Dragon",
                    Place: "Sky",
                    ID: "4",
                    icon: "sap-icon://travel-expense"
                },
                {
                    Name: "Wolf",
                    Place: "Snow",
                    ID: "5",
                    icon: "sap-icon://map-3"
                }
            ]

        }
        var oModel = new sap.ui.model.json.JSONModel(oData);

        oModel.setData(oData);
        //		sap.ui.getCore().byId("list").setModel(oModel);
        //		sap.ui.getCore().byId("table").setModel(oModel);
        sap.ui.getCore().setModel(oModel);


    },

    /**
    * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
    * (NOT before the first rendering! onInit() is used for that one!).
    * @memberOf app1.view1
    */

    goToNextPage: function (oEvt) {
        app.to("pageid2")

    },

    listPage: function (oEvt) {
        var sTitle = oEvt.getParameters().listItem.getProperty("title");
        if (sTitle !== undefined) {
            sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel({ data: sTitle }), "label")
            app.to("pageid3")
        }
    },

    liveChange: function (oEvt) {
        var sValue = oEvt.getParameter('value');
        sap.m.MessageToast.show(sValue)

    },

    tableClick: function (oEvt) {
        sValue = oEvt.getParameters().rowBindingContext.getProperty("Name");
        if (sValue !== undefined) {
            sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel({ data: sValue }), "table")
            app.to("pageid4");
        }

    },

    onBeforeRendering: function () {

    },

    /**
    * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
    * This hook is the same one that SAPUI5 controls get after being rendered.
    * @memberOf app1.view1
    */

    onAfterRendering: function () {

    },

    /**
    * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
    * @memberOf app1.view1
    */

    onExit: function () {

    }

});