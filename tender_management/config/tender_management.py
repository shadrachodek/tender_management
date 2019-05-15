from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("Tender"),
			"items": [
				{
					"type": "doctype",
					"name": "Tender",
					"onboard": 1,
					"description": _("List of Tender applications"),
				},
				{
					"type": "doctype",
					"name": "Bids",
					"description": _("List of Bids applications."),
				},
			        {
					"type": "doctype",
					"name": "Contracts",
					"description": _("List of Contracts applications."),
				},
			]
		},
   {
			"label": _("Setup"),
			"items": [
				{
					"type": "doctype",
					"name": "Lot Number",
					"onboard": 1,
					"description": _("Settings for Lot Number"),
				},
			]
		},
	]
