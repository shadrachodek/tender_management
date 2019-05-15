from __future__ import unicode_literals

from frappe import _


def get_data():
	return {
		'heatmap': False,
		'heatmap_message': _('This is based on transactions against this Tender. See timeline below for details'),
		'fieldname': 'tender',
		'transactions': [
			{
				'label': _('List'),
				'items': ['Bids', 'Contracts']
			},
		]
	}

