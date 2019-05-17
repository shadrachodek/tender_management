// Copyright (c) 2019, Minyx360 and contributors
// For license information, please see license.txt

frappe.ui.form.on('Contract Payments', {
	refresh: function(frm) {
 
      frm.add_fetch('contract','contract_number','contract_number')
      frm.add_fetch('contract','contract_value_after_tax','contract_value')
      frm.add_fetch('contract','vendor_supplier','vendor_supplier')
      frm.add_fetch('contract','balance','payment_balance')

	}
});
