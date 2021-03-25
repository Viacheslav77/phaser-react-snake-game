import React, { Component } from 'react';

class Folders extends Component {
  state = {
    folders: [
      { id: 1, title: 'Inbox' },
      { id: 2, title: 'Sent' },
      { id: 3, title: 'Drafts' },
      { id: 4, title: 'Spam' },
      { id: 5, title: 'Templates' }
    ]
  };

  render() {
    const folderList = this.state.folders.map(folder => (
      <li
        className="list-group-item pointer list-group-item-action"
        key={folder.id}
      >
        {folder.title}
      </li>
    ));

    return (
      <div className="col-3">
        <ul className="list-group">{folderList}</ul>
      </div>
    );
  }
}

export default Folders;
