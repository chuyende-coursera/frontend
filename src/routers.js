import React from "react";
import { Route } from "react-router-dom";
// web
import PostIndex from "./pages/web/PostIndex";
import Login from "./pages/web/Login";
import Signin from "./pages/web/Signin";
import HomePage from "./pages/web/HomePage";
import CourseList from "./pages/web/CourseList";
import CourseDetail from "./pages/web/CourseDetail";
import Cart from "./pages/web/Cart";
import PaymentSuccess from "./pages/web/PaymentSuccess";
import MyCourse from "./pages/web/MyCourse";
import Profile from "./pages/web/Profile";
import EditProfile from "./pages/web/EditProfile";
import Learn from "./pages/web/Learn";
// dashboard
import CourseDash from "./pages/dashboard/course/CourseDash";
import AddCourseDash from "./pages/dashboard/course/AddCourseDash";
import UpdateCourseDash from "./pages/dashboard/course/UpdateCourseDash";
import AddWeekDash from "./pages/dashboard/week/AddWeekDash";
import UpdateWeekDash from "./pages/dashboard/week/UpdateWeekDash";
import WeekDash from "./pages/dashboard/week/WeekDash";
import UserDash from "./pages/dashboard/user/User";
import RevenueDash from "./pages/dashboard/inventory/Revenue";
import ReviewDash from "./pages/dashboard/inventory/Review";
import TeacherDash from "./pages/dashboard/user/Teacher";
import Dashboard from "./pages/dashboard/Dashboard";
import { PrivateRoute } from "./privateRoute";
// router duoc bao ve
// eslint-disable-next-line react/display-name
// <Route exact path="/editProfile" component={EditProfile} />
export default (
  <>
    <Route path="/" component={PostIndex} />
    <Route exact path="/" component={HomePage} />
    <Route exact path="/browser" component={CourseList} />
    <Route exact path="/browser/:topic" component={CourseList} />
    <Route path="/browser/:topic/:category" component={CourseList} />
    <Route path="/learn/:title" component={CourseDetail} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signin" component={Signin} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/myCourse" component={MyCourse} />
    <Route exact path="/profile" component={Profile} />

    <Route exact path="/paymentSuccess" component={PaymentSuccess} />
    <Route exact path="/myCourse/learn/:title" component={Learn} />

    <Route
      exact
      path="/dashboard"
      /*  render={RouteGuard(Dashboard)} */ component={Dashboard}
    />
    <Route
      exact
      path="/dashboard/category/courses"
      /*  render={RouteGuard(Dashboard)} */ component={CourseDash}
    />

    <Route
      exact
      path="/dashboard/category/courses/create"
      /*  render={RouteGuard(Dashboard)} */ component={AddCourseDash}
    />
    <Route
      exact
      path="/dashboard/category/courses/update/:id"
      /*  render={RouteGuard(Dashboard)} */ component={UpdateCourseDash}
    />
    <Route
      exact
      path="/dashboard/category/weeks"
      /*  render={RouteGuard(Dashboard)} */ component={WeekDash}
    />

    <Route
      exact
      path="/dashboard/category/weeks/create"
      /*  render={RouteGuard(Dashboard)} */ component={AddWeekDash}
    />
    <Route
      exact
      path="/dashboard/category/revenues"
      /*  render={RouteGuard(Dashboard)} */ component={RevenueDash}
    />

    <Route
      exact
      path="/dashboard/category/reviews"
      /*  render={RouteGuard(Dashboard)} */ component={ReviewDash}
    />

    <Route
      exact
      path="/dashboard/category/weeks/update/:id"
      /*  render={RouteGuard(Dashboard)} */ component={UpdateWeekDash}
    />

    <Route
      exact
      path="/dashboard/category/users"
      /*  render={RouteGuard(Dashboard)} */ component={UserDash}
    />
    <Route
      exact
      path="/dashboard/category/teachers"
      /*  render={RouteGuard(Dashboard)} */ component={TeacherDash}
    />
  </>
);

// <PrivateRoute exact path="/dashboard" component={Dashboard} />
//     <PrivateRoute
//       exact
//       path="/dashboard/category/courses"
//       component={CourseDash}
//     />
