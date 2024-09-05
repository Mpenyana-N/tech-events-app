export class EventModel {
  id?: number;
  name?: string;
  date?: string;
  time?: string;
  price?: number;
  image?: string;
  locations?: typeof LocationAddress | any = LocationAddress;
}

 export class LocationAddress {
  address?: string;
  city?: string;
  country?: string;
}
