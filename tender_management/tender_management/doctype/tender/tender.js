// Copyright (c) 2019, Minyx360 and contributors
// For license information, please see license.txt

frappe.ui.form.on('Tender', {
	refresh: function(frm) {
 
    if (!frm.doc.tender_ref_number) {
     let d = new Date();
     let num = d.valueOf();
     frm.set_value("tender_ref_number", num);
   }
   
   if (frm.doc.docstatus===0){
     let total_lots = frm.doc.lot_number.length
     frm.set_value("number_of_lots", total_lots); 
   }
   
   
 if (frm.doc.deadline) {
    if (frm.doc.docstatus===1){
    	if(frappe.datetime.get_diff(frm.doc.deadline, frappe.datetime.get_today()) >= 0){
         frm.add_custom_button(__('Make Bids'), () => {
             frappe.route_options = {
               "tender": frm.doc.tender_name,
             };
          frappe.new_doc("Bids");
    		});
      }
	}
// console.log(frappe.datetime.get_diff(frm.doc.deadline, frappe.datetime.get_today()))
 
  if (frm.doc.docstatus===1){
  	if(frappe.datetime.get_diff(frm.doc.deadline, frappe.datetime.get_today()) < 0){
      frm.add_custom_button(__('Make Contracts'), () => {
           frappe.route_options = {
             "tender": frm.doc.tender_name,
           };
        frappe.new_doc("Contracts");
  		});
     }
    }    
   }
	},
 
 
});
