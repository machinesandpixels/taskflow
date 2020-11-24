const seed = {
    tasks: {
        'task-1': {id: 'task-1', info: 'Work on Project'},
        'task-2': {id: 'task-2', info: 'Learn some JS'},
        'task-3': {id: 'task-3', info: 'Review project'},
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To Do',
            taskIds: ['task-1', 'task-2', 'task-3']
        }
    },
    columnOrder: ['column-1']
}

export default seed;