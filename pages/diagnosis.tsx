import Result from "@/components/Result";
import Layout from "../components/Layout";
import MessageForm from "../components/MessageForm";
import MessagesList from "../components/MessageList";
import { MessagesProvider } from "../lib/useMessages";
import { useEffect, useState } from "react";

export default function Diagnosis() {
  const [inputReceived, setInputReceived] = useState(false);
  const [messages, setMessages] = useState([]);
  const [diagnosis, setDiagnosis] = useState("");
  useEffect(() => {
    if (messages.length > 0) {
      console.log(messages.length - 1);
      if (messages.length <= 4) {
        setDiagnosis(messages[messages.length - 1].content);
      }
      console.log(diagnosis);
    }
  }, [messages]);
  return (
    <MessagesProvider handler={setMessages}>
      <Layout>
        {!inputReceived && (
          <div>
            <MessagesList />
            <div className="flex justify-center">
              <MessageForm handler={setInputReceived} />
            </div>
          </div>
        )}
        {inputReceived && <Result diagnosis={diagnosis} />}
      </Layout>
    </MessagesProvider>
  );
}
