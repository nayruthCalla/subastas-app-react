import PropTypes from 'prop-types'
import styles from '../../../../css/styles.module.css'

const DetailButton = ({ text, flag, handleClick }) => {
  return (
    <button
      type="button"
      className={styles.detailButton}
      disabled={
        parseInt(flag.hour, 10) < 1 &&
        parseInt(flag.min, 10) < 1 &&
        parseInt(flag.sec, 10) < 1
      }
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

export default DetailButton

DetailButton.propTypes = {
  text: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  flag: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
}
