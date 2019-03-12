import React from 'react';
import BookEditor from '../components/BookEditor';
import HomeLayout from '../layouts/HomeLayout';

class BookAdd extends React.Component {
  render() {
    return (
      <HomeLayout >
        <BookEditor />
      </HomeLayout>
    );
  }
}

export default BookAdd;
