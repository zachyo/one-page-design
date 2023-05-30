import './header.scss'

const Header = () => {
    return (
      <header className="header">
        <div className="logo">
          <span className="logo-circle"></span>
          <h1>
            AceCoin<span className="lean">Pay</span>
          </h1>
        </div>
        <div className="timer">
          <span className="timer-num">0</span>
          <span className="timer-num">1</span>
          <span style={{ fontWeight : 'bolder'}}>:</span>
          <span className="timer-num">1</span>
          <span className="timer-num">9</span>
        </div>
      </header>
    );
}
 
export default Header;