import React from 'react';

import Icon from '../../components/Icon';
import Text from '../../components/Text';
import View from '../../components/View';

const Languages = props => (
  <View direction="column" style={{ flexWrap: 'wrap', marginBottom: 20 }}>
    <View align="center" style={{ marginBottom: 10 }}>
      <Icon
        size={14}
        name="commenting"
        font="fa"
        style={{ marginRight: 5 }}
      />
      <Text
        type="p1"
        style={{
          fontSize: 17,
          fontWeight: 700,
          margin: 0,
        }}
      >
        Idiomas y subtítulos
      </Text>
    </View>
    <View>
      <View direction="column" style={{ minWidth: 100 }}>
        <Text
          type="p1"
          style={{
            fontSize: 17,
            fontWeight: 700,
            margin: 0,
            marginBottom: 10,
          }}
        >
          Audio
        </Text>
      </View>
      <View direction="column" style={{ width: '100%' }}>
        <Text
          type="p1"
          style={{
            fontSize: 17,
            fontWeight: 700,
            margin: 0,
            marginBottom: 10,
          }}
        >
          Subtitulos
        </Text>
      </View>
    </View>
    <View direction="column">
      {props.streams.map(stream => (
        stream.audio_languages.map(audio => (
          <View key={audio.name}>
            <Text type="p1" style={{ margin: 0, minWidth: 100 }}>
              {audio.name}
            </Text>
            <Text type="p1" style={{ margin: 0, paddingBottom: 5 }}>
              {stream.subtitle_languages.map((language, index) => (
                stream.subtitle_languages.length - 1 !== index ? `${language.name}, ` : language.name
              ))}
            </Text>
          </View>
        ))
      ))}
    </View>
  </View>
);

export default Languages;
