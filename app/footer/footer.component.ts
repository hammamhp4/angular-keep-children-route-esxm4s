import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterCmp {
  atcList = [{ id: 1 }, { id: 2 }, { id: 3 }];
  atcId: number;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(
      (params) => (this.atcId = Number(params['atcId']))
    );
  }

  navigateToAtc(atcId: number) {
    if (atcId) {
      this.router.navigate(['../', atcId], { relativeTo: this.route });
    }
  }
}
