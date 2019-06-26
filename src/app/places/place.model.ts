export class Place {
  public name: string;
  public description: string;
  public shortDescription: string;
  public imagePath: string;
  public points: string;

  constructor(name: string, description: string, shortDesc: string, imagePath: string, points: string) {
    this.name = name;
    this.description = description;
    this.shortDescription = shortDesc;
    this.imagePath = imagePath;
    this.points = points;
  }

}
