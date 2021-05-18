import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

// Initiate instances
const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

// Call marker to be pinpointed
customMap.addMarker(user);
customMap.addMarker(company);
