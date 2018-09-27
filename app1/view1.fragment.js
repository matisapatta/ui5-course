sap.ui.jsfragment("app1.view1", {
    
    createContent: function(oController) {
        debugger;
        var oItemTemplate = new sap.m.StandardListItem({
            title:"{Name}",
            active:true
        });
        var oSelDialog = new sap.m.SelectDialog({
            title: "Animals",
            type: "Active",
            liveChange:[oController.liveChange1,oController]
        });

        oSelDialog.bindAggregation("items","/names",oItemTemplate);
        console.log("{Name}","{listpepe>Name}")
        return oSelDialog;
    }
})