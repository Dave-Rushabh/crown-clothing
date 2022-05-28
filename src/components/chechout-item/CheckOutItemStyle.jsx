import styled from "styled-components";

export const CheckOutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

// for name and price
export const Tags = styled.span`
  width: 23%;
`;

// for quantity
export const Qunatity = styled.span`
  width: 23%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  font-size: large;
  background-color: white;
  border: 1px solid grey;
  border-radius: 5px;
`;

export const ButtonLeft = styled(Button)`
  margin-right: 15px;

  &:hover {
    background-color: tomato;
    cursor: pointer;
  }
`;

export const ButtonRight = styled(Button)`
  margin-left: 15px;

  &:hover {
    background-color: skyblue;
    cursor: pointer;
  }
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
