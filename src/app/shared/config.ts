import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const server_url = environment.server_url;
export const api_prefix = environment.api_prefix;

export const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };