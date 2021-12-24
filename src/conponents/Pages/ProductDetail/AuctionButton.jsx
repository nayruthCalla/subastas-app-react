import styles from '../../../css/styles.module.css';

const AuctionButton = ({text ,flag }) => {
  return (
    <button type="button" 
    className = {styles.auctionButton} 
    disabled = { parseInt(flag.hour, 10)<1 && parseInt(flag.min, 10)<1 && parseInt(flag.sec, 10)<1}>
      {text}
    </button>
  )
}

export default AuctionButton;
