export const TodoItem = ({ task, isCompleted, onToggle, onDelete }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
        padding: '15px 0',
        borderBottom: '1px solid #eee'
      }}
    >
      {/* Accessible checkbox with label */}
      <label style={{ display: 'flex', gap: '12px', flex: 1, cursor: 'pointer' }}>

        <input
          type="checkbox"
          checked={isCompleted}
          onChange={onToggle}
          style={{ marginTop: '4px' }}
        />

        <span
          style={{
            textAlign: 'left',
            textDecoration: isCompleted ? 'line-through' : 'none',
            wordBreak: 'break-word',
            color: isCompleted ? '#666' : '#000'
          }}
        >
          {task}
        </span>

      </label>

      {/* Delete button with accessibility improvement */}
      <button
        onClick={onDelete}
        style={{
          backgroundColor: '#b0aa00',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '6px 10px',
          cursor: 'pointer'
        }}
        aria-label={`Delete task: ${task}`}
      >
        Delete
      </button>
    </div>
  );
};