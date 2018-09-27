sap.ui.jsview("app1.detail", {
    /** Specifies the Controller belonging to this View. 
    * In the case that it is not implemented, or that null is returned, this View does not have a Controller.
    * @memberOf app1.detail
    */ 
    getControllerName: function() {
        return "app1.detail";
    },
    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
    * Since the Controller is given to this method, its event handlers can be attached right away. 
    * @memberOf app1.detail
    */ 
    createContent: function(oController) {
        
        var oCol1 = new sap.m.Column({
			header: new sap.m.Label({
				text: "Name"
			})
		})
		var oCol2 = new sap.m.Column({ // sap.ui.table.Column
			header: new sap.m.Label({
				text: "Place"
			})
		})
		var oCol3 = new sap.m.Column({
			header: new sap.m.Label({
				text: "ID"
			})
		})
		var oTableItems = new sap.m.ColumnListItem({
			cells: [
				new sap.m.Text({
					text: "{table>Name}"
				}), new sap.m.Text({
					text: "{table>Place}"
				}), new sap.m.Text({
					text: "{table>ID}"
				})
			]
		})

		var oTable = new sap.m.Table({
			text: "Simple Animal List",
			columns: [
				oCol1,
				oCol2,
				oCol3
			],
		})

		oTable.bindItems({
			path: "table>/",
			template: oTableItems
		})
        
        var oPage =  new sap.m.Page({
            title: "Detail",
            content: [
                oTable
            ]
        });
        return oPage
    }
});