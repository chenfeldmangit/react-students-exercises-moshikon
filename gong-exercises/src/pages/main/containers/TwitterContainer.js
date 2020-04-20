import { connect } from "react-redux";
import Twitter from "../components/Twitter";

const mapStateToProps = (state, ownProps) => ({
    user: state.user,
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const TwitterContainer = connect(mapStateToProps, mapDispatchToProps)(Twitter);

export default TwitterContainer;