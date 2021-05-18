import faker from 'faker';
import { Pinpoint } from './CustomMap';

// Use "implements" so TS can help us to fullfil the requirements
export class Company implements Pinpoint {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: 'red';

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.latitude()),
    };
  }

  markerContent(): string {
    return `
      <div>
        <h3>Company: ${this.companyName}</h3>
        <h4>Catch phrase: ${this.catchPhrase}</h4>
      </div>
    `;
  }
}
