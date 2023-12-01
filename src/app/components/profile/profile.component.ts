import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileData } from '../../data/profile';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  profileColumns = ProfileData;
  profileForm! : FormGroup;

  constructor(private fb: FormBuilder) {
    // this.profileForm = this.fb.group({
    //   gender: ['male', [Validators.required]]
    // });
    this.profileForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.profileColumns.forEach((item) => {
      this.profileForm.addControl(item.columnName, new FormControl(null, this.getValidators(item)));
    });
  }

  getValidators(item: any) {
    let validators = [];
    if(item.required) {
      validators.push(Validators.required);
    }
    // if(item.maxLength) {
    //   validators.push(Validators.maxLength(item.maxLength));
    // }
    return validators;
  }

  get f() {
    return this.profileForm.controls;
  }

  onRadioChange(event: Event, columnName: string, option: string) {
    this.selectedOptions[columnName] = option;
    console.log(this.selectedOptions);
  }

  selectedOptions: { [key: string]: string | null } = {};
  isSelected(columnName: string, option: string): boolean {
    return this.selectedOptions[columnName] === option;
  }

  testme() {
    alert('hello');
  }


  onSubmit() {
    console.log(this.profileForm);
    alert('Submitted: Here we go!');
  }

}
