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
      frm.add_fetch('bid','bid_value','contract_value')
      
      frm.add_fetch('payment_document_id','date','date_the_payment_was_made')
      frm.add_fetch('payment_document_id','amount_paid','amount_paid')
      
      if (!frm.doc.contract_number) {
       let d = new Date();
       let num = d.valueOf();
       frm.set_value("contract_number", num);
     }
     
   console.log(frm.doc)
   
  
       frm.set_query("payment_document_id", "payments", function(doc) {
      //	console.log(Object.values(doc.payments))
      console.log(frm)
      	return{
      		filters: [
      	//		['Contract Payments', 'contract', 'not in', 'Contract Payments', 'contract',],
      	//		['Contract Payments', 'is_summitted', '=', 1],
      			['Contract Payments', 'contract', '=', doc.name]
            
      		]
      	}
      });
   
     
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
    
    "procurement_type": function(frm) {
      
      switch (frm.doc.procurement_type) {
        case 'Goods':
          get_tax(frm, 5);
          break;
        case 'Works':
          get_tax(frm, 5);
          
          break;
        case 'Non-Consultant Services':
          get_tax(frm, 5);
          
          break;
        
        case 'Consultant Services':
          get_tax(frm, 10);
          
          break;
          
        default:
          console.log('!Oops, wrong ' + frm.doc.procurement_type + ' selection');
      }
      
    },
    
});

frappe.ui.form.on('Contracts', 'validate', function(frm) {
  set_total_balance(frm)
});

frappe.ui.form.on('Contract Payment Slip', {

  payments_add: function(frm) {
         set_total_balance(frm)
     },
    
   payments_remove: function(frm) {
       let balance = 0.0;
   
       $.each(frm.doc.payments, function(i, row){
        balance += flt(row.amount_paid)
      })
      frm.set_value('total_paid', flt(balance));
      frm.set_value('balance', ( flt(frm.doc.contract_value_after_tax) - flt(balance) ));
      frm.refresh();
   }
   
});



//frappe.ui.form.on('Contract Payment Slip', 'refresh', function(frm) {
 // console.log(frm.doc)
//});

//frappe.ui.form.on("Child Table", "fieldname", function(frm, child_doctype, child_name) { });



frappe.ui.form.on('Contract Payment Slip', 'amount_paid', function(frm) {
  set_total_balance(frm)
});

let set_total_balance = function(frm) {
  let balance = 0.0;
  $.each(frm.doc.payments, function(i, row){
    balance += flt(row.amount_paid)
  })
  
  frm.set_value('total_paid', flt(balance));
  frm.set_value('balance', ( flt(frm.doc.contract_value_after_tax) - flt(balance) ));
  frm.refresh();
}

const get_tax = (function(frm, with_holding_tax_per=5) {
  
  let contract_value = frm.doc.contract_value;
  let vat = ( contract_value / 100) * 5;
  let with_holding_tax = ( contract_value / 100 ) * with_holding_tax_per;
  let stamp_duty = ( contract_value / 100 ) * 1;
  let total_tax = ( Number(vat) + Number(with_holding_tax) + Number(stamp_duty) );
  let contract_value_after_tax = flt(frm.doc.contract_value) - total_tax;
  
  console.log(vat, with_holding_tax, stamp_duty, contract_value)
  frm.set_value('vat', flt(vat));
  frm.set_value('wht', flt(with_holding_tax) );
  frm.set_value('stamp_duty', flt(stamp_duty));
  frm.set_value('total_tax', total_tax);
  
  frm.set_value('contract_value_after_tax', contract_value_after_tax);
  frm.refresh();

})
