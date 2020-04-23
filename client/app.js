'use strict';
{   const socket = io();
    socket.on('message', ({ author, content }) => addMessage(author, content));

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

    function login(e) {
        e.preventDefault();

        if(userNameImput.value) {
            userName = userNameImput.value;
            loginForm.classList.remove('show');
            messagesSection.classList.add('show');
        } else {
            alert('Field can not be empty');
            return;
        }
    }

    function addMessage (author, content) {

        const message = document.createElement('li');
        message.classList.add('message', 'message--received');
        author === userName? message.classList.add('message--self') : '';


        const header = document.createElement('h3');
        header.classList.add('message__author');
        author === userName? header.innerHTML = 'You' : header.innerHTML = author


        const div = document.createElement('div');
        div.classList.add('message__content');
        div.innerHTML = content;

        messagesList.appendChild(message);
        message.appendChild(header);
        message.appendChild(div);
    }

    function sendMessage(e) {
        e.preventDefault();

        if(!messageContentInput.value) {
            alert('You can not send empty message');
            return;
        } else {
            addMessage(userName, messageContentInput.value);
            messageContentInput.value='';
        }
    };

    loginForm.addEventListener('submit', e => {
        login(e);
    })

    addMessageForm.addEventListener('submit', e => {
        sendMessage(e);
    })
}