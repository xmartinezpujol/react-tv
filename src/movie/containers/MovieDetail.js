import React from 'react';
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const modalStyle = {
  overlay: {
    zIndex: 200,
    backgroundColor: 'rgba(0,0,0, 0.95)',
  },
  content : {
    display               : 'flex',
    flexFlow              : 'column wrap',
    alignItems            : 'flex-end',
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    border                : 'none',
    background            : 'none !important',
  },
};

class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.getTrailers = this.getTrailers.bind(this);
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({behaviour: 'smooth'});
  }

  getTrailers(videos) {
    return videos.filter((video) => {
      return video.type === 'Trailer'
    });
  }

  componentWillMount(){
    //Render Detail View
    this.props.dispatch(movieActions.fetchMovie(this.props.match.params.id));
    this.props.dispatch(castActions.fetchCast(this.props.match.params.id));
    this.props.dispatch(videosActions.fetchVideos(this.props.match.params.id));
    this.props.dispatch(recommendationsActions.fetchRecommendations(this.props.match.params.id));
  }

  componentWillReceiveProps(newProps){
    if(newProps.location.pathname !== this.props.location.pathname){
      //Rerender Detail View
      this.props.dispatch(movieActions.fetchMovie(newProps.match.params.id));
      this.props.dispatch(castActions.fetchCast(newProps.match.params.id));
      this.props.dispatch(videosActions.fetchVideos(newProps.match.params.id));
      this.props.dispatch(recommendationsActions.fetchRecommendations(newProps.match.params.id));
    }
  }

  render() {
    const id = this.props.match.params.id;
    const movie = this.props.movie.movie;
    const cast = this.props.cast.cast.cast;
    const videos = this.props.videos.videos;
    const recommendations = this.props.recommendations.recommendations;
    const trailer = this.getTrailers(videos)[0];

    return (
      <div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {return {
  movie: state.movie,
  loading: state.loading,
  cast: state.cast,
  videos: state.videos,
  recommendations: state.recommendations
}};

export default withRouter(connect(mapStateToProps)(MovieDetail));
