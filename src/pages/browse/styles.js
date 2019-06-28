import { Link } from 'react-router-dom';
import { Spinner } from '../../components/Loading/styles';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  margin-top: 110px;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 48px;

  ${Spinner} {
    height: 25px;
    margin-left: 5px;
  }
`;

export const List = styled.div`
  margin-top: 20px;
  display: flex;
`;

export const Playlist = styled(Link)`
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  text-decoration: none;

  &:first-child {
    margin: 0;
  }

  &:hover img {
    opacity: 0.4;
  }

  img {
    width: 250px;
    height: 250px;
  }

  strong {
    font-size: 13px;
    margin-top: 10px;
  }

  p {
    line-height: 22px;
    margin-top: 5px;
    font-size: 13px;
    color: #b3b3b3;
  }
`;

