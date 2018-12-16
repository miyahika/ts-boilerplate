export class Shows {
  public shows: Show[];
  constructor(shows: Show[]) {
    this.shows = shows;
  }
}

export interface Show {
  score: Number;
  show: Detail;
}

export interface Detail {
  id: string;
  name: string;
  summary: string;
  image: {
    medium: string;
  };
}
