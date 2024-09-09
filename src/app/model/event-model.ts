export class EventModel {
  id?: number;
  name?: string;
  date?: string;
  time?: string;
  price?: number;
  image?: string;
  locations = new LocationAddress();
  sessions = new Array<Session>();
}

 export class LocationAddress {
  address?: string;
  city?: string;
  country?: string;
}

export class Session {
  id?: number;
  name?: string;
  presenter?: string;
  duration?: string;
  level?: string;
  abstract?: string;
  voters = new Array<string>;
}
