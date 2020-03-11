import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IContact} from '../models/contact';
import {contacts} from '../../assets/mock/contacts';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: IContact[] = [];
  googleApi: string = 'https://maps.googleapis.com/maps/api/geocode/json?address=paris&key=AIzaSyDKvvBgAkSCugEbXckutuAFuqPzthsCnJ8';

  constructor(private http: HttpClient) {
    this.contacts = contacts;

  }

  getContacts() {
    return new Observable<IContact[]>(subscriber => {
      subscriber.next(this.contacts);
    });
  }

  getCoordinates(address) {
    const googleApi = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDKvvBgAkSCugEbXckutuAFuqPzthsCnJ8`;

    return this.http.get(googleApi);
  }
}
