import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { StudentGuard } from './guard/student.guard';
import { HomeComponent } from './home/home.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { PostformComponent } from './postform/postform.component';
import { PostlistComponent } from './postlist/postlist.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentLIstComponent } from './student-list/student-list.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  {
    path: "student-list", component: StudentLIstComponent

  },
  { path: "student-details/:id", component: StudentDetailsComponent, canActivate: [StudentGuard] },
  {
    path: "posts", component: PostlistComponent

  },
  { path: "posts/:id", component: PostdetailsComponent },
  { path: "add-post", component: PostformComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
