import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {
  addForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.addForm = this.fb.group({
      name: ['', Validators.required],
      imgSrc: ['alex_jonathan.jpg'],
      imgAlt: ['alex_jonathan'],
      position: [''],
      city: [''],
      state: [''],
      company_name: [''],
      company_address: this.fb.group({
        street: [''],
        city: ['']
      }),
      phone: ['', [Validators.pattern('^[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$')]]
    });
  }

  getImgSrc() {
    return this.addForm.get('imgSrc').value;
  }

  getImgAlt() {
    return this.addForm.get('imgAlt').value;
  }

}
