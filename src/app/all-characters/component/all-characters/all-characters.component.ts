import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MainServiceService } from 'src/app/core/service/main-service.service';

@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrls: ['./all-characters.component.css'],
})
export class AllCharactersComponent implements OnInit {
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

  arr: any[] = [];
  favorite: any;

  pageEvent!: PageEvent;

  constructor(private mainService: MainServiceService) {}

  ngOnInit(): void {
    this.allCharacters();
  }

  allCharacters() {
    return this.mainService.getAllCharacters().subscribe((res: any) => {
      const { results, info } = res;
      this.resCharacter = results;
      this.infoCharacter = info;
      console.log(this.resCharacter, this.infoCharacter);
    });
  }

  onPaginateChange(event: PageEvent) {
    let page = event.pageIndex;
    let size = event.pageSize;

    page = page + 1;
    this.mainService
      .getAllCharactersPerPage(page, size)
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
