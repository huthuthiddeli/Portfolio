import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink,
    RouterLinkActive,
    CommonModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  scrolled = false;

  @HostListener("window:scroll", [])
  onWindowScroll(){
    this.scrolled = window.scrollY > 20;
  }

}
