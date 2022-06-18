import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import MainPage from "./components/page/MainPage";
import PostWritePage from "./components/page/PostWritePage";
import PostViewPage from "./components/page/PostViewPage";

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App(props) {
  return (
    <BrowserRouter>
      <MainTitleText>미니 블로그</MainTitleText>
      <Routes>
        <Route index element={<MainPage />}></Route>
        <Route path="post-write" element={<PostWritePage />}></Route>
        <Route path="post/:postId" element={<PostViewPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;