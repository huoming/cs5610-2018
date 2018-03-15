export class Website {
  _id: String;
  name: String;
  developerId: String;
  description: String;

  constructor(_id: String, name: String, developerId: String, description: String) {
    this._id = _id;
    this.name = name;
    this.developerId = developerId;
    this.description = description;
  }

}
