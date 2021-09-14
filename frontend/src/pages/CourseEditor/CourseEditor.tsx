import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import DndPlaceholderProvider from './components/DndPlaceholder/DndPlaceholder'
import IntendedLearners from './components/sections/IntendedLearners/IntendedLearners'

function SideNavigation() {
  return (
    <div className="w-1/4 h-screen bg-blue-300">
      <ul>
        <li>
          <button>Intended Learners</button>
        </li>
        <li>
          <button>Course landing page</button>
        </li>
        <li>
          <button>Curriculum</button>
        </li>
      </ul>
    </div>
  )
}

function Body() {
  return (
    <div className="w-3/4 h-screen bg-indigo-500">
      <IntendedLearners />
    </div>
  )
}

export default function CourseEditor() {
  return (
    <DndPlaceholderProvider>
      <DndProvider backend={HTML5Backend}>
        <div className="flex">
          <SideNavigation />
          <Body />
        </div>
      </DndProvider>
    </DndPlaceholderProvider>
  )
}
