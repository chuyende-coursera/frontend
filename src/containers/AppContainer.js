import { connect } from "react-redux";
import App from "../componentWeb/app/App";
// const mapDispatchToProps = (dispatch) => {
//   return {
//     loadUserFromToken: () => {
//       let token = sessionStorage.getItem("jwtToken");
//       if (!token || token === "") {
//         return;
//       }
//     },
//   };
// };

export default connect()(App);
