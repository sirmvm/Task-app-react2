import React from 'react'
import Container from '../../layout/Container'
import TaskList from './components/TaskList'
import CreateTask from './components/CreateTask/CreateTask'

const tasks = [
  {
    id: 1,
    title: 'Task 1',
    body: 'Learn React'
  },
  {
    id: 2,
    title: 'Task 2',
    body: 'Learn Taiwilnd'
  }
]

export default function TaskApp() {
  return (
    <main className="h-full flex flex-col text-white justify-center">
      <Container>
        <h1 className="text-2xl font-bold text-center mb-4">
          Task App
        </h1>
        <CreateTask />
        <TaskList tasks={tasks} />
      </Container>
    </main>
  )
}
