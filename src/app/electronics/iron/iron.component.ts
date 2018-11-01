import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-iron',
  templateUrl: './iron.component.html',
  styleUrls: ['./iron.component.css'],
  providers: [NgbCarouselConfig]
})
export class IronComponent implements OnInit {

  load;
	air;
	waterheater: any;
	Bwaterheater: any;

  constructor(config: NgbCarouselConfig ,private dbService: DataService) 
  {
    config.interval = 2000;
    config.wrap = false;
    config.keyboard = false;
   }
         
  ngOnInit() {
    this.load=this.dbService.getAirs().subscribe(air =>{
			this.air = air 
		})
    this.Bwaterheater = this.dbService.getWaterheaters().subscribe(waterheater => {
			this.waterheater = waterheater
		})
	
  }
  ngOnDestroy() {
		this.load.unsubscribe();
		this.Bwaterheater.unsubscribe();
	  }

}
