document.addEventListener("DOMContentLoaded", function() {
  // Get the room ID from the URL and display it
  const urlParams = new URLSearchParams(window.location.search);
  const roomId = urlParams.get('room');
  if (roomId) {
      document.getElementById("roomIdDisplay").innerText = roomId;
  }

  // Close the chat box
  document.querySelector(".close-chat").addEventListener("click", function () {
      console.log("Close chat button clicked!");
      document.querySelector(".chat-box").style.display = "none";
  });

  // Close the pop-up box
  document.querySelector(".close-popup").addEventListener("click", function () {
      console.log("Close popup button clicked!");
      document.getElementById("roomPopup").style.display = "none";
  });

  // Copy Room ID to clipboard
  document.getElementById("copyRoomId").addEventListener("click", function () {
      navigator.clipboard.writeText(roomId).then(() => {
          alert("Room ID copied!");
      });
  });

  // Send chat message (locally for now)
  document.getElementById("sendMessage").addEventListener("click", function () {
      let message = document.getElementById("chatMessage").value;
      if (message.trim() !== "") {
          let chatMessages = document.querySelector(".chat-messages");
          let newMessage = document.createElement("div");
          newMessage.textContent = message;
          newMessage.style.padding = "5px";
          newMessage.style.borderBottom = "1px solid #ddd";
          chatMessages.appendChild(newMessage);
          document.getElementById("chatMessage").value = "";
          chatMessages.scrollTop = chatMessages.scrollHeight;
      }
  });

  // Generate Room ID and redirect to meeting page
  function generateRoomId() {
      return Math.random().toString(36).substr(2, 9); // Generates a 9-character room ID
  }

  // If you have a create room button in index.html, ensure it has the correct ID
  // Example: <button id="createRoom">Create Room</button>
  document.getElementById("createRoom")?.addEventListener("click", function () {
      let roomId = generateRoomId();
      window.location.href = `meeting.html?room=${roomId}`; // Redirects to the meeting page
  });
});
