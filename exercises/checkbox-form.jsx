import React, { useState } from 'react'

const CheckBox = ({ name, checked = false, onChange }) => {
  return (
    <input
      type='checkbox'
      name={name}
      checked={checked}
      onChange={onChange}
    ></input>
  )
}

const CheckboxForm = () => {
  const [checkedItems, setCheckedItems] = useState({})
  const [items, submitItems] = useState({})

  const submitForm = event => {
    let itemsToSubmit = {}
    itemsToSubmit = Object.fromEntries(
      Object.entries(checkedItems).filter(([key, value]) => value === true)
    )

    if (Object.keys(itemsToSubmit).length === 0) {
      alert('Please select at least one item')
    } else {
      submitItems(itemsToSubmit)
    }

    if (Object.keys(itemsToSubmit).length === 2) {
      window.open('http://www.google.com', '_blank')
    }

    console.log('IS', itemsToSubmit)
    event.preventDefault()
  }

  const handleChange = event => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    })
  }

  const checkboxes = [
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
  ]

  return (
    <div>
      <h2>Check Box - Hooks</h2>
      <form>
        {checkboxes.map(item => (
          <div key={item.key}>
            {item.name}
            <CheckBox
              name={item.name}
              checked={checkedItems[item.name]}
              onChange={handleChange}
            />
            <br />
          </div>
        ))}
        <input
          type='hidden'
          id='itemsToSubmit'
          name='itemsToSubmit'
          value={items}
        ></input>
        <br />
        <button type='submit' onClick={submitForm}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default CheckboxForm
