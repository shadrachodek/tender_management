// Copyright (c) 2019, Minyx360 and contributors
// For license information, please see license.txt

frappe.ui.form.on('Contracts', {
	refresh: function(frm) {
      frm.add_fetch('bid','tender','tender')
      frm.add_fetch('bid','tender_ref_number','tender_ref_number') 
      frm.add_fetch('bid','application_number','application_number') 
      frm.add_fetch('bid','lot_number','lot_number')
      frm.add_fetch('bid','description','description')
      frm.add_fetch('bid','vendor_supplier','vendor_supplier')
      frm.add_fetch('bid','bid_value','approved_sum')
      
      frm.add_fetch('payment_document_id','date','date_the_payment_was_made')
      frm.add_fetch('payment_document_id','amount_paid','amount_paid')
      
      if (!frm.doc.contract_number) {
       let d = new Date();
       let num = d.valueOf();
       frm.set_value("contract_number", num);
     }
     
      if (frm.doc.procurement_type) {
        if (frm.doc.docstatus===1){
        	if(frm.doc.procurement_type){
             frm.add_custom_button(__('Make Payment'), () => {
                 frappe.route_options = {
                   "supplier": frm.doc.vendor_supplier,
                   "contract_number": frm.doc.contract_number,
                 };
              frappe.new_doc("Contract Payments");
        		});           
          }
    	}    
    }
          
	 },
   
    "tender": function(frm) {
      
        frm.fields_dict['bid'].get_query = function(doc) {
        return {
          filters:[
            ['tender', '=', doc.tender]
          ]
        }
      }
      
    },  
    
   // console.log(frm.doc) 
});

frappe.ui.form.on('Contracts', 'validate', function(frm) {
  set_total_balance(frm)
});



frappe.ui.form.on('Contract Payment Slip', 'amount_paid', function(frm) {
  set_total_balance(frm)
});

let set_total_balance = function(frm) {
  let balance = 0.0;
  $.each(frm.doc.payments, function(i, row){
    balance += flt(row.amount_paid)
  })
  
  frm.set_value('total_paid', flt(balance));
  frm.set_value('balance', ( flt(frm.doc.approved_sum) - flt(balance) ));
  frm.refresh();
}
