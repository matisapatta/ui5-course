sap.ui.controller("app1.view1", {
    /**
    * Called when a controller is instantiated and its View controls (if available) are already created.
    * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
    * @memberOf app1.view1
    */
    onInit: function () {

        /* Modelo i18n */
        
        // var sLoc = sap.ui.getCore().getConfiguration().getLanguage();
        // var i18nPath = "i18n/i18n"
        // if(sLoc==="de_DE"){
        //     i18nPath+="_de.properties"
        // } else if(sLoc==="zh_Hans"){
        //     i18nPath+="_ch.properties"
        // } else {
        //     i18nPath+=".properties"
        // }

        // var oi18nModel = new sap.ui.model.resource.ResourceModel({
        //     bundleUrl: i18nPath
        // })

        // sap.ui.getCore().setModel(oi18nModel,"i18n");

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

        var oData1 = {
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
        var oModel = new sap.ui.model.json.JSONModel(oData);
        oModel.setData(oData);
        sap.ui.getCore().setModel(oModel);

        var oModel1 = new sap.ui.model.json.JSONModel(oData1);
        oModel1.setData(oData1)
        sap.ui.getCore().setModel(oModel1,"listpepe");
        

    },

    /**
    * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
    * (NOT before the first rendering! onInit() is used for that one!).
    * @memberOf app1.view1
    */

    goToNextPage: function (oEvt) {
        app.to("pageid2")

    },

    openFragment: function(oEvt){
        if(this.oFragment === undefined){
            this.oFragment = sap.ui.jsfragment("app1.view1",this);
            this.oFragment.open();
        } else {
            this.oFragment.open();
        }

        
    },

    liveChange1: function(oEvt){
        var sVal = oEvt.getParameter("value");
        var oFilter = new sap.ui.model.Filter("Name",sap.ui.model.FilterOperator.Contains,sVal);
        var oBinding = oEvt.getSource().getBinding("items");
        oBinding.filter([oFilter])
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