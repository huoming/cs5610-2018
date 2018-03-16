export class Widget {
  _id: String;
  type: String;
  size: Number;
  text: String;
  src: String;

  constructor(_id: String, type:String, size: Number, text: String, src: String){
    this._id = _id;
    this.type = type;
    this.size = size;
    this.text = text;
    this.src = src;
  }
}
