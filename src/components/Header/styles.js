import SearchIcon from '../../assets/images/search.svg';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0 0;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  height: 24px;
  width: 230px;
  padding: 6px 7px 6px 26px;
  background: #fff url(${SearchIcon}) no-repeat 7px center;

  input {
    flex: 1;
    font-size: 13px;
    color: #121212;
    border: 0;
  }
`;


export const User = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    margin-right: 5px;
  }

  span {
    font-size: 13px;
    font-weight: bold;
  }
`;
