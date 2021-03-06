import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor(private httpClient: HttpClient) {}

  getTeams(): Observable<Selection> {
    return this.httpClient.put<Selection>(
      'https://jsonplaceholder.typicode.com/posts/1',
      {
        teams: [
          {
            name: 'Frontend Team',
            percentageOfAbsent: [0, 2, 0, 0, 1, 22, 2, 2, 2, 2, 11, 1],
            members: [
              {
                name: 'FE_Team_User1',
                vacations: [
                  {
                    startDate: '20.12.2020',
                    endDate: '22.12.2020',
                    type: 'Paid',
                  },
                  {
                    startDate: '20.11.2020',
                    endDate: '22.11.2020',
                    type: 'Paid',
                  },
                ],
              },
              {
                name: 'FE_Team_User1',
                vacations: [
                  {
                    startDate: '20.02.2020',
                    endDate: '22.02.2020',
                    type: 'UnPaid',
                  },
                  {
                    startDate: '20.03.2020',
                    endDate: '22.03.2020',
                    type: 'UnPaid',
                  },
                ],
              },
            ],
          },
          {
            name: 'Backend Team',
            percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
            members: [
              {
                name: 'FE_Team_User1',
                vacations: [
                  {
                    startDate: '15.02.2020',
                    endDate: '22.02.2020',
                    type: 'UnPaid',
                  },
                  {
                    startDate: '20.03.2020',
                    endDate: '22.03.2020',
                    type: 'UnPaid',
                  },
                ],
              },
              {
                name: 'FE_Team_User1',
                vacations: [
                  {
                    startDate: '20.02.2020',
                    endDate: '22.02.2020',
                    type: 'UnPaid',
                  },
                  {
                    startDate: '20.03.2020',
                    endDate: '22.03.2020',
                    type: 'UnPaid',
                  },
                ],
              },
            ],
          },
          {
            name: 'Backend Team',
            percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
            members: [
              {
                name: 'FE_Team_User1',
                vacations: [
                  {
                    startDate: '15.02.2020',
                    endDate: '22.02.2020',
                    type: 'UnPaid',
                  },
                  {
                    startDate: '20.03.2020',
                    endDate: '22.03.2020',
                    type: 'UnPaid',
                  },
                ],
              },
              {
                name: 'FE_Team_User1',
                vacations: [
                  {
                    startDate: '20.02.2020',
                    endDate: '22.02.2020',
                    type: 'UnPaid',
                  },
                  {
                    startDate: '20.03.2020',
                    endDate: '22.03.2020',
                    type: 'UnPaid',
                  },
                ],
              },
            ],
          },
          {
            name: 'Backend Team',
            percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
            members: [
              {
                name: 'FE_Team_User1',
                vacations: [
                  {
                    startDate: '15.02.2020',
                    endDate: '22.02.2020',
                    type: 'UnPaid',
                  },
                  {
                    startDate: '20.03.2020',
                    endDate: '22.03.2020',
                    type: 'UnPaid',
                  },
                ],
              },
              {
                name: 'FE_Team_User1',
                vacations: [
                  {
                    startDate: '20.02.2020',
                    endDate: '22.02.2020',
                    type: 'UnPaid',
                  },
                  {
                    startDate: '20.03.2020',
                    endDate: '22.03.2020',
                    type: 'UnPaid',
                  },
                ],
              },
            ],
          },
          {
            name: 'Backend Team',
            percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
            members: [
              {
                name: 'FE_Team_User1',
                vacations: [
                  {
                    startDate: '15.02.2020',
                    endDate: '22.02.2020',
                    type: 'UnPaid',
                  },
                  {
                    startDate: '20.03.2020',
                    endDate: '22.03.2020',
                    type: 'UnPaid',
                  },
                ],
              },
              {
                name: 'FE_Team_User1',
                vacations: [
                  {
                    startDate: '20.02.2020',
                    endDate: '22.02.2020',
                    type: 'UnPaid',
                  },
                  {
                    startDate: '20.03.2020',
                    endDate: '22.03.2020',
                    type: 'UnPaid',
                  },
                ],
              },
            ],
          },
        ],
      }
    );
  }
}
