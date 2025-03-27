# WORK IN PROGRESS
# 🤖 KotBot

**KotBot** is a simple Telegram bot developed to explore and familiarize with the [Telegram Bot API](https://core.telegram.org/bots/api). This project serves as a practical exercise in integrating with Telegram's messaging platform using JavaScript.

## 🛠️ Features

- **Echo Functionality**: Responds to user messages by echoing back the received text.
- **Command Handling**: Recognizes and processes basic commands sent by users.
- **Asynchronous Messaging**: Utilizes asynchronous operations to handle multiple user interactions concurrently.

## 🧰 Technologies Used

- **Node.js**: JavaScript runtime for server-side scripting.
- **Telegram Bot API**: Interface for building bots that interact with Telegram users and groups.

## 📂 Project Structure

- `index.js`: Main script containing the bot's logic and interaction handlers.
- `package.json`: Manages project dependencies and metadata.
- `.gitignore`: Specifies files and directories to be ignored by Git.

## 🚀 Getting Started

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/karolsykala/kotbot.git
   cd kotbot
   ```

2. **Install Dependencies**:
   Ensure you have Node.js installed. Install the required packages using npm:
   ```sh
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add your Telegram bot token:
   ```env
   TELEGRAM_BOT_TOKEN=your_bot_token_here
   ```

4. **Run the Bot**:
   Start the bot using:
   ```sh
   node index.js
   ```

## 📝 Usage

Once the bot is running:

- **Start a Chat**: Open Telegram and search for your bot using its username. Start a conversation by sending the `/start` command.
- **Interact**: Send messages or commands, and the bot will respond accordingly based on the implemented functionalities.
