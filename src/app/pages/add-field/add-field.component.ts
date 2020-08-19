import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup,FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-field',
  templateUrl: './add-field.component.html',
  styleUrls: ['./add-field.component.css']
})
export class AddFieldComponent implements OnInit {
addField:FormGroup;
itemRows:FormArray;
  FormGroup: any;
  constructor(private fb:FormBuilder) { 
    this.addField=this.fb.group({
      cust_name:[''],
      cust_age:[''],
    });
    this.itemRows=this.fb.array([]);
  }

  ngOnInit(): void {
    this.addField.addControl('itemRows',this.itemRows)
  }

addNewRow(){
  this.itemRows.push(this.AddProduct());
}
AddProduct():FormGroup{
  return this.fb.group({
    cust_hobbies:[''],
  });
}
removeProduct() {
  const itemrows = <FormArray> this.addField.controls.itemRows;
  (itemrows.length >= 1) ? itemrows.removeAt(itemrows.length - 1) : false;
} 
}

