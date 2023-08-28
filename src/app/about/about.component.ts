import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  ngOnInit(): void {
  }
  
  readMore() {
    const hiddenPara = document.querySelectorAll('#extra-content')
    const readBtnIcon = document.querySelector('#readBtnIcon')
    readBtnIcon?.classList.toggle("bx-x");
    hiddenPara.forEach(para => {
      para.classList.toggle("hidden")
    })
    
  }

}
