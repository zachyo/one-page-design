import './custom-button.scss'

const CustomButton = ({ children, onClick }) => {
  return <button className="btn-submit" onClick={onClick}>{children}</button>;
};

export default CustomButton;
