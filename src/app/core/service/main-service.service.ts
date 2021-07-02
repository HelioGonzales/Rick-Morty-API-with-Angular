import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MainServiceService {
  constructor(private http: HttpClient) {}

  getAllCharacters() {
    return this.http.get(`${environment.API_CHARACTER}`);
  }

  getAllCharactersPerPage(page: any, size: any) {
    return this.http.get(
      `${environment.API_CHARACTER}/?page=${page}&size=${size}`
    );
  }

  searchCharacters(query: any) {
    return this.http.get(`${environment.API_CHARACTER}/?name=${query}`);
  }

  searchCharactersPerPage(query: any, page: any, size: any) {
    return this.http.get(
      `${environment.API_CHARACTER}/?name=${query}&page=${page}&size=${size}`
    );
  }

  getDetails(id: any) {
    return this.http.get<any>(`${environment.API_CHARACTER}/${id}`);
  }
}
