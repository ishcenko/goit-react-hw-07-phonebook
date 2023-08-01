import styled from 'styled-components';

export const Button = styled.button`
  background-color: #fd0303;
  color: white;
  margin-left: 20px;
  padding: 10px 18px;
  align-items: center;
  border: 1px solid black;
  outline: none;
  cursor: pointer;
  border-radius: 15px;
  font-weight: 600;
  text-transform: capitalize;

  &:hover {
    background-color: #9f0404;
  }
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 20px;
`;
export const Item = styled.li`
  display: flex;
  font-size: 24px;
  justify-content: space-between;
  width: 400px;
`;
