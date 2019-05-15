// Copyright (c) 2019, Minyx360 and contributors
// For license information, please see license.txt

frappe.ui.form.on('Payment', {
	refresh: function(frm) {
 
      frm.add_fetch('contract_name','contract_number','contract_number')
      frm.add_fetch('contract_name','contract_number','contract_number')
      frm.add_fetch('contract_name','bid_value','contract_value')

	}
});
