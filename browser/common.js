"use strict";(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[592],{3556:(P,u,i)=>{i.d(u,{Q:()=>r});var e=i(4650),s=i(7691),l=i(6895);const o=function(){return[]},p=function(n){return{page:n}};function c(n,a){if(1&n&&(e.\u0275\u0275elementStart(0,"li",1)(1,"a",9),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd()()),2&n){const t=a.$implicit,g=e.\u0275\u0275nextContext();e.\u0275\u0275classProp("active",g.currentPage==t),e.\u0275\u0275advance(1),e.\u0275\u0275property("routerLink",e.\u0275\u0275pureFunction0(5,o))("queryParams",e.\u0275\u0275pureFunction1(6,p,t)),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(t)}}function h(n,a){if(1&n&&(e.\u0275\u0275elementStart(0,"li",10),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1("of ",t.lastPage,"")}}class r{constructor(a,t){this.activeRoute=a,this.router=t,this.adClass="",this.perPage=12,this.total=6,this.currentPage=1,this.lastPage=1,this.startIndex=1,this.pagesToBeShown=[],this.params={},a.queryParams.subscribe(g=>{this.params=g,this.refresh()})}ngOnChanges(){this.refresh()}ngOnInit(){}refresh(){this.currentPage=this.params.page?parseInt(this.params.page):1,this.lastPage=Math.floor(this.total/this.perPage)+(this.total%this.perPage?1:0),this.startIndex=this.currentPage%this.perPage?this.perPage*Math.floor(this.currentPage/this.perPage):this.currentPage,this.pagesToBeShown=[];let a=Math.floor(this.total/this.perPage)+(0<this.total%this.perPage?1:0);for(let t=-1;t<2&&a>=3;t++)1<this.currentPage&&this.currentPage<a&&this.pagesToBeShown.push(this.currentPage+t),1===this.currentPage&&this.pagesToBeShown.push(this.currentPage+t+1),this.currentPage===a&&this.pagesToBeShown.push(this.currentPage+t-1);for(let t=0;t<a&&a<3;t++)this.pagesToBeShown.push(t+1)}}r.\u0275fac=function(a){return new(a||r)(e.\u0275\u0275directiveInject(s.gz),e.\u0275\u0275directiveInject(s.F0))},r.\u0275cmp=e.\u0275\u0275defineComponent({type:r,selectors:[["molla-pagination"]],inputs:{adClass:"adClass",perPage:"perPage",total:"total"},features:[e.\u0275\u0275NgOnChangesFeature],decls:14,vars:16,consts:[[1,"pagination","justify-content-center"],[1,"page-item"],["queryParamsHandling","merge",1,"page-link","page-link-prev",3,"routerLink","queryParams"],["aria-hidden","true"],[1,"icon-long-arrow-left"],["class","page-item",3,"active",4,"ngFor","ngForOf"],["class","page-item-total pl-3",4,"ngIf"],["queryParamsHandling","merge",1,"page-link","page-link-next",3,"routerLink","queryParams"],[1,"icon-long-arrow-right"],["queryParamsHandling","merge",1,"page-link",3,"routerLink","queryParams"],[1,"page-item-total","pl-3"]],template:function(a,t){1&a&&(e.\u0275\u0275elementStart(0,"nav")(1,"ul",0)(2,"li",1)(3,"a",2)(4,"span",3),e.\u0275\u0275element(5,"i",4),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(6,"Prev "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(7,c,3,8,"li",5),e.\u0275\u0275template(8,h,2,1,"li",6),e.\u0275\u0275elementStart(9,"li",1)(10,"a",7),e.\u0275\u0275text(11," Next "),e.\u0275\u0275elementStart(12,"span",3),e.\u0275\u0275element(13,"i",8),e.\u0275\u0275elementEnd()()()()()),2&a&&(e.\u0275\u0275advance(2),e.\u0275\u0275classProp("disabled",t.currentPage<2),e.\u0275\u0275advance(1),e.\u0275\u0275property("routerLink",e.\u0275\u0275pureFunction0(10,o))("queryParams",e.\u0275\u0275pureFunction1(11,p,t.currentPage-1)),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngForOf",t.pagesToBeShown),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.lastPage>3),e.\u0275\u0275advance(1),e.\u0275\u0275classProp("disabled",t.currentPage===t.lastPage),e.\u0275\u0275advance(1),e.\u0275\u0275property("routerLink",e.\u0275\u0275pureFunction0(13,o))("queryParams",e.\u0275\u0275pureFunction1(14,p,t.currentPage+1)))},dependencies:[l.NgForOf,l.NgIf,s.rH]})}}]);