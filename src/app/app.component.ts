import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

import { AuthService } from './auth/auth.service';
import { DynamiccomponentComponent } from './dynamiccomponent/dynamiccomponent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild("dynamic", {read: ViewContainerRef, static:true}) containerRef: ViewContainerRef;

  constructor(private authService: AuthService, private cfr: ComponentFactoryResolver) {}
  ngOnInit() {
    this.authService.autoLogin();
  }
  test(){
    const componentFactory = this.cfr.resolveComponentFactory(DynamiccomponentComponent);
    const conponentRef = this.containerRef.createComponent(componentFactory);
    conponentRef.instance.data = "show component!";
  }
  del(){
    this.containerRef.clear();
  }
}
