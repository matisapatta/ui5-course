sap.ui.jsview("app1.view2", {
    /** Specifies the Controller belonging to this View. 
    * In the case that it is not implemented, or that null is returned, this View does not have a Controller.
    * @memberOf app1.view2
    */
    getControllerName: function () {
        return "app1.view2";
    },
    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
    * Since the Controller is given to this method, its event handlers can be attached right away. 
    * @memberOf app1.view2
    */
    createContent: function (oController) {

        var oSimpleForm = new sap.ui.layout.form.SimpleForm({
            content: [
                new sap.m.Label({
                    text: "Simple form"
                }).addStyleClass("formContainer"),
                new sap.m.Input({
                    placeholder: "Simple button"
                }),
                new sap.m.Button({
                    text: "Simple button"
                }),
                new sap.m.RatingIndicator({
                    value: 4.7
                }),
                new sap.m.TextArea({
                    value: "Awesome text area"
                }),
                new sap.m.DatePicker({

                }),
                new sap.m.VBox({
                    items: [
                        new sap.m.Button({
                            text: "VBox btn1"
                        }),
                        new sap.m.Button({
                            text: "VBox btn2"
                        })
                    ]
                }).addStyleClass("vboxForm"),
                new sap.m.HBox({
                    items: [
                        new sap.m.Button({
                            text: "HBox btn1",
                            type: "Emphasized"
                        }),
                        new sap.m.Button({
                            text: "HBox btn2",
                            type: "Accept"
                        })
                    ]
                }).addStyleClass("hboxForm")
            ]
        }).addStyleClass("newForm")


        var oPage = new sap.m.Page({
            title: "Simple Form",
            showNavButton: true,
            navButtonPress: function (oEvt) { app.back(); },
            content: [
                oSimpleForm,
            ]
        });
        return oPage
    }
});