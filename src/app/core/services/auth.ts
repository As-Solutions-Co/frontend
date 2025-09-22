import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private url = 'http://127.0.0.1:8000/auth';

  constructor(private http: HttpClient) { }

  register(username: string, password: string, cPassword: string | null, main_color: string | null, dane_code: string | null) {
    return this.http.post(`${this.url}/register`,
      { username, password },
      { withCredentials: true }
    )
  }

  login(username: string, password: string) {
    return this.http.post(`${this.url}/login`, { username, password }, { withCredentials: true })
  }
}
