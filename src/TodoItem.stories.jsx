import { TodoItem } from './TodoItem';

export default {
  title: 'My Todo App/TodoItem', // The sidebar name
  component: TodoItem,
  tags: ['autodocs'],
};

// This is Story #1: The default state
export const NotDone = {
  args: {
    task: 'Learn Storybook',
    isCompleted: false,
  },
};

// This is Story #2: The completed state
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