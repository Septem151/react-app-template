import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div>
      <h2>404: Page Not Found</h2>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
};

export default NoMatch;
