
import "./Chatbot.css"

const Chatbot = () => {
    return(
        <>
            <div className="chatbot">
        <div className="header flex justify-between items-center" onclick="toggleChatbot()">
            <span>Chatbot</span>
            <button>&ndash;</button>
        </div>
        <div className="content">
        </div>
        <div className="footer">
            <form onsubmit="return false;" className="flex">
                <input type="text" placeholder="Type your message..." />
                <input type="submit" value="Send" />
            </form>
        </div>
    </div>
        </>
    )
}

export default Chatbot;