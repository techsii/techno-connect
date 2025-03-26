function showCreateChannel() {
    document.getElementById('createChannelModal').style.display = 'flex';
}

function hideModal() {
    document.getElementById('createChannelModal').style.display = 'none';
}

function createChannel() {
    const channelName = document.querySelector('#createChannelModal input').value;
    if(channelName) {
        const newChannel = document.createElement('div');
        newChannel.className = 'channel-item';
        newChannel.textContent = `# ${channelName}`;
        document.querySelector('.channel-list').insertBefore(newChannel, document.querySelector('.channel-list button'));
        hideModal();
    }
}

// Message sending simulation
document.querySelector('textarea').addEventListener('keypress', (e) => {
    if(e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        const message = e.target.value.trim();
        if(message) {
            const messagesContainer = document.querySelector('.chat-messages');
            const newMessage = document.createElement('div');
            newMessage.className = 'message';
            newMessage.innerHTML = `
                <div class="message-avatar"></div>
                <div class="message-content">
                    <div class="message-author">User <span>Just now</span></div>
                    <div class="message-text">${message}</div>
                </div>
            `;
            messagesContainer.appendChild(newMessage);
            e.target.value = '';
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    }
});

    function addDepartment() {
        const departmentName = prompt("Enter the department name:");
        if (departmentName) {
            const newDepartment = document.createElement('div');
            newDepartment.className = 'server-icon';
            newDepartment.textContent = departmentName;
            document.querySelector('.server-list').insertBefore(newDepartment, document.querySelector('.server-list button'));
        }
    }



    function toggleBranch(branchId) {
        const branchList = document.getElementById(branchId);
        if (branchList.style.display === "none") {
            branchList.style.display = "block";
        } else {
            branchList.style.display = "none";
        }
    }