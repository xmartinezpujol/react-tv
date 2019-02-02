import React from 'react';
import glamorous from 'glamorous';

import Button from '../../components/Button';
import Text from '../../components/Text';
import View from '../../components/View';

const ExternalLink = glamorous.a({
  textDecoration: 'none',
});

const Container = glamorous(View)({
  flexDirection: 'column',
  flexWrap: 'wrap',
  '@media(max-width: 1140px)': {
    padding: 20,
    order: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const TextWrapper = glamorous(View)({
  display: 'flex',
  '@media(max-width: 1140px)': {
    display: 'none',
  },
});

const Plate = glamorous(View)({
  marginTop: 15,
  marginLeft: 15,
  '@media(max-width: 1140px)': {
    marginTop: 0,
    marginLeft: 0,
  },
});

class Actions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Plate>
          <Button
            type="purewhite"
            iFont="fa"
            icon="eye"
            style={{
              padding: '0px 15px',
              height: 50,
              border: '1px solid #d9d9d9',
            }}
            shape="round"
          />
          <TextWrapper>
            <Text type="p1" style={{ fontWeight: 500, marginBottom: 0 }}>
              Marcar como ya visto
            </Text>
          </TextWrapper>
        </Plate>
        <Plate>
          <ExternalLink target="_blank" href={`https://twitter.com/intent/tweet?source=sharethiscom&text=${this.props.movieName}@rakutentv_es%20https://rakuten.tv/es/movies/${this.props.movieId}`}>
            <Button
              type="purewhite"
              iFont="fa"
              icon="twitter"
              style={{
                padding: '0px 15px',
                height: 50,
                border: '1px solid #d9d9d9',
              }}
              shape="round"
            />
          </ExternalLink>
          <TextWrapper>
            <Text type="p1" style={{fontWeight: 500, marginBottom: 0}}>
              Twitter
            </Text>
          </TextWrapper>
        </Plate>
        <Plate>
          <ExternalLink target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Frakuten.tv%2Fes%2Fmovies%2F${this.props.movieId}`}>
            <Button
              type="purewhite"
              iFont="fa"
              icon="facebook"
              style={{
                padding: '0px 15px',
                height: 50,
                border: '1px solid #d9d9d9',
              }}
              shape="round"
            />
          </ExternalLink>
          <TextWrapper>
            <Text type="p1" style={{ fontWeight: 500, marginBottom: 0 }}>
              Facebook
            </Text>
          </TextWrapper>
        </Plate>
      </Container>
    );
  }
}

export default Actions;
