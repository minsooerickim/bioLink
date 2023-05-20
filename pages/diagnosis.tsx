import Layout from "../components/Layout";
import MessageForm from "../components/MessageForm";
import MessagesList from "../components/MessageList";
import { MessagesProvider } from "../lib/useMessages";

export default function Diagnosis() {
  return (
    <MessagesProvider>
      <Layout>
        <MessagesList />
        <div className="flex justify-center">
          <MessageForm />
        </div>
      </Layout>
    </MessagesProvider>
  );
}
