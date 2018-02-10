export class Widget {
  _id: String;
  widgetType: String;
  pageId: String;
  size: String;
  text: String;
  url: String;
  width: String;

  constructor(_id, type, pageId, size= '1', text = 'text', width = '100%', url = 'url') {
    this._id = _id;
    this.widgetType = type;
    this.pageId = pageId;
    this.size = size;
    this.url = url;
    this.width = width;
  }
}

