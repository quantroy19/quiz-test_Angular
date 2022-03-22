import { LoginComponent } from './client/screens/login/login.component';
import { SubjectComponent } from './client/screens/subject/subject.component';
import { QuizComponent } from './client/screens/quiz/quiz.component';
import { HomeLayoutComponent } from './client/layouts/home-layout/home-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './client/screens/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'quiz', component: QuizComponent },
      { path: 'subject', component: SubjectComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
