# Routing Exam

## 1. 프로젝트 생성

routing-exam 프로젝트 생성

```bash
$ ng new routing-exam --inline-template --inline-style --skip-tests --routing
$ cd routing-exam && ng serve
```

--routing 옵션을 추가하면 

- routing module(app-routing.module.ts)을 자동 생성
- app.component.ts에 `<router-outlet></router-outlet>`을 추가
- root module(app.module.ts)에 routing module을 import

## 2. bootstrap 설치

```bash
$ npm install bootstrap
```

.angular-cli.json를 아래와 같이 수정한다.

```json
{
  ...
  "apps": [
  ...
    "styles": [
      "../node_modules/bootstrap/dist/css/bootstrap.min.css",
      "styles.css"
    ],
  ...
}
```

개발용 서버를 재실행하면 부트스트랩이 적용된다.

## 2. component 생성

home, service, about 컴포넌트 생성

```bash
$ ng generate component home --inline-template --inline-style --spec false
$ # ng g c home -it -is -spec false

$ ng generate component service --inline-template --inline-style --spec false
$ ng generate component about --inline-template --inline-style --spec false
$ ng generate component not-found --inline-template --inline-style --spec false
```

아래와 같이 컴포넌트를 수정한다.

```typescript
// home.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="home">Home</div>
  `,
  styles: [`
    .home {
      font-size: 2em;
      padding: 60px;
    }
  `]
})
export class HomeComponent {}
```

```typescript
// service.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  template: `
    <div class="service">Service</div>
  `,
  styles: [`
    .service {
      font-size: 2em;
      padding: 60px;
    }
  `]
})
export class ServiceComponent {}
```

```typescript
// about.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="about">About</div>
  `,
  styles: [`
    .about {
      font-size: 2em;
      padding: 60px;
    }
  `]
})
export class AboutComponent {}
```

```typescript
// not-found.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="not-found">Not Found</div>
  `,
  styles: [`
    .not-found {
      font-size: 2em;
      padding: 60px;
    }
  `]
})
export class NotFoundComponent {}
```

## 3. routing 설정

routing module(app-routing.module.ts) 수정

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

이제 http://localhost:4200/service와 같이 직접 주소를 입력하여 이동할 수 있다.

# 4. root component 수정

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink='/'>Home</a>
      <a routerLink='/service'>Service</a>
      <a routerLink='/about'>About</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    nav {
      height: 60px;
      background-color: #4a4c88;
    }
    nav > a {
      line-height: 60px;
      margin: 0 60px;
      color: #fff;
      text-decoration: none;
      font-weight: bold;
      text-transform: uppercase;
      opacity: 0.7;
    }
    nav > a:hover {
      opacity: 1.0;
    }
  `]
})
export class AppComponent {}
```
