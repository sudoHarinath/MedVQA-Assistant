import styled from 'styled-components';

export const StyledDiv = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #0ad20a;
  border-radius: 50px;
  box-shadow: 0 0 10px rgba(100, 100, 100, 0.8);
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  margin-bottom: 8px;
`;

export const StyledInput = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #051565;
  border-radius: 4px;
`;

export const StyledButton = styled.button`
  background-color: #0c9362;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #6b45a0;
  }
`;

export const StyledInnerDiv = styled.div`
  margin-top: 20px;
  font-weight: bold;
  color: #333;
`;
