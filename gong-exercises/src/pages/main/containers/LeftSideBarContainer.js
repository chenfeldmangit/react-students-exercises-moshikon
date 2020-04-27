import { connect } from "react-redux";
import LeftSideBar from "../components/LeftSideBar";

const mapStateToProps = (state, ownProps) => ({
    notifications: state.newsFeed.notifications,
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const LeftSideBarContainer = connect(mapStateToProps, mapDispatchToProps)(LeftSideBar);

export default LeftSideBarContainer;