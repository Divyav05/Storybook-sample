import { TodoItem } from './TodoItem';

export default {
  title: 'My Todo App/TodoItem',
  component: TodoItem,
};

export const NotDone = {
  args: {
    task: 'Learn Storybook',
    isCompleted: false,
  },
};

export const Finished = {
  args: {
    task: 'Install React',
    isCompleted: true,
  },
};

export const DesktopView = {
  args: {
    task: 'Clean the kitchen, wash the dishes, and take out the trash',
    isCompleted: false,
  },
};