import { HostListener } from '@angular/core';
import { Directive, Input, HostBinding, ElementRef } from '@angular/core'; 


@Directive({
  selector: "[borderCard]", 

})
export class BorderCardDirective {

  private initialColor: string = "#f5f5f5";
  private defaultColor: string = "#009688"; 
  private defaultHeight: number = 180; 


  constructor(private _element: ElementRef){
    this.setBorder(this.initialColor); 
    this.setHeight(this.defaultHeight); 
    
  }
  
  @HostBinding('style.border')  
   border = '';
  
  @HostBinding('style.height')
  @Input('card-height')
  height = 180; 

  @Input('bd-color')
  bdColor= "#10a910";



  @HostListener('mouseenter')
  onMouseOver(){
    this.setBorder(this.bdColor)
  }
  
  @HostListener('mouseleave')
  onMouseOut(){
    this.setBorder("#f5f5f5");
  }

  setHeight(height: number){
    this._element.nativeElement.style.height = height + "px";
  }

  setBorder(color: string){
    this.border = `solid 4px ${color}`
  }

}