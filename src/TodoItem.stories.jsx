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
    task: 'Learn Storybook, and make sure it works on desktop view to see the full layout of the TodoItem component.',
    isCompleted: false,
  },
};
