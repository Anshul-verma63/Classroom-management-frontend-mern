import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import StudentDashboard from "./pages/Student/StudentDashboard";
import TeacherDashboard from "./pages/Teacher/TeacherDashboard";
import CreateClassRoom from "./component/CreateClassRoom";
import AdminHome from "./pages/Admin/AdminHome";
import AddTeacher from "./component/AddTeacher";
import AddStudent from "./component/AddStudent";
import AllTeachers from "./component/AllTeachers";
import AllStudents from "./component/AllStudents";
import EditStudent from "./component/EditStudent";
import EditTeacher from "./component/EditTeacher";
import AllStudentOfTeacher from "./pages/Teacher/AllStudentOfTeacher";
import EditTeacherStudent from "./component/EditTeacherStudent";
import AllStudentOfStudentClass from "./pages/Student/AllStudentOfStudentClass";
import StudentHome from "./pages/Student/StudentHome";

// const MainRouter = createBrowserRouter([
//   { path: "", Component: Home },
//   { path: "/login", Component: LoginPage },
//   { path: "/admin-dashboard", Component: AdminDashboard },
//   { path: "/student-dashboard", Component: StudentDashboard },
//   { path: "/teacher-dashboard", Component: TeacherDashboard },
// ]);
function App() {
  return (
    <BrowserRouter>
      {/* <RouterProvider router={MainRouter} /> */}
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />}>
          <Route path="" element={<AdminHome />} />
          <Route path="create-classroom" element={<CreateClassRoom />} />
          <Route path="add-teacher" element={<AddTeacher />} />
          <Route path="add-student" element={<AddStudent />} />
          <Route path="all-teachers" element={<AllTeachers />} />
          <Route path="all-student" element={<AllStudents />} />
          <Route path="update-student/:id" element={<EditStudent />} />
          <Route path="update-teacher/:id" element={<EditTeacher />} />
        </Route>
        <Route path="/student-dashboard" element={<StudentDashboard />}>
          <Route path="" element={<StudentHome />} />
          <Route path="all-student" element={<AllStudentOfStudentClass />} />
        </Route>
        <Route path="/teacher-dashboard" element={<TeacherDashboard />}>
          <Route path="" element={<AdminHome />} />
          <Route path="all-student" element={<AllStudentOfTeacher />} />
          <Route path="update-student/:id" element={<EditTeacherStudent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
