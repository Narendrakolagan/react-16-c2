import './index.css'

const AppointmentItem = props => {
  const {appointDetails} = props
  const {id, title, date, isStarred} = appointDetails
  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="appointment-item">
      <p>{title}</p>
      <button type="button">
        <img src={starImgUrl} alt="star" />
      </button>
      <p>{date}</p>
    </li>
  )
}

export default AppointmentItem
