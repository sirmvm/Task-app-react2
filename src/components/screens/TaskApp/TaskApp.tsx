import React from 'react'
import Container from '../../layout/Container'
import TaskList from './components/TaskList'
import CreateTask from './components/CreateTask/CreateTask'
import useTaskApp from './hooks/userTaskApp'

export default function TaskApp() {
  const { tasks, addTask, removeTask } = useTaskApp()
  return (
    <main className="h-full flex flex-col text-white justify-center">
      <Container>
        <h1 className="text-2xl font-bold text-center mb-4">
          Task App
        </h1>
        <CreateTask onTaskAdd={addTask} />
        <TaskList tasks={tasks} onTaskRemove={removeTask} />
      </Container>
    </main>
  )
}
