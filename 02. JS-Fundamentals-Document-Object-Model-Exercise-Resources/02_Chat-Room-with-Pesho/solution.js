function solve() {
    document.getElementsByName('myBtn')[0].addEventListener('click', sendMessage);
    document.getElementsByName('peshoBtn')[0].addEventListener('click', sendMessage);
    myChatBox.value = '';
    peshoChatBox.value = '';
    let chatChronology = document.getElementById('chatChronology');

    function sendMessage(btn) {
        let messageContent = document.createElement('div');
        let sender = document.createElement('span');
        let message = document.createElement('p');
        let myChatBox = document.getElementById('myChatBox');
        let peshoChatBox = document.getElementById('peshoChatBox');

        if (btn.target.name === 'myBtn') {
            sender.textContent = 'Me';
            message.textContent = myChatBox.value;
            messageContent.appendChild(sender);
            messageContent.appendChild(message);
            chatChronology.appendChild(messageContent).style.textAlign = 'left';
            myChatBox.value = '';
            } else {
            sender.textContent = 'Pesho';
            message.textContent = peshoChatBox.value;
            messageContent.appendChild(sender);
            messageContent.appendChild(message);
            chatChronology.appendChild(messageContent).style.textAlign = 'right';
            peshoChatBox.value = '';
        }
    }
}