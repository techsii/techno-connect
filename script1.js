function showCreateChannel() {
    document.getElementById('createChannelModal').style.display = 'flex';
}

function hideModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function createChannel() {
    const channelName = document.querySelector('#createChannelModal input').value.trim();
    if (channelName) {
        const newChannel = document.createElement('div');
        newChannel.className = 'channel-item';
        newChannel.textContent = `# ${channelName}`;
        document.querySelector('.channel-list').insertBefore(newChannel, document.querySelector('.channel-list button'));
        document.querySelector('#createChannelModal input').value = '';
        hideModal('createChannelModal');
    }
}

function addDepartment() {
    document.getElementById('addDepartmentModal').style.display = 'flex';
}

function createDepartment() {
    const departmentName = document.getElementById('departmentNameInput').value.trim();
    if (departmentName) {
        const newDepartment = document.createElement('div');
        newDepartment.className = 'server-icon';
        newDepartment.textContent = departmentName;
        document.querySelector('.server-list').insertBefore(newDepartment, document.querySelector('.server-list button'));
        document.getElementById('departmentNameInput').value = '';
        hideModal('addDepartmentModal');
    }
}

// Message sending simulation
document.querySelector('textarea').addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        const message = e.target.value.trim();
        if (message) {
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

// Dummy Student ID list (in real version, this would be from backend)
const validStudentIDs = ['TIU123', 'TIU456', 'TIU789'];

function verifyStudent() {
    const studentId = document.getElementById('studentIdInput').value.trim();
    const password = document.getElementById('passwordInput').value.trim();
    const loginError = document.getElementById('loginError');

    if (!studentId || !password) {
        loginError.textContent = "Please enter both Student ID and Password.";
        loginError.style.display = 'block';
        return;
    }

    // Dummy credentials (replace with real validation logic)
    const validId = "TIU123";
    const defaultPassword = "pass123";

    if (studentId === validId && password === defaultPassword) {
        loginError.style.display = 'none';
        document.getElementById('loginModal').style.display = 'none';
        document.getElementById('app').style.display = 'flex';
    } else {
        loginError.textContent = "Invalid credentials. Please try again.";
        loginError.style.display = 'block';
    }
}
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('passwordInput');
    const toggleIcon = document.querySelector('.toggle-password');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.src = 'eyeopen.png'; // Show open eye
    } else {
        passwordInput.type = 'password';
        toggleIcon.src = 'eyehide.png'; // Show closed eye
    }
}




// Toggle the visibility of the attachment options
function toggleAttachmentOptions() {
    const menu = document.getElementById('attachmentOptions');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Handle file upload and append message
function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const messagesContainer = document.querySelector('.chat-messages');
        const newMessage = document.createElement('div');
        newMessage.className = 'message';
        newMessage.innerHTML = `
            <div class="message-avatar"></div>
            <div class="message-content">
                <div class="message-author">You <span>Just now</span></div>
                <div class="message-text">📎 Uploaded: ${file.name}</div>
            </div>
        `;
        messagesContainer.appendChild(newMessage);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    document.getElementById('attachmentOptions').style.display = 'none';
}

document.addEventListener('click', function(event) {
    const options = document.getElementById('attachmentOptions');
    const button = document.querySelector('.options-button');

    if (!options.contains(event.target) && !button.contains(event.target)) {
        // Apply fade-out
        options.classList.remove('fade-in');
        options.classList.add('fade-out');

        // Hide after transition ends
        setTimeout(() => {
            options.style.display = 'none';
        }, 300); // Match the CSS transition duration
    }
});
function toggleAttachmentOptions() {
    const options = document.getElementById('attachmentOptions');

    options.style.display = 'flex';
    options.classList.remove('fade-out');
    options.classList.add('fade-in');
}
