import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Expo, Power0, gsap } from "gsap";
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-soon',
  templateUrl: './soon.component.html',
  styleUrls: ['./soon.component.css']
})
export class SoonComponent implements OnInit {
  year = new Date().getFullYear();

  items = [
    "dumela",         // sepedi
    "hello there",      // English
    "bonjour",          // French
    "ciao là",          // Italian
    "hallo da",         // German
    "olá lá",           // Portuguese
    "こんにちは",         // Japanese
    "你好那里",           // Chinese (Simplified)
    "sho daar",         // s'pitori
    "여보세요",            // Korean
    "hola allí",        // Spanish
    "नमस्ते वहाँ",           // Hindi
  ];

  currentItem: string = this.items[0];
  currentIndex: number = 0;
  intervalSubscription: Subscription | undefined;

  ngOnInit(): void {
    gsap.from("#title", { opacity: 0, y: -50, duration: 1, delay: 0.5 });
    gsap.from("#email", { opacity: 0, y: -50, duration: 1, delay: 0.7 });
    gsap.from("#message", { opacity: 0, y: 50, duration: 1, delay: 0.9 });
    gsap.from("#form", { opacity: 0, y: 100, duration: 1, delay: 1.2 });

    this.intervalSubscription = interval(1000).subscribe(() => {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
      this.currentItem = this.items[this.currentIndex];
    });

  }

  ngOnDestroy() {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

}
