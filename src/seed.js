const seed = {
    tasks: {
        'task-1': {id: 'task-1', info: 'Work on Project'},
        'task-2': {id: 'task-1', info: 'Learn some JS'},
        'task-3': {id: 'task-1', info: 'Review project'},
    },
    columns:{
        'column-1': {
            id: 'column-1',
            title: 'todo',
            taskIds: ['task1', 'task2', 'task3']
        }
    },
    columnOrder: ['column-1']
}

export default seed;