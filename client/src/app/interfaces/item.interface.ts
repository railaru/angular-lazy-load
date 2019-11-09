export default class ItemInterface {

  id: number;
  title: string;
  type: string;
  img: string;
  imgLarge: string;
  description: string;
  text: string;
  tags: string[];

  constructor(id: number, title: string, type: string, img: string, imgLarge: string, description: string, text: string, tags: string[]) {

    this.id = id;
    this.title = title;
    this.type = type;
    this.img = img;
    this.imgLarge = imgLarge;
    this.description = description;
    this.text = text;
    this.tags = tags;
  }
}
