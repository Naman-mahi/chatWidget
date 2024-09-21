(function() {
    // Create chat widget elements
    const widgetContainer = document.createElement('div');
    widgetContainer.id = 'chatWidget';
    widgetContainer.innerHTML = `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
        <style>
            #chatWidget {
                position: fixed;
                bottom: 20px;
                right: 20px;
                width: 400px;
                max-height: 500px;
                border: 1px solid #ddd;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                display: none;
                background-color: #fff;
                z-index: 9999; /* Higher z-index */
            }
            .chat-header {
                background-color: #007bff;
                color: white;
                padding: 10px;
                border-radius: 8px 8px 0 0;
                position: relative;
            }
            .chat-body {
                height: 300px;
                overflow-y: auto;
                padding: 10px;
                display: flex;
                flex-direction: column;
            }
            .message {
                border-radius: 20px;
                padding: 10px;
                margin-bottom: 10px;
                max-width: 70%;
                word-wrap: break-word;
                position: relative;
            }
            .user-message {
                background-color: #007bff;
                color: white;
                align-self: flex-end;
            }
            .agent-message {
                background-color: #f1f1f1;
                color: black;
                align-self: flex-start;
            }
            .chat-input {
                display: flex;
                padding: 10px;
                border-top: 1px solid #ddd;
                background-color: #f8f9fa;
            }
            #inputMessage {
                flex: 1;
                margin-right: 10px;
                border-radius: 20px;
                padding: 10px;
                border: 1px solid #ddd;
            }
            .chat-button {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background-color: #007bff;
                color: white;
                border: none;
                border-radius: 20px;
                padding: 10px;
                cursor: pointer;
                z-index: 9999; /* Higher z-index */
            }
        </style>
        <div class="chat-header d-flex justify-content-between align-items-center">
            <span>Chat with Us</span>
            <button class="btn-close" onclick="toggleChat()" aria-label="Close"></button>
        </div>
        <div class="chat-body">
            <div id="messages" class="messages"></div>
        </div>
        <div class="chat-input">
            <input type="text" id="inputMessage" placeholder="Type your message..." onkeypress="handleKeyPress(event)" />
            <button class="btn btn-primary" onclick="sendMessage()">
                <i class="fas fa-paper-plane"></i>
            </button>
        </div>
    `;
    document.body.appendChild(widgetContainer);

    const chatButton = document.createElement('button');
    chatButton.className = 'chat-button';
    chatButton.innerHTML = 'Chat';
    chatButton.onclick = toggleChat;
    document.body.appendChild(chatButton);

    // Check for chat visibility state in localStorage
    if (localStorage.getItem('chatVisible') === 'true') {
        widgetContainer.style.display = 'block';
        chatButton.style.display = 'none';
    }

    function toggleChat() {
        const chatWidget = document.getElementById('chatWidget');
        const isVisible = chatWidget.style.display === 'block';
        chatWidget.style.display = isVisible ? 'none' : 'block';
        chatButton.style.display = isVisible ? 'block' : 'none';
        localStorage.setItem('chatVisible', !isVisible); // Store visibility state
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    }

    function sendMessage() {
        const input = document.getElementById('inputMessage');
        const messageText = input.value.trim();
        if (messageText) {
            displayMessage(messageText, 'user');
            input.value = '';
            setTimeout(() => {
                const agentResponse = "Thanks for your message!";
                displayMessage(agentResponse, 'agent');
            }, 1000);
        }
    }

    function displayMessage(text, sender) {
        const messagesContainer = document.getElementById('messages');
        const messageDiv = document.createElement('div');
        messageDiv.textContent = text;
        messageDiv.className = `message ${sender}-message`;
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Expose functions globally for usage in event handlers
    window.toggleChat = toggleChat;
    window.sendMessage = sendMessage;
    window.handleKeyPress = handleKeyPress;
})();
