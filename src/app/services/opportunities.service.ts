import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpService } from './http.service';
import { Opportunity } from 'src/types/opportunity';

interface Response {
  opportunities: Opportunity[];
  count: number;
}

@Injectable({
  providedIn: 'root',
})
export class OpportunitiesService {
  baseUrl = environment.api;

  constructor(private http: HttpService) {}

  async getOpportunities(
    page: number,
    limit: number,
    search?: string,
    date?: string
  ): Promise<Response> {
    const result: any = this.http.get(
      `${this.baseUrl}/opportunities?page=${page}&limit=${limit}${
        search ? `&search=${search}` : ''
      }${date ? `&date=${date}` : ''}`
    );

    return result;
  }
}
