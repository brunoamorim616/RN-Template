import React from 'react';
import {View, Text} from 'react-native';

import {
  Container,
  TextContent1,
  TextContent2,
  TextContent3,
  Button1,
} from '../styles/Home.styles';

const Home = () => {
  return (
    <View style={Container.container}>
      <Text style={{textAlign: 'center'}}>Conteiner 1</Text>
      <View style={Container.content}>
        <Text>Conteudo</Text>
      </View>
      <TextContent1>
        {/*TEXTO 1*/}
        <Text>
          Texto super complicado que ningém consegue ler pq é chato pra krl ler
          isso, que dizer, não faz sentido ler isso.
        </Text>
        <TextContent2>
          <TextContent3>
            <Button1 title="I'm a button" />
          </TextContent3>
          <TextContent3>
            <Button1 title="I'm a button" />
          </TextContent3>
          <TextContent3>
            <Button1 title="I'm a button" />
          </TextContent3>
        </TextContent2>
      </TextContent1>
    </View>
  );
};

export default Home;
