interface Task {
  id: string;
  name: string;
  description?: string;
  priority: number;
  project?: string;
  completed: boolean;
}
