import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(100%-32px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-contet: center;
  border: 1px solid grey;
  border-radius: 8px;
  cursor: pointer;
  background: #fff;
  :hover {
    background: lightgrey;
  }
`;

const ContentText = styled.p`
  font-size: 14px;
`;
function CommentListItem(props) {
  const { comment } = props;

  return (
    <Wrapper>
      <ContentText>{comment.content}</ContentText>
    </Wrapper>
  );
}

export default CommentListItem;
