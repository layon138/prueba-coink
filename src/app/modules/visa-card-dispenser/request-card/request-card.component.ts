import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Character } from 'src/app/interfaces/charaters.interface';
import { RickAndMortyService } from 'src/app/services/rick-morty.service';

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.scss']
})
export class RequestCardComponent implements OnInit {
  public validation_messages = {
    filterDate: [
      { type: 'required', message: 'Este campo es obligatorio' },
    ],
    filterSentence: [
      { type: 'required', message: 'Este campo es obligatorio' },
    ],
    filterName: [
      { type: 'required', message: 'Este campo es obligatorio' },
    ],
  };
  public filterForm
  public listOfCharacters:Character[]=[]
  constructor(private rickAndMoryService:RickAndMortyService) { 
    this.filterForm = new FormGroup({
      filterSentence: new FormControl('',[] ),
      filterName: new FormControl( '',[] ),
      filterDate: new FormControl( '',[] ),
    });
  }

  ngOnInit(): void {
    this.searchCharacters()
  }

  searchCharacters(){
    let filter=""
    if(this.filterForm.get('filterName')?.value !="" || this.filterForm.get('filterDate')?.value!=""){
      filter="?"+ 'name='+this.filterForm.get('filterName')?.value+'&type='+this.filterForm.get('filterDate')?.value
    }
    this.rickAndMoryService.getListCharacters(filter).subscribe((responseCharacters=>{
      this.listOfCharacters=responseCharacters
    }))
  }

  clearAllFilters(){
    this.filterForm.get('filterName')?.setValue('') 
    this.filterForm.get('filterDate')?.setValue('') 
    this.searchCharacters()
  }

}
