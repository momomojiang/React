import React from 'react';
import BookEditor from '../components/BookEditor';
import { get } from '../utils/request';
import HomeLayout from '../layouts/HomeLayout';
import {
  withRouter
} from 'react-router-dom';

class BookEdit extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      book: null
    };
  }

  componentWillMount () {
    const bookId = this.props.match.params.id;
    get('http://localhost:3000/book/' + bookId)
    .then(res => res.json())
      .then(res => {
        this.setState({
          book: res
        });
      });
  }

  render () {
    const {book} = this.state;
    return (
      <HomeLayout title="编辑用户">
      {
      book ? <BookEditor editTarget={book}/> : '加载中...'
    }
    </HomeLayout>
    )
  }
}



export default withRouter(BookEdit);
