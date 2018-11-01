import { Component, OnInit } from '@angular/core';

import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../services/data.service';

@Component({
	templateUrl: './starter.component.html',
	styleUrls: ["./starter.component.css"],
	
})
export class StarterComponent implements OnInit {
		
	load;
	air;
	waterheater: any;
	Bwaterheater: any;
	
	constructor(config: NgbCarouselConfig ,private dbService: DataService) { 
		config.interval = 10000;
		config.wrap = false;
		config.keyboard = false;
	}
	
	ngOnInit(){
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