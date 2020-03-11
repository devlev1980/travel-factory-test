import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material';
import {IContact} from '../../models/contact';

class DialogData {
}

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {
  editForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: IContact, private fb: FormBuilder) {
  }

  ngOnInit() {
    console.log(this.data);
    this.editForm = this.fb.group({
      name: [this.data.name],
      imgSrc: [this.data.imgSrc],
      imgAlt: [this.data.imgAlt],
      position: [this.data.position],
      city: [this.data.city],
      state: [this.data.state],
      company_name: [this.data.company_name],
      company_address: this.fb.group({
        street: [this.data.company_address.street],
        city: [this.data.company_address.city]
      }),
      phone: [this.data.phone]
    });
  }
  getImgSrc() {
    return this.editForm.get('imgSrc').value;
  }

  getImgAlt() {
    return this.editForm.get('imgAlt').value;
  }

}
