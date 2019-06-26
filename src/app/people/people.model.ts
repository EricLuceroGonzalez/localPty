export class People {
  public name: string;
  public description: string;
  public shortDescription: string;
  public imagePath: string;
  constructor(name: string, description: string, shortDesc: string, imagePath: string, points: string) {
    this.name = name;
    this.description = description;
    this.shortDescription = shortDesc;
    this.imagePath = imagePath;
  }

}
