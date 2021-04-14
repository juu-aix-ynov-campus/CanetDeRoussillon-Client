import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddOrEditComponent } from './pages/article/addOrEdit/addOrEdit.component';
import { ArticleComponent } from './pages/article/articles.component';
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';
import { UserListComponent } from './pages/user/userList.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'articles', component: ArticleComponent },
  { path: 'article/:id', component: AddOrEditComponent },
  { path: 'followers', component: UserComponent },
  { path: 'users', component: UserListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
