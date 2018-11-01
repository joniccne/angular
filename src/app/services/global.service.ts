import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'url';
import { promise } from 'protractor';

@Injectable()
export class GlobalService {

  constructor(private http: HttpClient ) { }

  getAir(){
    return new Promise(resolve =>{
    this.http.get('http://localhost:7000/globalhouse/air1').subscribe(data =>{
      resolve(data);
    },
       err =>{
         console.error(err);
       }
      )
    })
  }

  getAir1(){
    return new Promise(resolve =>{
    this.http.get('http://localhost:7000/globalhouse/air2').subscribe(data =>{
      resolve(data);
    },
       err =>{
         console.error(err);
       }
      )
    })
  }

  getfan(){
    return new Promise(resolve =>{
    this.http.get('http://localhost:7000/globalhouse/fans1').subscribe(data =>{
      resolve(data);
    },
       err =>{
         console.error(err);
       }
      )
    })
  }
  getfan1(){
    return new Promise(resolve =>{
    this.http.get('http://localhost:7000/globalhouse/fans2').subscribe(data =>{
      resolve(data);
    },
       err =>{
         console.error(err);
       }
      )
    })
  }
  getfan2(){
    return new Promise(resolve =>{
    this.http.get('http://localhost:7000/globalhouse/fans3').subscribe(data =>{
      resolve(data);
    },
       err =>{
         console.error(err);
       }
      )
    })
  }
  getonedoorrefrigerators(){
    return new Promise(resolve =>{
    this.http.get('http://localhost:7000/globalhouse/one-door-refrigerators').subscribe(data =>{
      resolve(data);
    },
       err =>{
         console.error(err);
       }
      )
    })
  }
  gettwodoorrefrigerators(){
    return new Promise(resolve =>{
    this.http.get('http://localhost:7000/globalhouse/two-door-refrigerators').subscribe(data =>{
      resolve(data);
    },
       err =>{
         console.error(err);
       }
      )
    })
  }
  gettwodoorrefrigerators1(){
    return new Promise(resolve =>{
    this.http.get('http://localhost:7000/globalhouse/two-door-refrigerators1').subscribe(data =>{
      resolve(data);
    },
       err =>{
         console.error(err);
       }
      )
    })
  }
  getwaterheaters(){
    return new Promise(resolve =>{
    this.http.get('http://localhost:7000/globalhouse/shower-water-heaters').subscribe(data =>{
      resolve(data);
    },
       err =>{
         console.error(err);
       }
      )
    })
  }
  getwaterheaters1(){
    return new Promise(resolve =>{
    this.http.get('http://localhost:7000/globalhouse/shower-water-heaters1').subscribe(data =>{
      resolve(data);
    },
       err =>{
         console.error(err);
       }
      )
    })
  }
  getwaterheaters2(){
    return new Promise(resolve =>{
    this.http.get('http://localhost:7000/globalhouse/shower-water-heaters2').subscribe(data =>{
      resolve(data);
    },
       err =>{
         console.error(err);
       }
      )
    })
  }
  getwashingmachines(){
    return new Promise(resolve =>{
    this.http.get('http://localhost:7000/globalhouse/washing-machines').subscribe(data =>{
      resolve(data);
    },
       err =>{
         console.error(err);
       }
      )
    })
  }





  getUpAir(){
    return new Promise(resolve =>{
    this.http.get('http://localhost:7000/globalhouse/upair1').subscribe(data =>{
      resolve(data);
    },
       err =>{
         console.error(err);
       }
      )
    })
  }

  getUpAir1(){
    return new Promise(resolve =>{
    this.http.get('http://localhost:7000/globalhouse/upair2').subscribe(data =>{
      resolve(data);
    },
       err =>{
         console.error(err);
       }
      )
    })
  }





}





