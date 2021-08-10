Blockly.defineBlocksWithJsonArray([
	{
		"type": "irelay_5_set",
		"message0": "iRELAY-5 set channel %1 to %2",
		"args0": [
			{
				"type": "field_dropdown",
				"name": "ch",
				"options": [
					[
						"1",
						"1"
					],
					[
						"2",
						"2"
					],
					[
						"3",
						"3"
					],
					[
						"4",
						"4"
					],
					[
						"5",
						"5"
					]
				]
			},
			{
				"type": "field_dropdown",
				"name": "value",
				"options": [
					[
						"ON",
						"1"
					],
					[
						"OFF",
						"0"
					]
				]
			}
		],
		"previousStatement": null,
		"nextStatement": null,
		"colour": "#2ECC71",
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "irelay_5_set_all",
		"message0": "iRELAY-5 set ALL channel to %1",
		"args0": [
			{
				"type": "field_dropdown",
				"name": "value",
				"options": [
					[
						"ON",
						"1"
					],
					[
						"OFF",
						"0"
					]
				]
			}
		],
		"previousStatement": null,
		"nextStatement": null,
		"colour": "#2ECC71",
		"tooltip": "",
		"helpUrl": ""
	},
	{
		"type": "irelay_5_on_auto_off",
		"message0": "iRELAY-5 set channel %1 to ON after %2 second set to OFF",
		"args0": [
			{
				"type": "field_dropdown",
				"name": "ch",
				"options": [
					[
						"1",
						"1"
					],
					[
						"2",
						"2"
					],
					[
						"3",
						"3"
					],
					[
						"4",
						"4"
					],
					[
						"5",
						"5"
					]
				]
			},
			{
				"type": "input_value",
				"name": "time",
				"check": "Number"
			}
		],
		"inputsInline": true,
		"previousStatement": null,
		"nextStatement": null,
		"colour": "#2ECC71",
		"tooltip": "",
		"helpUrl": ""
	}
]);
