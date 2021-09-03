import styled from '@emotion/styled/macro';

export const ContactItem = styled.li`
  width: 400px;
  font-size: 20px;
  font-weight: 500;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const DeleteDiv = styled.div`
  display: inline-block;
  margin-left: 30px;
  margin-right: 0;
`;
