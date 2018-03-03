import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  websiteId: string;
  error: string;
  alert: string;
  errFlag: boolean; // flag to show/hide error alerts
  page = {
    name : '',
    title : '',
    widgets : [ ]
  };

  constructor(private _pageService: PageService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    // setting err flag as false by default
    this.errFlag = false;
    this.error = 'Enter the name of the Page';
    this.alert = '* Enter the Page name';

    // fetching userId and websiteId from current url
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.websiteId = params['websiteId'];
      }
    );

  }

  createPage() {

    if (this.page.name === '') {
      // checking if page name is blank
      this.errFlag = true;
    } else {
      this._pageService.createPage(this.websiteId, this.page)
        .subscribe(
          (data: any) => this.router.navigate(['/user', 'website', this.websiteId, 'page']),
          (error: any) => console.log(error)
        );
    }
  }

}
