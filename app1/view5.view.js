sap.ui.jsview("app1.view5", {
    /** Specifies the Controller belonging to this View. 
    * In the case that it is not implemented, or that null is returned, this View does not have a Controller.
    * @memberOf app1.view5
    */ 
    getControllerName: function() {
        return "app1.view5";
    },
    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
    * Since the Controller is given to this method, its event handlers can be attached right away. 
    * @memberOf app1.view5
    */ 
    createContent: function(oController) {

        var shell = new sap.ui.ux3.Shell({
            appTitle:"Demo Shell",
            showLogoutButton: true,
            logoutButtonTooltip: "Logout",
            showSearchTool: true,
            showInspectorTool: true,
            showFeederTool: true,
            showTools: true,
            showPane: true,
            worksetItems:[
                new sap.ui.ux3.NavigationItem({
                    text: "Home",
                    key:"Home",
                    press:function(oEvt){
                        sap.m.MessageBox.show("Menu 1")
                    }
                }),
                new sap.ui.ux3.NavigationItem({
                    text: "Menu 1",
                    key:"Menu1",
                    press:function(oEvt){
                        sap.m.MessageBox.show("Menu 1")
                    }
                }),
            ],
            content:[
                new sap.m.Button({
                    text:"Simple button"
                })
            ],
            worksetItemSelected:function(oEvt){
                sap.m.MessageToast.show(oEvt.getParameter("id"))
            }

        })

        var oPage =  new sap.m.Page({
            title: "Title",
            showNavButton: true,
            navButtonPress: function (oEvt) { app.back(); },
            content: [
                shell
            ]
        });
        return oPage
    }
});