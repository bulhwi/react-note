import React from 'react';

function Lists({ todoData, setTodoData }) {
  const handleClick = (id) => {
    let newTodoData = todoData.filter((item, index, arr) => item.id !== id);
    setTodoData(newTodoData);
  };

  const handleCompletedChange = (id) => {
    let newTodoData = todoData.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setTodoData(newTodoData);
  };

  return (
    <div>
      {todoData.map(data => (
        <div key={data.id}>
          <div
            className='flex items-center justify-between w-full px-4 py-1 my-2 text-gray-500 bg-gray-100 border rounded'>
            <div className='items-center'>
              <input type='checkbox' defaultChecked={data.completed}

                     onClick={() => handleCompletedChange(data.id)} />
              <span className={data.completed ? 'line-through' : undefined}>
                {data.title}
              </span>
            </div>
            <div className='items-center'>
              <button onClick={() => handleClick(data.id)}>X</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Lists;