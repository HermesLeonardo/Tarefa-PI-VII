import { Routes } from '@angular/router';
import { TaskComponent } from './components/task/task.component';

export const routes: Routes = [
  { path: '', component: TaskComponent },  // 🔥 Página inicial exibe as tarefas
  { path: '**', redirectTo: '' }  // 🔥 Qualquer rota desconhecida redireciona para '/'
];
