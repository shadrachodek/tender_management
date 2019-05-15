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
      frm.add_fetch('bid','bid_value','bid_value')
      
     let num = 9804874641;
     frm.set_value("contract_number", num); 
     
     console.log(frm.doc)
      if (frm.doc.procurement_type) {
        if (frm.doc.docstatus===1){
        	if(frm.doc.procurement_type === "Goods"){
             frm.add_custom_button(__('Make Purchase Order'), () => {
                 frappe.route_options = {
                   "supplier": frm.doc.vendor_supplier,
                   "contract_number": frm.doc.contract_number,
                 };
              frappe.new_doc("Purchase Order");
        		});
           
           frm.add_custom_button(__('Make Purchase Invoice'), () => {
                 frappe.route_options = {
                   "supplier": frm.doc.vendor_supplier,
                   "contract_number": frm.doc.contract_number,
                 };
              frappe.new_doc("Purchase Invoice");
        		});
           
          } else {
           frm.add_custom_button(__('Make Purchase Invoice'), () => {
                 frappe.route_options = {
                   "supplier": frm.doc.vendor_supplier,
                   "contract_number": frm.doc.contract_number,
                 };
              frappe.new_doc("Purchase Invoice");
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
    
});
