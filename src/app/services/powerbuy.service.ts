import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'url';
import { promise } from 'protractor';


@Injectable()
export class PowerbuyService {

  constructor(private http: HttpClient) { }
  getPowerAir(){
    return new Promise(resolve =>{
    this.http.get('http://localhost:8888/powerbuy/air1').subscribe(data =>{
      resolve(data);
    },
       err =>{
         console.error(err);
       }
      )
    })
  }
  getPowerAir1(){
    return new Promise(resolve =>{
    this.http.get('http://localhost:8888/powerbuy/air2').subscribe(data =>{
      resolve(data);
    },
       err =>{
         console.error(err);
       }
      )
    })
  }
  getPowerAir2(){
    return new Promise(resolve =>{
    this.http.get('http://localhost:8888/powerbuy/air3').subscribe(data =>{
      resolve(data);
    },
       err =>{
         console.error(err);
       }
      )
    })
  }
  getPowerfan(){
    return new Promise(resolve =>{
    this.http.get('http://localhost:8888/powerbuy/fan').subscribe(data =>{
      resolve(data);
    },
       err =>{
         console.error(err);
       }
      )
    })
  }
  getPowerfan1(){
    return new Promise(resolve =>{
    this.http.get('http://localhost:8888/powerbuy/fan1').subscribe(data =>{
      resolve(data);
    },
       err =>{
         console.error(err);
       }
      )
    })
  }
  getPoweronedoorrefrigerators(){
    return new Promise(resolve =>{
    this.http.get('http://localhost:8888/powerbuy/one-door-refrigerators').subscribe(data =>{
      resolve(data);
    },
       err =>{
         console.error(err);
       }
      )
    })
  }
  getPowertwodoorrefrigerators(){
    return new Promise(resolve =>{
    this.http.get('http://localhost:8888/powerbuy/two-door-refrigerators').subscribe(data =>{
      resolve(data);
    },
       err =>{
         console.error(err);
       }
      )
    })
  }
  getPowertwodoorrefrigerators1(){
    return new Promise(resolve =>{
    this.http.get('http://localhost:8888/powerbuy/two-door-refrigerators1').subscribe(data =>{
      resolve(data);
    },
       err =>{
         console.error(err);
       }
      )
    })
  }
  getPowerwaterheaters(){
    return new Promise(resolve =>{
    this.http.get('http://localhost:8888/powerbuy/shower-water-heaters').subscribe(data =>{
      resolve(data);
    },
       err =>{
         console.error(err);
       }
      )
    })
  }
  getPowerwashingmachines(){
    return new Promise(resolve =>{
    this.http.get('http://localhost:8888/powerbuy/washing-machines').subscribe(data =>{
      resolve(data);
    },
       err =>{
         console.error(err);
       }
      )
    })
  }
}

