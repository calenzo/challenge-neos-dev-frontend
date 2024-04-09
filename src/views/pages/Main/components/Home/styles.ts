import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const List = styled.ul``;

export const ListTitle = styled.h3``;

export const ListItem = styled.li`
  padding: 0 20px;
  list-style: none;
  display: flex;
  gap: 10px;
  padding-bottom: 10px;
`;

export const ListItemLink = styled.a`
  color: ${({ theme: { primary } }) => primary.color};
`;

export const ListItemContainer = styled.span``;

export const ListItemDelete = styled.p`
  margin: 0;
  color: red;
  font-weight: 900;
  cursor: pointer;
`;

export const NewLink = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme: { primary } }) => primary.color};
  padding: 20px 30px;
  box-sizing: border-box;
`;

export const NewLinkTitle = styled.h4`
  color: ${({ theme: { primary } }) => primary.background};
  margin: 10px 0 0;
`;

export const NewLinkForm = styled.div`
  display: flex;
  gap: 30px;
  position: relative;

  button {
    position: absolute;
    right: 0;
  }
`;
