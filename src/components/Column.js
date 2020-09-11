import React, {useState} from 'react';
import seed from '../seed';

function Column() {

    const [state, setState] = useState(() => seed);
    // currentState, updateState
    return (
        state.columnOrder.map(columnId =>{
            const column = state.columns[columnId]
            const tasks = column.taskIds.map(taskId => state.tasks[taskId]);
            return column.title;
          })
    )
}

export default Column;
