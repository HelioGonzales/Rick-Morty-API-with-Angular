import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MainServiceService } from 'src/app/core/service/main-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  query: any;
  resCharacter: any;
  infoCharacter: any;
  displayedColumns: string[] = [
    'image',
    'id',
    'name',
    'gender',
    'species',
    'favorites',
  ];

  pageEvent!: PageEvent;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: MainServiceService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.has('search')) {
        this.query = params.get('search');
        console.log(this.query);
      }
    });

    this.showCharactersSearched();

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  showCharactersSearched() {
    this.service.searchCharacters(this.query).subscribe((res: any) => {
      const { results, info } = res;
      this.resCharacter = results;
      this.infoCharacter = info;
      console.log(this.resCharacter);
    });
  }

  onPaginateChange(event: PageEvent) {
    let page = event.pageIndex;
    let size = event.pageSize;

    page = page + 1;
    this.service
      .searchCharactersPerPage(this.query, page, size)
      .subscribe((res: any) => {
        const { results, info } = res;
        this.resCharacter = results;
        this.infoCharacter = info;
      });
  }

  toFavorites(id: any, species: any, gender: any, image: any, name: any) {
    let arr = JSON.parse(localStorage.getItem('arr2') || '[]');
    let fav = {
      id,
      species,
      gender,
      image,
      name,
    };

    if (arr.filter((e: any) => e.id === fav.id) - 1) {
      arr.push(fav);
      console.log(arr);

      localStorage.setItem('arr2', JSON.stringify(arr));
    }
  }
}
