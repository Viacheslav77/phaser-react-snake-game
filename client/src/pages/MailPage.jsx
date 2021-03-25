import React, { Component } from 'react';
import '../App.css';
import NavBar from '../components/NavBar';
import Folders from '../components/Folders';
import Emails from '../components/Emails';
import ModalWindow from '../components/ModalWindow';

class MailPage extends Component {
  state = {
    newMailModalActive: false,
    mailBodyModalActive: false,
    openedMailID: null,
    emails: [
      {
        id: 1,
        subject: 'default1',
        body:
          'Affronting discretion as do is announcing. Now months esteem oppose nearer enable too six. She numerous unlocked you perceive speedily. Affixed offence spirits or ye of offices between. Real on shot it were four an as. Absolute bachelor rendered six nay you juvenile. Vanity entire an chatty to.',
        from: 'name1@gmail.com',
        isRead: false,
        isOpened: false
      },
      {
        id: 2,
        subject: 'default2',
        body:
          'Boy favourable day can introduced sentiments entreaties. Noisier carried of in warrant because. So mr plate seems cause chief widen first. Two differed husbands met screened his. Bed was form wife out ask draw. Wholly coming at we no enable. Offending sir delivered questions now new met. Acceptance she interested new boisterous day discretion celebrated.',
        from: 'name2@gmail.com',
        isRead: false,
        isOpened: false
      },
      {
        id: 3,
        subject: 'default3',
        body:
          'Projecting surrounded literature yet delightful alteration but bed men. Open are from long why cold. If must snug by upon sang loud left. As me do preference entreaties compliment motionless ye literature. Day behaviour explained law remainder. Produce can cousins account you pasture. Peculiar delicate an pleasant provided do perceive.',
        from: 'name3@gmail.com',
        isRead: false,
        isOpened: false
      },
      {
        id: 4,
        subject: 'default4',
        body:
          'Of resolve to gravity thought my prepare chamber so. Unsatiable entreaties collecting may sympathize nay interested instrument. If continue building numerous of at relation in margaret. Lasted engage roused mother an am at. Other early while if by do to. Missed living excuse as be. Cause heard fat above first shall for. My smiling to he removal weather on anxious.',
        from: 'name4@gmail.com',
        isRead: false,
        isOpened: false
      },
      {
        id: 5,
        subject: 'default5',
        body:
          'Debating me breeding be answered an he. Spoil event was words her off cause any. Tears woman which no is world miles woody. Wished be do mutual except in effect answer. Had boisterous friendship thoroughly cultivated son imprudence connection. Windows because concern sex its. Law allow saved views hills day ten. Examine waiting his evening day passage proceed.',
        from: 'name5@gmail.com',
        isRead: false,
        isOpened: false
      }
    ]
  };

  openEmail = id => {
    const emails = this.state.emails.map(email => {
      if (email.id === id) {
        email.isRead = true;
        email.isOpened = !email.isOpened;
      } else {
        email.isOpened = false;
      }

      return email;
    });

    this.setState({ emails, mailBodyModalActive: true, openedMailID: id });
  };

  createNewMail = () => {
    this.setState({ newMailModalActive: true });
  };

  closeModalWindow = () => {
    this.setState({ newMailModalActive: false, mailBodyModalActive: false });
  };

  render() {
    const newMailModal = this.state.newMailModalActive && (
      <ModalWindow closeModalWindow={this.closeModalWindow}>
        <p key="1">Some Text</p>
        <p key="2">Some more Text</p>
      </ModalWindow>
    );

    const index = this.state.openedMailID - 1;
    const mailBodyModal = this.state.mailBodyModalActive && (
      <ModalWindow closeModalWindow={this.closeModalWindow}>
        <h3>
          {this.state.emails[index].from} - {this.state.emails[index].subject}
        </h3>
        <p>{this.state.emails[index].body}</p>
      </ModalWindow>
    );

    return (
      <>
        {newMailModal}
        {mailBodyModal}
        <NavBar createNewMail={this.createNewMail} />
        <div className="container-fluid">
          <div className="row">
            <Folders />
            <Emails openEmail={this.openEmail} emails={this.state.emails} />
          </div>
        </div>
      </>
    );
  }
}

export default MailPage;
