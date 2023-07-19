import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Expo, Power0, gsap } from "gsap";

@Component({
  selector: 'app-soon',
  templateUrl: './soon.component.html',
  styleUrls: ['./soon.component.css']
})
export class SoonComponent implements OnInit {
  emailForm!: FormGroup;
  submitted = false;
  email!: string;
  year = new Date().getFullYear();

  constructor(private formBuilder: FormBuilder) {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    gsap.from("#title", { opacity: 0, y: -50, duration: 1, delay: 0.5 });
    gsap.from("#email", { opacity: 0, y: -50, duration: 1, delay: 0.7 });
    gsap.from("#message", { opacity: 0, y: 50, duration: 1, delay: 0.9 });
    gsap.from("#form", { opacity: 0, y: 100, duration: 1, delay: 1.2 });
    // gsap.to("#copyright", { ease: Power0.easeInOut, y: -100, delay: 1.3 })
  }

  emailsCollection(): void {
    if (this.emailForm.valid) {
      console.log('Email:', this.emailForm.value.email);
    }
  }

}
