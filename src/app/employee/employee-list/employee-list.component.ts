import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { CommonModule } from '@angular/common';

interface Employee {
  id: number;
  name: string;
  designation: string;
  department: string;
}

@Component({
  imports: [ CommonModule],
  selector: 'app-employee-list',
  standalone: true,
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];  // Ensure employees is an array of Employee type
  // editEmployee: Employee | null = null; // Add an editEmployee field for the current employee being edited

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.loadEmployee();  // Load the employees when the component initializes
  }

  // Method to load employees using the service
  loadEmployee() {
    this.employeeService.getEmployees().subscribe((data: Employee[]) => {
      this.employees = data;  // Assign the data fetched from the service
    });
  }

  

  // Method to edit an employee
  // editEmployee(employee: any) {
  //   this.selectedEmployee = { ...employee };  // Pass a copy of the employee
  // }

  // Method to cancel editing
  // cancelEdit() {
  //   this.editEmployee = null;  // Reset the editEmployee to null when editing is canceled
  // }

  // Method to save the edited employee (this part will need to be implemented)
  // saveEdit() {
  //   if (this.editEmployee) {
  //     this.employeeService.updateEmployee(this.editEmployee).subscribe(() => {
  //       this.loadEmployee();  // Reload the employee list after saving the changes
  //       this.editEmployee = null;  // Reset the editEmployee after saving
  //     });
  //   }
  // }
}
