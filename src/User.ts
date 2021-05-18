import faker from 'faker';
import { Pinpoint } from './CustomMap';

// Use "implements" so TS can help us to fullfil the requirements
export class User implements Pinpoint {
  name: string;
  color: 'blue';
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.findName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
      <div>
        <h3>User: ${this.name}</h3>
      </div>
    `;
  }
}
