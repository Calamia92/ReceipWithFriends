import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  async createUser(data: any) {
    try {
      const response = await fetch('http://localhost:8088/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Erreur de connexion');
      }

      return response.json();
    } catch (error) {
      console.error('Erreur : ', error);
      throw error;
    }
  }

  async loginUser(data: any): Promise<any> {
    try {
      const response = await fetch('http://localhost:8088/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Erreur de connexion');
      }

      return response.json();
    } catch (error) {
      console.error('Erreur : ', error);
      throw error;
    }
  }

  async getUser() {
    try {
      const id = this.getCustomerId();
      if (id) {
        const url = `http://localhost:8088/api/user/${id}`;
        const req = await fetch(url, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!req.ok) {
          throw new Error('Erreur de connexion');
        }
        return req.json();
      }else {
        return false;
      }
    } catch (err) {
      // console.log(err)
      // throw new Error('Error :' + err);
    }
  }

  getCustomerId() {
    return localStorage.getItem('user');
  }

  async logoutCustomer() {
    // try {
    //   const id = this.getCustomerId();
    //   const url = `http://localhost:8088/api/user/logout`;
    //   const req = await fetch(
    //     url, {
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     }
    //   );

    //   if (!req.ok) {
    //     throw new Error('Erreur de connexion');
    //   }

    localStorage.removeItem('user');
    //   req.json();
    // } catch (err) {
    //   console.log(err)
    //   throw new Error('Error :' + err);
    // }
  }
}
