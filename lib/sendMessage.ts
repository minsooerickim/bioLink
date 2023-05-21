import { ChatCompletionRequestMessage } from "openai";

export const sendMessage = async (messages: ChatCompletionRequestMessage[]) => {
  try {
    // TODO: dev stub
    const response = await fetch("/api/createMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages }),
    });
    const res = await response.json();

    // FIXME: stub
    // const res = {
    //   data: {
    //     choices: [
    //       {
    //         message:
    //           'Based on your symptoms of trembling and low temperature, it is possible that you may be experiencing hypothermia. Hypothermia occurs when your body loses heat faster than it can produce heat, causing your body temperature to decrease below normal levels. This can occur due to exposure to cold temperatures, being in cold water, or wearing wet clothes for extended periods.\n\nIt is important to seek medical attention immediately if you suspect hypothermia, as it can be a life-threatening condition. While waiting for help, try to move to a warmer location if possible, remove any wet clothing, and wrap yourself in blankets or warm clothing.',
    //       },
    //     ],
    //   },
    // }

    return res;
  } catch (error) {
    console.log(error);
  }
};
