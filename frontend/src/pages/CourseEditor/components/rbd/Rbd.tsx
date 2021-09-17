/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/destructuring-assignment */
import { Component } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { WithIdAndText } from '../../../../utils/backend/interfaces'

// a little function to help us with reordering the result
const reorder = (list: WithIdAndText[], startIndex: number, endIndex: number) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const grid = 8
const getItemStyle = (isDragging: any, draggableStyle: any) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',

  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,
  // change background colour if dragging
  // styles we need to apply on draggables
  ...draggableStyle,
})

const getListStyle = (isDraggingOver: any) => ({
  width: 250,
})

export default class App extends Component<{
  handleReorder: (xs: WithIdAndText[]) => void
  items: WithIdAndText[]
  renderItem: (item: WithIdAndText) => JSX.Element
}> {
  constructor(props: any) {
    super(props)
    this.onDragEnd = this.onDragEnd.bind(this)
  }

  onDragEnd(result: any) {
    // dropped outside the list
    if (!result.destination) {
      return
    }

    const items = reorder(this.props.items, result.source.index, result.destination.index)
    this.props.handleReorder(items)
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              className="p-2 "
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {this.props.items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      className="bg-red-200 "
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                    >
                      {this.props.renderItem(item)}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    )
  }
}
