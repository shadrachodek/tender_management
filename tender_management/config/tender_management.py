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
        {
					"type": "doctype",
					"name": "Contract Payments",
					"description": _("Make manager for contract"),
				},
			]
		},
   {
			"label": _("Supplier"),
			"items": [
				{
					"type": "doctype",
					"name": "Supplier",
					"onboard": 1,
					"description": _("Supplier database."),
				},
				{
					"type": "doctype",
					"name": "Supplier Group",
					"description": _("Supplier Group master.")
				},
				{
					"type": "doctype",
					"name": "Contact",
					"description": _("All Contacts."),
				},
				{
					"type": "doctype",
					"name": "Address",
					"description": _("All Addresses."),
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
        {
					"type": "doctype",
					"name": "Budget Group",
					"onboard": 1,
					"description": _("Settings for Budget Contracts"),
				},
        {
					"type": "doctype",
					"name": "User",
					"onboard": 1,
					"description": _("Settings for User"),
				},
        {
					"type": "doctype",
					"name": "Role",
					"onboard": 1,
					"description": _("Settings for User"),
				},
        {
					"type": "doctype",
					"name": "Role Profile",
					"onboard": 1,
					"description": _("Settings for Role Profile"),
				},
			]
		},
	]
