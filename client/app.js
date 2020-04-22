'use strict';
{
    const opts = {
        loginForm: '#welcome-form',
        messagesSection: '#messages-section',
        messagesList: '#messages-list',
        addMessageForm: '#add-messages-form',
        userNameImput: '#username',
        messageContentInput: '#message-content',
    };

    const loginForm = document.querySelector(opts.loginForm);
    const messagesSection = document.querySelector(opts.messagesSection);
    const messagesList = document.querySelector(opts.messagesList);
    const addMessageForm = document.querySelector(opts.addMessageForm);
    const userNameImput = document.querySelector(opts.userNameImput);
    const messageContentInput = document.querySelector(opts.messageContentInput);
    let userName = '';
}