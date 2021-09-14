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
    <div className="flex">
      <SideNavigation />
      <Body />
    </div>
  )
}
