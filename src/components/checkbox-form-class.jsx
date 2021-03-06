import React, { Component } from 'react'

class CheckboxFormClass extends Component {
  constructor (props) {
    super(props)
    this.state = {
      checkedItems: {},
      submittedItems: {},
      checkboxes: [
        {
          name: 'checkbox A',
          key: 'a',
          label: 'Check Box A',
        },
        {
          name: 'checkbox B',
          key: 'b',
          label: 'Check Box B',
        },
        {
          name: 'checkbox C',
          key: 'c',
          label: 'Check Box C',
        },
        {
          name: 'checkbox D',
          key: 'd',
          label: 'Check Box D',
        },
      ],
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleForm = this.handleForm.bind(this)
  }

  handleForm (event) {
    let itemsToSubmit = {}
    itemsToSubmit = Object.fromEntries(
      Object.entries(this.state.checkedItems).filter(
        ([key, value]) => value === true
      )
    )

    if (Object.keys(itemsToSubmit).length === 0) {
      alert('Please select at least one item')
    } else {
      this.setState({ submittedItems: itemsToSubmit })

      console.log('itemsToSubmit - class', itemsToSubmit)
    }

    if (Object.keys(itemsToSubmit).length === 2) {
      window.open('http://www.google.com', '_blank')
    }

    event.preventDefault()
  }

  handleChange (event) {
    this.setState({
      checkedItems: {
        ...this.state.checkedItems,
        [event.target.name]: event.target.checked,
      },
    })
  }

  render () {
    return (
      <div>
        <h2>Check Box - Class</h2>
        <form>
          {this.state.checkboxes.map(item => (
            <div key={item.key}>
              {item.name}
              <input
                type='checkbox'
                name={item.name}
                checked={this.state.checkedItems[item.name] || false}
                onChange={this.handleChange}
              />
              <br />
            </div>
          ))}
          <input
            type='hidden'
            id='submittedItems'
            name='submittedItems'
            value={this.state.submittedItems}
          ></input>
          <br />
          <button type='submit' onClick={this.handleForm}>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default CheckboxFormClass
