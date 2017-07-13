import React from 'react';

import CommentForm from './CommentsForm';

export default class MemeCommentsPanel extends React.Component {
  render() {
    console.log('[MemeCommentsPanel]', this.props);
    let comments = this.props.comments.map(comment => {
      return (
        <div key={comment._id}
             className="comment col-sm-6 col-xs-offset-6 list-group-item animated fadeIn">
          <div className="media">
            <div className="media-body">
              <p>{ comment.content }</p>
            </div>
          </div>
          <small><em>{comment.createdOn}</em></small>
        </div>
      );
    });

    return (
      <div className="list-group">
        { comments ?
          <h3 className="col-sm-3 col-xs-offset-8">Comments</h3> :
          <h4 className="col-sm-3 col-xs-offset-8">There are no comments</h4>}
        { comments }
        <div className="col-sm-6 col-xs-offset-6 list-group-item animated fadeIn">
          <div className="media">
            <CommentForm memeId={ this.props.memeId } />
          </div>
        </div>
      </div>
    );
  }
}

