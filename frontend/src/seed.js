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
        },
        'column-2': {
            id: 'column-2',
            title: 'In Progress',
            taskIds: []
        },
        'column-3': {
            id: 'column-3',
            title: 'Completed',
            taskIds: []
        }
    },
    columnOrder: ['column-1', 'column-2', 'column-3']
}

export default seed;