import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <h1>FrontEnd Mini Challenges</h1>
      <Link to="/results-summary">Results Summary</Link>
      <Link to="/product-card">Product Card</Link>
      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="http://github.com/lazaronazareno" target="_blank" rel="noopener noreferrer">lazaronazareno</a>.
      </footer>
    </div>
  )
}