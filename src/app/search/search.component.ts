import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  searchName: String = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['searchName']) {
        this.searchName = params['searchName'];
      }
    });
  }

  search():void {
    if(this.searchName){
      this.router.navigateByUrl('/search/' + this.searchName);

    }else{
      this.router.navigate([''])
    }
  }
}
