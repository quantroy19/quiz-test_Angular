import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angularx-social-login';

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
import { HistoryComponent } from './client/screens/history/history.component';
import { MomentModule } from 'ngx-moment';
import { SubNamePipe } from './pipes/sub-name.pipe';
import { StdLoginWithSocialComponent } from './admin/screens/student/std-login-with-social/std-login-with-social.component';
import { AdminSubjectComponent } from './admin/screens/admin-subject/admin-subject.component';
import { AdminQuestionComponent } from './admin/screens/admin-question/admin-question.component';
import { AdminQuestionAddComponent } from './admin/screens/admin-question-add/admin-question-add.component';

// import { TestQuizComponent } from './test-quiz/test-quiz.component';

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
    HistoryComponent,
    SubNamePipe,
    StdLoginWithSocialComponent,
    AdminSubjectComponent,
    AdminQuestionComponent,
    AdminQuestionAddComponent,
    // TestQuizComponent,
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
    SocialLoginModule,
    MomentModule.forRoot({
      relativeTimeThresholdOptions: {
        m: 59,
      },
    }),
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environment.GOOGLE_CLIENT_ID),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(environment.FACEBOOK_CLIENT_ID),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
