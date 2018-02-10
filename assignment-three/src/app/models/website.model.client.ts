export class Website {
  _id: String;
  name: String;
  developId: String;
  description: String;

  constructor(_id: String, name: String, developerId: String, description: String) {
    this._id = _id;
    this.name = name;
    this.developId = developerId;
    this.description = description;
  }

}
