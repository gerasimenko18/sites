class parallaxTiltEffect {

   constructor({element, tiltEffect}) {
 
     this.element = element;
     this.detailsHolder = this.element.querySelector(".details-holder");
     this.size = [360, 360];
     [this.w, this.h] = this.size;
 
     this.tiltEffect = tiltEffect;
 
     this.mouseOnComponent = false;
 
     this.handleMouseMove = this.handleMouseMove.bind(this);
     this.handleMouseEnter = this.handleMouseEnter.bind(this);
     this.handleMouseLeave = this.handleMouseLeave.bind(this);
     this.defaultStates = this.defaultStates.bind(this);
     this.setProperty = this.setProperty.bind(this);
     this.init = this.init.bind(this);
 
     this.init();
   }
 
   handleMouseMove(event) {
     const {offsetX, offsetY} = event;
 
     let X;
     let Y;
 
     if (this.tiltEffect === "reverse") {
       X = ((offsetX - (this.w/2)) / 3) / 3;
       Y = (-(offsetY - (this.h/2)) / 3) / 3;
     }
 
     else if (this.tiltEffect === "normal") {
       X = (-(offsetX - (this.w/2)) / 3) / 3;
       Y = ((offsetY - (this.h/2)) / 3) / 3;
     }
 
     this.setProperty('--rY', X.toFixed(2));
     this.setProperty('--rX', Y.toFixed(2));
 
     this.setProperty('--bY', (80 - (X/4).toFixed(2)) + '%');
     this.setProperty('--bX', (50 - (Y/4).toFixed(2)) + '%');
   }
 
   handleMouseEnter() {
     this.mouseOnComponent = true;
     this.detailsHolder.classList.add("detailsHolder--active");
   }
 
   handleMouseLeave() {
     this.mouseOnComponent = false;
     this.defaultStates();
   }
 
   defaultStates() {
     this.detailsHolder.classList.remove("detailsHolder--active");
     this.setProperty('--rY', 0);
     this.setProperty('--rX', 0);
     this.setProperty('--bY', '80%');
     this.setProperty('--bX', '50%');
   }
 
   setProperty(p, v) {
     return this.detailsHolder.style.setProperty(p, v);
   }
 
   init() {
     this.element.addEventListener('mousemove', this.handleMouseMove);
     this.element.addEventListener('mouseenter', this.handleMouseEnter);
     this.element.addEventListener('mouseleave', this.handleMouseLeave);
   }
 
 }
 
 const $ = e => document.querySelector(e);
 
 const detailsInner1 = new parallaxTiltEffect({
   element: $('.details-inner--1'),
   tiltEffect: 'reverse'
 });
 
 const detailsInner2 = new parallaxTiltEffect({
   element: $('.details-inner--2'),
   tiltEffect: 'normal'
 });
 
 const detailsInner3 = new parallaxTiltEffect({
   element: $('.details-inner--3'),
   tiltEffect: 'reverse'
 });

 const detailsInner4 = new parallaxTiltEffect({
   element: $('.details-inner--4'),
   tiltEffect: 'reverse'
 });



function menuOnClick() {
   document.getElementById("menu-bar").classList.toggle("change");
   document.getElementById("nav").classList.toggle("change");
   document.getElementById("menu-bg").classList.toggle("change-bg");
}