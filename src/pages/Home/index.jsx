import React, { Component } from "react";
import { getMovieListRequest } from "../../redux/actions/movie.actions";
import { connect } from "react-redux";
import { CircularProgress, Grid } from "@material-ui/core";
import MovieItem from "../../components/MovieItem";
class Home extends Component {
  renderMovieList = () => {
    const { movieList } = this.props;
    if (movieList) {
      return movieList.map((movie, index) => {
        return (
          <Grid item sm={3} key={index}>
            <MovieItem movie={movie} />
          </Grid>
        );
      });
    }
  };
  render() {
    const { isLoading } = this.props;
    // if (isLoading) {
    //   return <CircularProgress />;
    // }
    return (
      <div>
        <Grid container>{this.renderMovieList()}</Grid>
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(getMovieListRequest());
  }
}
// const mapToDispatchToProps = (dispatch) => {
//   dispatch(getMovieListRequest());
// };
const mapToStateToProps = (state) => {
  return {
    isLoading: state.common.isLoading,
    movieList: state.movie.movieList,
  };
};
export default connect(mapToStateToProps)(Home);
