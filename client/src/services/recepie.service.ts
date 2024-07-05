import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {
  private apiUrl: string = 'http://localhost:8088'; // Adjust URL as per your backend setup

  constructor() { }

  getRecettes(): Promise<any[]> {
    return fetch(`${this.apiUrl}/recipes`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
        throw error;
      });
  }

  getRecette(id: string): Promise<any> {
    return fetch(`${this.apiUrl}/recipes/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(error => {
        console.error(`Error fetching recipe with ID ${id}:`, error);
        throw error;
      });
  }
}
