import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Item } from '../../../models/Item';

@Component({
  selector: 'app-one-door-refrigerators',
  templateUrl: './one-door-refrigerators.component.html',
  styleUrls: ['./one-door-refrigerators.component.css']
})
export class OneDoorRefrigeratorsComponent implements OnInit {

  Bonedoorrefrigerators : any;
  productName:any;
  productObjectByProductName:any[];
  BestPrice:any[];
  allProduct;
  img: any;
  pnames: any;
  State: boolean;
  constructor(private dbService:DataService) { }

  ngOnInit() {
    this.Bonedoorrefrigerators=this.dbService.getOnedoorrefrigerators().subscribe(onedoorrefrigerators =>{
    
    
      this.allProduct = onedoorrefrigerators;
  
      // console.log('allProduct',this.allProduct )
  
      let getkeyid = onedoorrefrigerators.map(x =>{
        return x.keyid;
        
      });
      // console.log('getkeyid',getkeyid)


      this.productName = getkeyid.filter((v,i)=>{
        return getkeyid.indexOf(v) ==i;
      });
  
      // console.log('test',this.productName);
  
      this.productObjectByProductName = this.productName.map(item => {
        return onedoorrefrigerators.filter((onedoorrefrigerators) => (onedoorrefrigerators.keyid === item));
      });
  
      // console.log('product', this.productObjectByProductName);
  
      this.BestPrice = this.productObjectByProductName.map(item => {
        let prices = item.map(price =>{
          return price.price;
        });
        let min = Math.min.apply(null, prices);
        let max = Math.max.apply(null, prices);
        item.forEach(e => {
          if (item.length > 1) {
            e.leng = item.length;
           } 
           else 
           {
            e.leng = item.length;
            
          }
      
       });
        let temp = item.filter(best => best.price === min);
        let xx = temp.map(i=>{
          i.name
          i.store
          i.img
          i.keyid
          i.submit
          i.priceStore=max-min
          return i
        })
        return xx;
        
      });
      
          
      // console.log('best Price', this.BestPrice);
      
    });
  
  }

  onClicks(pname: Item) {
    this.State = true;
    this.pnames = this.allProduct.filter(name => name.keyid === pname);
  }
 
  clearState(){
    this.State = false;
    this.pnames = null;
  }
  clearStateon(){
    this.State = false;
    this.pnames = null;
  }



  ngOnDestroy(){
    this.Bonedoorrefrigerators.unsubscribe();
  }
}

