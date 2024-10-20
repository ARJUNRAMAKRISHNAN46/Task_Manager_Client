import React from "react";
import Layout from "../components/layout/Layout";
import TaskList from "../components/tasks/TaskList";

const Home = () => {
  return (
    <div>
      <Layout children={<TaskList />} />
    </div>
  );
};

export default Home;
