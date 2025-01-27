import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'https://localhost:5123/api/todos';

  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get(`${this.baseUrl}`);
  }

  addTask(task: any) {
    return this.http.post(`${this.baseUrl}`, task);
  }

  updateTask(id: number, task: any) {
    return this.http.put(`${this.baseUrl}/${id}`, task);
  }

  deleteTask(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
