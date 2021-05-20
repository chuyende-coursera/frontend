import { connect } from "react-redux";
import FooterCourse from "../componentWeb/footer/FooterCourse";

// const mapStateToProps = ({ userCourse }) => {
//   // debugger;
//   return {
//     userCourse,
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   requestUserCourse(filter, sort, range) {
//     dispatch(userCourseActions.requestUserCourse(filter, sort, range));
//   },
// });

export default connect(null, null)(FooterCourse);
