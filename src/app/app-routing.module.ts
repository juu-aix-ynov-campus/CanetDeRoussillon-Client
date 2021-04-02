import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddOrEditComponent } from './pages/article/addOrEdit/addOrEdit.component';
import { ArticleComponent } from './pages/article/articles.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'articles', component: ArticleComponent },
  { path: 'article/:id', component: AddOrEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
