import styled from 'styled-components/native';
import {Button, StyleSheet} from 'react-native';

export const Container = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    padding: '5%',
    paddingTop: 0,
  },
  content: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export const TextContent1 = styled.View`
  flex: 1;
  background-color: blue;
  flex-wrap: nowrap;
`;

export const TextContent2 = styled.View`
  padding: 3%;
  background-color: red;
  align-content: stretch;
  flex-direction: row;
  justify-content: space-around;
`;

export const TextContent3 = styled.View`
  background-color: black;
`;

export const Button1 = styled(Button)`
  width: 30%;
  height: 40%;
`;
