import React from 'react';
import UserEditor from '../components/UserEditor';
import { get } from '../utils/request';
import {
    withRouter
} from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';

class UserEdit extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentWillMount () {
    const userId = this.props.match.params.id;
    fetch('http://localhost:3000/user/' + userId)
    .then(res => res.json())
      .then(res => {
        this.setState({
          user: res
        });
      });
  }

  render () {
    const {user} = this.state;
    return (
      <HomeLayout title="编辑用户">
        {
          user ? <UserEditor editTarget={user}/> : '加载中...'
        }
      </HomeLayout>
    );
  }
}



export default withRouter(UserEdit);
