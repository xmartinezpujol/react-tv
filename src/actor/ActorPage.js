import React from 'react';
import glamorous from 'glamorous';

import Text from '../components/Text';
import View from '../components/View';

const Container = glamorous(View)({
  position: 'relative',
  marginBottom: 20,
  minHeight: '100vh',
});

const ActorPage = () => (
  <Container container direction="column">
    <View align="center" style={{ marginTop: 100, marginBottom: 10 }}>
      <Text type="h1.w">
        Aquí iría el detalle de Actor ;)
      </Text>
    </View>
  </Container>
);

export default ActorPage;
