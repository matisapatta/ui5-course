sap.ui.jsfragment("app1.view1", {
    
    createContent: function(oController) {
        var oItemTemplate = new sap.m.StandardListItem({
            title:"{listpepe>Name}",
            active:true
        });
        var oSelDialog = new sap.m.SelectDialog({
            title: "Animals",
            type: "Active",
            liveChange:[oController.liveChange1,oController]
        });

        oSelDialog.bindAggregation("items","listpepe>/names",oItemTemplate);
        console.log("{Name}","{listpepe>Name}","algo")
   
        return oSelDialog;
    },
});