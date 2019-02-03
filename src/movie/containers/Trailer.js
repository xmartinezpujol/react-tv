import React from 'react';
import glamorous from 'glamorous';

import noScroll from 'no-scroll';
import { connect } from 'react-redux';

import Button from '../../components/Button';
import Loader from '../../components/Loader';
import Modal from '../../components/Modal';
import Text from '../../components/Text';
import View from '../../components/View';

import * as trailerActions from './../../redux/modules/streaming';

const ButtonAdapter = glamorous(Button)({
  position: 'relative',
  zIndex: 5,
  padding: '0px 15px',
  margin: 0,
  height: 50,
  width: 53,
  border: '1px solid #d9d9d9',
  transition: '0.25s cubic-bezier(0.17, 0.67, 0.52, 0.97)',
  ':hover': {
    backgroundColor: '#FFED00',
  },
});

const LoaderContainer = glamorous.div({
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: '#101010',
  zIndex: 9999,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
});

const Overlay = glamorous(View)({
  position: 'absolute',
  zIndex: 1,
  left: '-23px',
  top: '-28px',
  width: 110,
  height: 110,
  borderRadius: '50%',
  backgroundColor: 'rgba(0,0,0,.7)',
  boxShadow: '0 1px 1px rgba(0,0,0,.5)',
});

class Trailer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trailerModal: 'closed',
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.playTrailer = this.playTrailer.bind(this);
  }

  openModal() {
    noScroll.on();
    this.setState(() => ({
      trailerModal: 'opened',
    }));
  }

  closeModal() {
    noScroll.off();
    this.setState(() => ({
      trailerModal: 'closed',
    }));
  }

  playTrailer() {
    this.props.dispatch(trailerActions.startStreaming(this.props.movie.data.id));
    this.openModal();
  }

  render() {
    const { streaming } = this.props;
    return (
      <View direction="column" align="center" justify="center" style={{ position: 'absolute' }}>
        <ButtonAdapter
          onClick={this.playTrailer}
          type="purewhite"
          iFont="fa"
          icon="play"
          iconSize={30}
          shape="round"
        />
        <Text type="p1.w" style={{ fontWeight: 500, marginTop: 35 }}>
          TRÁILER
        </Text>
        <Overlay />
        {this.state.trailerModal === 'opened' &&
          <Modal
            color="black"
            windowed
            align="center"
            justify="center"
            onModalClose={this.closeModal}
          >
            <View width="100%" align="center" justify="center" >
              <Button
                onClick={this.closeModal}
                template="link"
                type="transparent"
                bordercolor="purewhite"
                iFont="fa"
                icon="close"
                iconSize={30}
                style={{
                  position: 'absolute',
                  zIndex: 9999,
                  width: 50,
                  height: 50,
                  right: 20,
                  top: 20,
                }}
              />
              {streaming.isFetching &&
                <LoaderContainer>
                  <Loader color="yellow" />
                </LoaderContainer>
              }
              {!streaming.isFetching && typeof (streaming.data) !== 'undefined' &&
                <View width="100%" align="center" justify="center" >
                  <video width="100%" height="auto" controls autoPlay>
                    <source src={`${streaming.data.stream_infos[0].url}`} type="video/mp4" />
                  </video>
                </View>
              }
              {!streaming.isFetching && typeof (streaming.data) === 'undefined' &&
              <View direction="column" width="100%" align="center" justify="center" >
                <Text type="h1">:(</Text>
                <Text type="h1">Tráiler no disponible</Text>
              </View>
              }
            </View>
          </Modal>
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movie,
  streaming: state.streaming,
});

export default connect(mapStateToProps)(Trailer);

