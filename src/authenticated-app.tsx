import { Button, Dropdown, Menu } from "antd";
import { Row } from "components/lib";
import { useAuth } from "context/auth-context";
import { ProjectScreen } from "screens/project";
import { ProjectListScreen } from "screens/project-list";
import { ReactComponent as SoftwareLogo } from "./assets/software-logo.svg";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "@emotion/styled";
// grid和flex各自的应用场景
// 1.要考虑是一维布局还是二维布局
// 一般来说，一维布局用flex，二维布局用grid
// 2.是从内容出发还是从布局出发？
// 从内容出发：你现有一组内容（数量一般不固定），然后希望他们均匀地分布在容器中，由内容自己的大小决定占据的空间
// 从布局出发：先规划网格（数量一般固定），然后再把元素往里填充
// 从内容出发：用flex
// 从布局出发：用grid
export const AuthenticatedApp = () => {
  return (
    <Container>
      <PageHeader />
      <Main>
        <ProjectListScreen />
        <Router>
          <Routes>
            <Route path={"/projects"} element={<ProjectListScreen />} />
            <Route
              path={"/projects/:projectId/*"}
              element={<ProjectScreen />}
            />
          </Routes>
        </Router>
      </Main>
    </Container>
  );
};
const PageHeader = () => {
  const { logout, user } = useAuth();
  return (
    <Header between={true}>
      <HeaderLeft gap={true}>
        <SoftwareLogo width={"18rem"} color={"rgb(38,132,255)"} />
        <h2>项目</h2>
        <h2>用户</h2>
        <h2>another</h2>
      </HeaderLeft>
      <HeaderRight>
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key={"logout"}>
                <Button type={"link"}>登出</Button>
              </Menu.Item>
            </Menu>
          }
        >
          <Button type={"link"} onClick={(e) => e.preventDefault()}>
            Hi,{user?.name}
          </Button>
        </Dropdown>
      </HeaderRight>
    </Header>
  );
};
const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr 6rem;
  height: 100vh;
`;

//grid-area用来给grid子元素起名字
const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
const Main = styled.main``;
