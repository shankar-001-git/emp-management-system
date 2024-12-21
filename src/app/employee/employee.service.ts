import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'http://localhost:3000/employees'; 
  private employees = [
    { id: 1, name: 'John Doe', designation: 'Software Engineer', department: 'IT' },
    { id: 2, name: 'Jane Smith', designation: 'Project Manager', department: 'Operations' },
    { id: 3, name: 'Michael Brown', designation: 'HR Specialist', department: 'Human Resources' },
  ];

  // Get all employees
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Add a new employee
  addEmployee(employee: any) {
    this.employees.push({ id: this.employees.length + 1, ...employee });
  }

  updateEmployee(employee: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${employee.id}`, employee);  // PUT request for update
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

