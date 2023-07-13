import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Opportunity } from 'src/types/opportunity';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

interface Response {
  opportunities: Opportunity[];
  count: number;
}

@Injectable({
  providedIn: 'root',
})
export class OpportunitiesService {
  baseUrl = environment.api;

  constructor(private http: HttpClient) {}

  async getOpportunities({
    page,
    limit,
    search,
    date,
  }: {
    page: number;
    limit: number;
    search?: string;
    date?: string;
  }): Promise<Response> {
    const params = {
      page: page,
      limit: limit,
      search: search || '',
      date: date || '',
    };
    return await lastValueFrom(
      this.http.get<Response>(`${this.baseUrl}/opportunities`, {
        params,
      })
    );
  }

  async getTotal(search: string = '', date: string = ''): Promise<number> {
    const params = {
      search,
      date,
    };
    return await lastValueFrom(
      this.http.get<number>(`${this.baseUrl}/opportunities/total`, {
        params,
      })
    );
  }
}
