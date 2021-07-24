import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../models/education';
import { Experience } from '../models/experience';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private httpClient: HttpClient) {}

  getProfile(): Observable<any> {
    return this.httpClient.get('/api/profile');
  }

  createProfile(profile: Profile): Observable<any> {
    return this.httpClient.post('/api/profile', profile);
  }
  createExperience(experience: Experience): Observable<any> {
    return this.httpClient.post('/api/profile/experience', experience);
  }
  createEducation(education: Education): Observable<any> {
    return this.httpClient.post('/api/profile/education', education);
  }

  deleteExperience(id: string): Observable<any> {
    return this.httpClient.delete('/api/profile/experience/' + id);
  }
}
