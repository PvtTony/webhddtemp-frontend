import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { environment } from '../../environments/environment';

export const server_url = environment.server_url;
export const api_prefix = environment.api_prefix;

export const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

export function handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // Client side err (eg. Network)
    console.error("An error occurred: ", error.error.message);
  }
  else {
    // Backend
    console.error(`Backend returned code ${error.status}, body was ${error.error}`);
  }
  return throwError('Error occurred! Please try again!');
}