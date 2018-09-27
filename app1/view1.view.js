sap.ui.jsview("app1.view1", {
    /** Specifies the Controller belonging to this View. 
    * In the case that it is not implemented, or that null is returned, this View does not have a Controller.
    * @memberOf app1.view1
    */
	getControllerName: function () {
		return "app1.view1";
	},
    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
    * Since the Controller is given to this method, its event handlers can be attached right away. 
    * @memberOf app1.view1
    */
	createContent: function (oController) {

		/* Boton con input */

		var oBtn = new sap.m.Button({
			text: "Submit button",
			press: [oController.goToNextPage, oController]
		}).addStyleClass("btnCss");
		var oInput = new sap.m.Input({
			placeholder: "Enter your name",
			liveChange: [oController.liveChange, oController]
		})

		/* Lista simple */
		var oList = new sap.m.List("list", {
			headerText: "Animals",
			itemPress: [oController.listPage,oController]
		})

		oList.bindItems({
			path: "/names",
			template: new sap.m.StandardListItem({
				title: "{Name}",
				description: "{Place}",
				type: sap.m.ListType.Navigation,
				
			})
		})

		/* Fin Lista simple */

		/* Lista nueva */
		var oList1 = new sap.m.List("list1", {
			headerText: "Animals",
		})

		oList1.bindAggregation(
			"items",
			"/names",
			function (sId, oContext) {
				var sValue = oContext.getProperty("Name");
				var sDec1 = "Are still roaming around";
				var sDec2 = "Are still swimming around";
				var sDec3 = "Are extint";
				if (sValue === "Dinosaur") {
					return new sap.m.StandardListItem({
						title: sValue,
						description: sDec3
					});
				} else {
					return new sap.m.StandardListItem({
						title: sValue,
						description: sDec1
					})
				}

			}
		)

		/* Fin listas nueva*/


		/* sap.m.Table simple */
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
					text: "{Name}"
				}), new sap.m.Text({
					text: "{Place}"
				}), new sap.m.Text({
					text: "{ID}"
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
			path: "/names",
			template: oTableItems
		})

		/* Fin sap.m.Table simple */


		/* sap.ui.Table simple */
		var oColu1 = new sap.ui.table.Column({
			label: new sap.m.Label({ text: "Name" }),
			template: new sap.m.Text({
				text: "{Name}"
			})
		})

		var oColu2 = new sap.ui.table.Column({
			label: new sap.m.Label({ text: "Place" }),
			template: new sap.m.Text({
				text: "{Place}"
			})
		})

		var oColu3 = new sap.ui.table.Column({
			label: new sap.m.Label({ text: "ID" }),
			template: new sap.m.Text({
				text: "{ID}"
			})
		})

		var oTable1 = new sap.ui.table.Table({
			title: "Simple table",
			columns: [
				oColu1,
				oColu2,
				oColu3
			],
			cellClick: [oController.tableClick,oController]
		});

		oTable1.bindRows("/names");

		/* Fin sap.ui.Table simple */

		/* Tiles simple */
		var oT1 = new sap.m.StandardTile({
			title: "Dinousaur",
			info: "Mountain",
			icon: "sap-icon://sap-ui5"
		})
		var oT2 = new sap.m.StandardTile({
			title: "Whale",
			info: "Sea",
			icon: "sap-icon://general-leave-request"
		})
		var oT3 = new sap.m.StandardTile({
			title: "Elephant",
			info: "Forest",
			icon: "sap-icon://map-2"
		})
		var oT4 = new sap.m.StandardTile({
			title: "Turtle",
			info: "Ocean",
			icon: "sap-icon://travel-expense"
		})

		var oTileContainer = new sap.m.TileContainer({
			tiles: [
				oT1,
				oT2,
				oT3,
				oT4
			]
		})

		/* Fin Tiles simple */

		/* Tiles Binding */

		var oTileTemplate = new sap.m.StandardTile({
			icon: "{icon}",
			title: "{Name}",
			info: "{Place}"
		})

		var oTileContainer1 = new sap.m.TileContainer({

		});

		oTileContainer1.bindAggregation("tiles", "/names", oTileTemplate)

		/*Fin Tiles Binding */

		/* Generic Tiles */

		var oGTileContent = new sap.m.TileContent({
			unit: "EUR",
			footer: "Current Quarter"
		})
		var oGTile = new sap.m.GenericTile({
			headerImage: "sap-icon://travel-expense",
			header: "Test",
			tileContent: [
				oGTileContent
			]
		})

		/* Fin generic Tiles */

		var oBtn2 = new sap.m.Button({
			text: "Fragment",
			press: [oController.openFragment, oController]
		})

		var oPage = new sap.m.Page({
			title: "A simple app",
			content: [
				oBtn,
				oInput,
				oList,
				oTable,
				oTable1,
				oTileContainer,
				oTileContainer1,
				oGTile,
				oList1,
				oBtn2
			]
		});
		return oPage;
	}
});