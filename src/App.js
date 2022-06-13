import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainNavigation from "./components/nav/MainNavigation";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import LoginPage from "./views/LoginPage/LoginPage";
import Dashboard from "./views/Dashboard/Dashboard";
import MainData from "./views/MainData/MainData";
import "./App.scss";
import { fetchProjectsAsync } from "./store/projects/project.slice";
import MainLayout from "./components/layout/MainLayout/MainLayout";
import Footer from "./components/layout/Footer/Footer";

function App() {
  const loc = useLocation().pathname;
  const isLoggedIn = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const hierarchy = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Database", path: "/data" },
  ];

  useEffect(() => {
    if (isLoggedIn) {
      console.log("fetching Data");
      dispatch(fetchProjectsAsync("./projects.json"));
    }
  }, [dispatch, isLoggedIn]);

  if (isLoggedIn === true) {
    if (loc === "/data" || loc === "/dashboard") {
      return (
        <div className="App">
          <Container fluid className="px-0">
            <MainLayout>
              <div>
                <MainNavigation hierarchy={hierarchy} location={loc} />
              </div>
              <Container fluid className="px-0 mb-0 ps-lg-3 pe-lg-2" id="main-content">
                <Routes>
                  <Route default path="/dashboard" element={<Dashboard />}></Route>
                  <Route exact path="/data" element={<MainData />}></Route>
                </Routes>
                <Footer />
              </Container>
            </MainLayout>
          </Container>
        </div>
      );
    } else {
      return <Navigate to="/dashboard" />;
    }
  } else {
    return (
      <div className="App">
        <LoginPage />
      </div>
    );
  }
}

export default App;
