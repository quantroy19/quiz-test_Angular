import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLayoutComponent } from './client/layouts/home-layout/home-layout.component';
import { HomeComponent } from './client/screens/home/home.component';
import { LoginComponent } from './client/screens/login/login.component';
import { SubjectComponent } from './client/screens/subject/subject.component';
import { QuizComponent } from './client/screens/quiz/quiz.component';
import { RegisterComponent } from './client/screens/register/register.component';
import { QuestionComponent } from './client/screens/question/question.component';
import { AdminLayoutComponent } from './admin/layouts/admin-layout/admin-layout.component';
import { StudentComponent } from './admin/screens/student/student.component';
import { DashboardComponent } from './admin/screens/dashboard/dashboard.component';
import { GenderPipe } from './pipes/gender.pipe';
import { StudentAddFormComponent } from './admin/screens/student/student-add-form/student-add-form.component';
import { StudentEditFormComponent } from './admin/screens/student/student-edit-form/student-edit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    HomeComponent,
    LoginComponent,
    SubjectComponent,
    QuizComponent,
    RegisterComponent,
    QuestionComponent,
    AdminLayoutComponent,
    DashboardComponent,
    StudentComponent,
    GenderPipe,
    StudentAddFormComponent,
    StudentEditFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
