import { useToast } from "@apideck/components";
import { ChatCompletionRequestMessage } from "openai";
import React, { createContext, useContext, useEffect, useState } from "react";

import { sendMessage } from "./sendMessage";

interface ContextProps {
  messages: ChatCompletionRequestMessage[];
  addMessage: (content: string) => Promise<void>;
  isLoadingAnswer: boolean;
}

const ChatsContext = createContext<Partial<ContextProps>>({});

export function MessagesProvider({ children, handler }) {
  const { addToast } = useToast();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false);

  // TODO: dev purposes
  useEffect(() => {
    const initializeChat = () => {
      const systemMessage: ChatCompletionRequestMessage = {
        role: "system",
        content:
          "I will give you symptopms and an overview of how I am feeling. In response, you will give a diagnosis based on my response. MAKE SURE the response starts with the name of the diagnosis followed by a semi colon. Then follow it with 5 other comma separated possible symptoms followed by a semi colon. Then after the semi-colon, explain your resoning.",
      };
      const welcomeMessage: ChatCompletionRequestMessage = {
        role: "assistant",
        content:
          "Please describe your symptoms and how you are feeling. Include any physical or emotional changes you've noticed, along with relevant details like recent activities or exposure to illnesses. Your input will help us provide an accurate diagnosis. Remember, consulting a healthcare professional is important for a proper evaluation.",
      };
      setMessages([systemMessage, welcomeMessage]);
    };

    // When no messages are present, we initialize the chat the system message and the welcome message
    // We hide the system message from the user in the UI
    if (!messages?.length) {
      initializeChat();
    }
    console.log(messages);
    handler(messages);
  }, [messages?.length, setMessages]);

  const addMessage = async (content: string) => {
    setIsLoadingAnswer(true);
    try {
      const newMessage: ChatCompletionRequestMessage = {
        role: "user",
        content,
      };
      const newMessages = [...messages, newMessage];

      // Add the user message to the state so we can see it immediately
      setMessages(newMessages);

      const { data } = await sendMessage(newMessages);
      console.log(data);
      const reply = data.choices[0].message;

      // Add the assistant message to the state
      setMessages([...newMessages, reply]);
    } catch (error) {
      // Show error when something goes wrong
      addToast({ title: "An error occurred", type: "error" });
    } finally {
      setIsLoadingAnswer(false);
    }
  };

  return (
    <ChatsContext.Provider value={{ messages, addMessage, isLoadingAnswer }}>
      {children}
    </ChatsContext.Provider>
  );
}

export const useMessages = () => {
  return useContext(ChatsContext) as ContextProps;
};
