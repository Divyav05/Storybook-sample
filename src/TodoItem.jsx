export const TodoItem = ({ task, isCompleted, onToggle, onDelete }) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'flex-start', // Keeps items at the top
      gap: '12px',
      padding: '15px 0',
      borderBottom: '1px solid #eee'
    }}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={onToggle}
        style={{ marginTop: '4px' }} // Aligns with first line of text
      />

      <span style={{
        flex: 1, // Tells the text to take up all available middle space
        textAlign: 'left', // Aligns text to the left
        textDecoration: isCompleted ? 'line-through' : 'none',
        wordBreak: 'break-word' // Ensures long words don't overflow
      }}>
        {task}
      </span>

      <button onClick={onDelete} style={{ backgroundColor: 'red', color: 'black', border: 'none', borderRadius: '4px' }}>
        Delete
      </button>
    </div>
  );
};