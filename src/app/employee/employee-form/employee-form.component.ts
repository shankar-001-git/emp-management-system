import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service'; // Import the service
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { Input } from '@angular/core';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent {
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService ,private router:Router) { // Inject the service
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      designation: ['', Validators.required],
      department: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      this.employeeService.addEmployee(this.employeeForm.value); // Save the new employee
      alert('Employee added successfully!');
      this.employeeForm.reset();
      this.router.navigate(['/list'])
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}


// @NgModule({
//   declarations: [EmployeeListComponent],
//   imports: [
//     CommonModule
//   ]
// })
// export class YourModule {}
