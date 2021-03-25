import React, { Component } from 'react';

class Emails extends Component {
  render() {
    const emailList = this.props.emails.map(email => (
      <li
        className="list-group-item list-group-item-action pointer"
        onClick={() => this.props.openEmail(email.id)}
        style={{ fontWeight: email.isRead ? 400 : 700 }}
        key={email.id}
      >
        From: {email.from} - {email.subject}
        {/* <div>{email.isOpened && email.body}</div> */}
      </li>
    ));

    return (
      <div className="col-9">
        <ul className="list-group">{emailList}</ul>
      </div>
    );
  }
}

export default Emails;
