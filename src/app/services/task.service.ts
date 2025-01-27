import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://localhost:5123/api/todos';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any[]> { 
    debugger
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  addTask(task: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, task);
  }

  updateTask(id: number, task: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, task);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
