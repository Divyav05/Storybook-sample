import { useState, useEffect } from 'react';
import { within, userEvent, expect, fn } from '@storybook/test';
import { TodoItem } from './TodoItem';

export default {
  title: 'My Todo App/TodoItem',
  component: TodoItem,
  args: {
    onToggle: fn(),
    onDelete: fn(),
  },
  parameters: {
    actions: { argTypesRegex: "^on.*" },
  },
  render: function Render(args) {
    const [isCompleted, setIsCompleted] = useState(args.isCompleted);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
      setIsCompleted(args.isCompleted);
      setIsVisible(true);
    }, [args.isCompleted, args.task]);

    if (!isVisible) {
      return (
        <div style={{ padding: '20px', color: '#666', fontStyle: 'italic', border: '1px dashed #ccc' }}>
          Item Deleted
        </div>
      );
    }

    return (
      <TodoItem
        {...args}
        isCompleted={isCompleted}
        onToggle={() => {
          setIsCompleted(!isCompleted);
          args.onToggle();
        }}
        onDelete={() => {
          setIsVisible(false);
          args.onDelete();
        }}
      />
    );
  },
};

export const NotDone = {
  args: {
    task: 'Learn Storybook',
    isCompleted: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');
    await userEvent.click(checkbox);
    await expect(checkbox).toBeChecked();
  },
};

export const Finished = {
  args: {
    task: 'Install React',
    isCompleted: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const deleteButton = canvas.getByRole('button', { name: /delete/i });
    await userEvent.click(deleteButton);
  },
};

export const DesktopView = {
  args: {
    task: 'Long text to test layout responsiveness...',
    isCompleted: false,
  },
};
