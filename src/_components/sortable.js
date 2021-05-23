import React, {Component} from 'react'
import {SortableContainer, SortableElement, sortableHandle} from 'react-sortable-hoc'

export const SortableHandle = sortableHandle(props => props.children);
const SortableItem = SortableElement(props => props.children);
const SortableList = SortableContainer(props => props.children);

class Index extends Component{
  state = {
    items: [],
  }
  arrayMove(array, from, to) {
    array = array.slice();
    array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
    return array;
  }
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({items}) => ({
      items: this.arrayMove(items, oldIndex, newIndex),
    }), () => this.props.onChange(this.state.items));
  };
  componentDidMount() {
    this.setState({ items:  Object.keys(this.props.children).map(r => parseInt(r)) });
  }
  UNSAFE_componentWillReceiveProps(props){
    this.setState({ items:  Object.keys(props.children).map(r => parseInt(r)) });
  }
  render() {
    return(
      <SortableList onSortEnd={this.onSortEnd.bind(this)} axis={`${this.props.axis || 'xy'}`} useDragHandle={this.props.useDragHandle}>
        <div className={this.props.className}>
          {
            this.state.items.map((r, key) => (
              <SortableItem index={key} key={r}>
                {this.props.children[r]}
              </SortableItem>
            ))
          }
        </div>
      </SortableList>
    )
  }
}

export default Index
