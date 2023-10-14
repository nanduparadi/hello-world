import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  // class Point {
  //   x: number;
  //   y: number;
  //   draw(){
  //     console.log('X: ' + this.x+' Y: ' +this.y)
  //   }

  //  constructor(x:number,y:number){
  //   this.x=x;
  //   this.y=y;
  //  }
  // }
// let point =new Point(2,4);
// point.draw()
