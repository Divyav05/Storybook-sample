import { TodoItem } from './TodoItem';

export default {
  title: 'My Todo App/TodoItem',
  component: TodoItem,
};

// Use the Template pattern - this is much harder for minifiers to break
const Template = (args) => <TodoItem {...args} />;

export const NotDone = Template.bind({});
NotDone.args = {
  task: 'Learn Storybook',
  isCompleted: false,
};

export const Finished = Template.bind({});
Finished.args = {
  task: 'Install React',
  isCompleted: true,
};

export const DesktopView = Template.bind({});
DesktopView.args = {
  task: 'Clean the kitchen, wash the dishes, and take out the trash',
  isCompleted: false,
};