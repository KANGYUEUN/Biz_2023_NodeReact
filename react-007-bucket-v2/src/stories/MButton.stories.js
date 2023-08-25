import styled from "styled-components";
import MButton from "../shareComps/MButton";

const Container = styled.div`
  width: 200px;
`;

// 스토리보드 dash 보드에 표현할 title
export default {
  title: "내가만든 버튼",
  component: [MButton],
};

export const 버튼샘플 = () => (
  <Container>
    <MButton>클릭하세요</MButton>
  </Container>
);
