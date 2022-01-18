import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService 
{
  private apiUrl: string=`${environment.tasksApi}/tasks/`;  
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

 // Create
 createTask(data): Observable<Task> 
 {
  let API_URL = `${this.apiUrl}/create`;
  return this.http.post<Task>(API_URL, data)
    .pipe(
      catchError(this.error)
    )
}

getTask(id): Observable<Task>
{
  let API_URL = `${this.apiUrl}/${id}`;
  return this.http.get<Task>(`${this.apiUrl}`)
                  .pipe(
                        catchError(this.error)
                  );
}
getAllTasks() : Observable<Task[]>
{
  return this.http.get<Task[]>(`${this.apiUrl}`)
                  .pipe(
                        catchError(this.error)
                  );
}

 getTasksForToday(): Observable<Task[]>
 {
   return this.http.get<Task[]>(`${this.apiUrl}/today`)
     .pipe(
       catchError(this.error)
     );
 }

getTasksInProgress(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/$filter=Status eq 'in progress'`)
      .pipe(
        catchError(this.error)
      );
  }

// Update
updateTask(id, data): Observable<Task> {
  let API_URL = `${this.apiUrl}/${id}`;
  return this.http.put<Task>(API_URL, data, { headers: this.headers })
    .pipe(
      catchError(this.error)
    );
}
// Delete
deleteTask(id): Observable<any> {
  var API_URL = `${this.apiUrl}/${id}`;
  return this.http.delete(API_URL)
    .pipe(
      catchError(this.error)
    );
}

// Handle Errors 
error(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    errorMessage = error.error.message;
  } else {
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}
}
