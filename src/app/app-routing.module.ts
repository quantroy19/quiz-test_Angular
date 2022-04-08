import { HistoryComponent } from './client/screens/history/history.component';
import { AuthGuard } from './helpers/auth.guard';
import { AuthAdminGuard } from './helpers/auth-admin.guard';
import { StudentEditFormComponent } from './admin/screens/student/student-edit-form/student-edit-form.component';
import { DashboardComponent } from './admin/screens/dashboard/dashboard.component';
import { StudentComponent } from './admin/screens/student/student.component';
import { SubjectAdminComponent } from './admin/screens/subject/subject.component';
import { AdminLayoutComponent } from './admin/layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './client/screens/login/login.component';
import { SubjectComponent } from './client/screens/subject/subject.component';
import { QuizComponent } from './client/screens/quiz/quiz.component';
import { HomeLayoutComponent } from './client/layouts/home-layout/home-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './client/screens/home/home.component';
import { StudentAddFormComponent } from './admin/screens/student/student-add-form/student-add-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'quiz/:id', component: QuizComponent, canActivate: [AuthGuard] },
      { path: 'subject', component: SubjectComponent },
      { path: 'history', component: HistoryComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AuthAdminGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'question', component: QuizComponent },
      { path: 'student', component: StudentComponent },
      { path: 'student/edit/:id', component: StudentEditFormComponent },
      { path: 'subject', component: SubjectAdminComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
