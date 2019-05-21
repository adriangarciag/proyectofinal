import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../core/auth.service';
import {} from 'jasmine';



//import {AuthServiceStub} from '../testing/auth-service-stub';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let element: HTMLElement;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);


  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
          LoginComponent,
      ],
      imports: [
          ReactiveFormsModule
      ],
      providers: [
          {
              provide: AuthService,
              //useValue: AuthServiceStub
          },
          {
              provide: Router,
              //useValue: routerSpy
          }
      ]
  })
  .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
    element = fixture.nativeElement;
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  xit('submitting correct credentials should redirect to /home', fakeAsync(() => {
    component.loginForm.controls['email'].setValue('user@mail.com');
    component.loginForm.controls['password'].setValue('secret');

    component.tryLogin(component.loginForm.value);
    tick();

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
}));
xit('successful goolge login should redirect to /home', fakeAsync(() => {
  component.tryGoogleLogin();
  tick();

  expect(routerSpy.navigate).toHaveBeenCalledWith(['/home']);
}));
it('form should be invalid when email is empty', () => {
  component.loginForm.controls['password'].setValue('secret');
  let errors = component.loginForm.controls['email'].errors || {};

  expect(errors['required']).toBeTruthy();
});

it('form should be invalid when password is empty', () => {
  component.loginForm.controls['email'].setValue('user@mail.com');
  let errors = component.loginForm.controls['password'].errors || {};

  expect(errors['required']).toBeTruthy();
});
xit('should bind inputs to form', () => {
  const email: HTMLInputElement = element.querySelector('#email');
  const password: HTMLInputElement = element.querySelector('#password');

  email.value = 'user@mail.com';
  password.value = 'secret';

  email.dispatchEvent(new Event('input'));
  password.dispatchEvent(new Event('input'));
  fixture.detectChanges();

  expect(email.value).toEqual(component.loginForm.value.email);
  expect(password.value).toEqual(component.loginForm.value.password);
});
xit('should handle form submit with tryLogin', () => {
  component.loginForm.controls['email'].setValue('user@mail.com');
  component.loginForm.controls['password'].setValue('secret');
  fixture.detectChanges();

  const submit: HTMLButtonElement = element.querySelector('#submit');
  const tryLoginSpy = spyOn(component, 'tryLogin');

  submit.click();

  expect(tryLoginSpy).toHaveBeenCalled();
});
it('should handle facebook login with tryFacebookLogin', () => {
  const facebookLogin: HTMLButtonElement = element.querySelector('#facebook-login');
  const tryFacebookLoginSpy = spyOn(component, 'tryFacebookLogin');

  facebookLogin.click();

  expect(tryFacebookLoginSpy).toHaveBeenCalled();
});

it('should handle twitter login with tryTwitterLogin', () => {
  const twitterLogin: HTMLButtonElement = element.querySelector('#twitter-login');
  const tryTwitterLoginSpy = spyOn(component, 'tryTwitterLogin');

  twitterLogin.click();

  expect(tryTwitterLoginSpy).toHaveBeenCalled();
});

it('should disable submit button if form is not valid', () => {
  const submit: HTMLButtonElement = element.querySelector('#submit');

  expect(submit.hasAttribute('disabled')).toBe(true);
});

});
