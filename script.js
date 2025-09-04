 const messagesDiv = document.getElementById("messages");
    const input = document.getElementById("msgInput");

    function sendMessage() {
      const text = input.value.trim();
      if (text === "") return;

      // User message
      addMessage(text, "user");
      input.value = "";

      setTimeout(() => {
        addMessage("hello i'm sagar srivastava", "bot");
      }, 1000);
      
      
      setTimeout(() => {
        addMessage("how are you ", "bot");
      }, 3000);

      
   
    }
          



    function addMessage(text, type) {
const div = document.createElement("div");
      div.classList.add("message", type);
      div.textContent = text;
      messagesDiv.appendChild(div);
      messagesDiv.scrollTop = messagesDiv.scrollHeight; 
    }

