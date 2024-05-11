import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateBlog from "./Blog/createBlog";
import Allpost from "./Home/allpost";
import Login from "./Login/login";
import Signup from "./Login/signup";
import AdminLogin from "./Login/adminlogin";
import Singlepost from "./Home/onepost";
import Admin from "./Admin/Admin";
import CardList from "./Admin/CardList";
import BlogList from "./Admin/BlogList";
import ProfilePage from "./Blog/profilePage";
import EditProfile from "./Blog/editProfile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/createblog" element={<CreateBlog />} />
          <Route exact path="/" element={<Allpost />} />
          <Route exact path="/post/:id" element={<Singlepost />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/userprofile" element={<ProfilePage />} />
          <Route exact path="/editprofile" element={<EditProfile />} />
          <Route exact path="/adminlogin" element={<AdminLogin />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="manage-users" element={<CardList />} />
            <Route path="manage-posts" element={<BlogList />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
