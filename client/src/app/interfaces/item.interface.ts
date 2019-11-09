export default class ItemInterface {

  id: number;
  title: string;
  img: string;
  imgLarge: string;
  description: string;
  text: string;
  tags: string[];

  constructor(id: number, title: string, img: string, imgLarge: string, description: string, text: string, tags: string[]) {

    this.id = id;
    this.title = title;
    this.img = img;
    this.imgLarge = imgLarge;
    this.description = description;
    this.text = text;
    this.tags = tags;
  }
}
