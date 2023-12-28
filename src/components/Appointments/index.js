import {Component} from 'react'

import {v4} from 'uuid'

import {format} from 'date-fns'

import './index.css'

import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {
    appointmentsList: [],
    titleInput: '',
    dateInput: '',
    isFilterActivated: false,
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeDateInput = event => {
    this.setState({dateInput: event.target.value})
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {titleInput, dateInput} = this.state

    const formattedDate = dateInput
      ? format(new Date(dateInput), 'dd MMMM YYYY EEEE')
      : ''

    const newAppointment = {
      id: v4(),
      title: titleInput,
      date: formattedDate,
      isStarred: false,
    }

    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
    }))
  }

  getFilterdAppointmentsLists = () => {
    const {appointmentsList, isFilterActive} = this.state

    if (isFilterActive) {
      return appointmentsList.filter(
        eachTransaction => eachTransaction.isStarred === true,
      )
    }
    return appointmentsList
  }

  render() {
    const {titleInput, dateInput, isFilterActivated} = this.state
    const filterdAppointmentsLists = this.getFilterdAppointmentsLists()

    return (
      <div className="bg-container">
        <div className="appointment-card">
          <div className="add-appointment-container">
            <div className="appointment-container">
              <form className="form">
                <h1 className="main-heading">Add Appointment</h1>
                <label htmlFor="title" className="label">
                  Title
                </label>
                <br />
                <input
                  type="text"
                  id="title"
                  value={titleInput}
                  placeholder="Title"
                  className="input"
                  onChange={this.onChangeTitleInput}
                />
                <br />
                <label htmlFor="date" className="date-label">
                  Date
                </label>
                <br />
                <input
                  type="date"
                  className="input"
                  value={dateInput}
                  onChange={this.onChangeDateInput}
                />
                <br />
                <button
                  type="button"
                  className="add-button"
                  onSubmit={this.onAddAppointment}
                >
                  Add
                </button>
              </form>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="appointment-img"
              />
            </div>
            <hr />
            <div className="header-with-filter-container">
              <h1 className="appointments-heading">Appointments</h1>
              <button type="button" className="submit-button">
                submit
              </button>
            </div>
            <ul>
              {filterdAppointmentsLists.map(eachItem => (
                <AppointmentItem appointDetails={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
