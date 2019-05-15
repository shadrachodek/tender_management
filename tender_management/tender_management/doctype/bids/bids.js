// Copyright (c) 2019, Minyx360 and contributors
// For license information, please see license.txt

frappe.ui.form.on('Bids', {
	refresh: function(frm) {
 
  frm.add_fetch('tender','tender_ref_number','tender_ref_number')
          
     if (!frm.doc.application_number) {
     let d = new Date();
     let num = d.valueOf();
     frm.set_value("application_number", num);
   }
      
	 },
   
   "tender": function(frm) {
     let lots;
     let lotOption = [];
          
		frappe.call({
			"method": "frappe.client.get",
			"args": {
				"doctype": "Tender",
				"name": frm.doc.tender
			},
			"callback": function(response) {
				
				lots = response.message.lot_number;
				
				 if (lots.length > 0) {
				     
    				for (let i in lots) {
    		             lotOption[lots[i].lot_number] = lots[i].description;
    	        	}
    	        	
    	        	frm.set_df_property('lot_number', 'options', Object.keys(lotOption)); 
    	        	
				 } else {
				     
				     frm.set_df_property('lot_number', 'options', ['No Lots']); 
     	        	
				 }
				 frm.refresh_field('lot_number');
			}
		});
	},
 
 "lot_number": function(frm) {
     let lots;
     let lotValue = frm.fields_dict['lot_number'].value;
          
		frappe.call({
			"method": "frappe.client.get",
			"args": {
				"doctype": "Tender",
				"name": frm.doc.tender
			},
			"callback": function(response) {
				
				lots = response.message.lot_number;
				
				 if (lots.length > 0) {
				     
    				for (let i in lots) {
    		             if (lots[i].lot_number === lotValue) {
                         frm.set_value("description", lots[i].description);   
                         frm.set_value("lot_id", lots[i].lot_id); 
                   }
    	        	}
				 } else {
				     
				     msgprint("No Lot");
     	        	
				 }
				 frm.refresh_field('lot_number');
			}
		});
	},

});
