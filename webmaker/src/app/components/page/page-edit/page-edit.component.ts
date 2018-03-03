import { Component, OnInit } from '@angular/core';
import {PageService} from "../../../services/page.service.client";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  websiteId: string;
  pageId: string;
  errFlag: boolean;
  error: string;
  alert: string;
  page = {name: ''};

  constructor(private _pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    // setting err flag as false by default
    this.errFlag = false;
    this.error = 'Enter the name of the Page';
    this.alert = '* Enter the Page name';

    // fetching websiteId and pageId from current route
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.websiteId = params['websiteId'];
          this.pageId = params['pageId'];
        }
      );

    // fetch current page details
    this._pageService.findPageById(this.pageId)
      .subscribe(
        (data: any) => {this.page = data; console.log(this.page);}
      );
  }

  // call update page from Page Service to update the page name and title
  updatePage(){

    if(this.page.name == '')
      this.errFlag = true;
    else {
      this._pageService.updatePage(this.pageId, this.page)
        .subscribe(
          (data: any) => this.router.navigate(['/user', 'website', this.websiteId, 'page']),
          (error: any) => console.log(error)
        );
    }
  }

  // delete page based on current pageId
  deletePage(){

    this._pageService.deletePage(this.pageId)
      .subscribe(
        (data: any) => this.router.navigate(['/user', 'website', this.websiteId, 'page']),
        (error: any) => console.log(error)
      );

  }

}
