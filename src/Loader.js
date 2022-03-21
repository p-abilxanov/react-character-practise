import { MDBSpinner } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

const Loader = () => {
  return (
    <div className="text-center" style={{ margin: "100px auto" }}>
      <MDBSpinner
        className="me-2"
        style={{ width: "5rem", height: "5rem" }}
        color="danger"
      >
        <span className="visually-hidden">Loading...</span>
      </MDBSpinner>
    </div>
  );
};
export default Loader;
