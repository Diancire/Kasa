import PropTypes from 'prop-types'
import '../../styles/Card.css'

function Card({title, cover}) {
	return (
		<div className='card'>
			<img src={cover} alt={title} className='card_img'></img>
			<h1 className='card_title'>{title}</h1>
		</div>	
	)
}

Card.propTypes = {
	title: PropTypes.string.isRequired,
	cover: PropTypes.string.isRequired,
  }

export default Card