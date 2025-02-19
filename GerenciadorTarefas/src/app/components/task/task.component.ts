import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  standalone: true,  // Se for standalone, mantenha essa linha
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  imports: [CommonModule, FormsModule]  // Importando os módulos necessários
})
export class TaskComponent {
  tasks: { name: string; completed: boolean }[] = [];
  newTask: string = '';
  showTasks: boolean = true;

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ name: this.newTask, completed: false });
      this.newTask = '';
    }
  }

  toggleTask(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  toggleTaskList() {
    this.showTasks = !this.showTasks;
  }
}
