import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor() { 
  }

  ngOnInit(): void {
    this.navStatusUpdate();
  }

  navStatusUpdate() {
    const sections = document.querySelectorAll('section')
    const navlinks = document.querySelectorAll('header nav a')
    window.onscroll = () => {
      sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
          navlinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']')?.classList.add('active')
          })
        };
      })
    }
  }

  menuIconToggle() {
    const menuIcon = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");
    menuIcon?.classList.toggle("bx-x");
    navbar?.classList.toggle("active");
  }
}
