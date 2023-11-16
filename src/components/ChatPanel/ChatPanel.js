import React, { useState, useEffect } from "react";
import ChatList from "../ChatList/ChatList";
import ChatInput from "../ChatInput/ChatInput";
import "./ChatPanel.scss";
const ChatPanel = () => {
  const [chats, setChats] = useState([]);
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const thread = sessionStorage.getItem("thread");
    if (thread) {
      setChats(JSON.parse(thread));
    }
  }, []);

  const generateQuery = (query) => {
    const obj = {
      id: crypto.randomUUID(),
      sender: "USER",
      created_at: Date.now(),
      output: {
        output_text: [query],
      },
    };
    return obj;
  };
  console.log(response, isLoading);
  const getResult = async (query) => {
    const payload = {
      input_prompt: query,
    };
    setChats((chats) => [...chats, generateQuery(query)]);
    setIsLoading(true);

    const response = await fetch("https://api.gooey.ai/v2/video-bots/", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + process.env["REACT_APP_GOOEY_API_KEY"],
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      setIsLoading(false);
      setChats([...chats, generateQuery(query)]);
      throw new Error(response.status);
    }

    const result = await response.json();
    // const result = await new Promise((resolve, reject) => {
    //   setTimeout(
    //     () =>
    //       resolve({
    //         id: "123ulokk",
    //         url: "https://gooey.ai/copilot/?run_id=123ulokk&uid=XitMe1We2ketUsI3vMMQFoy4KGF3",
    //         created_at: "2023-11-09T10:33:07.338031",
    //         output: {
    //           final_prompt: "",
    //           output_text: [
    //             "I'm sorry, but I couldn't find any specific videos on protecting crops from insects. However, I can provide you with some general tips. To protect your crops from insects, you can:\n\n1. Use organic insecticides: Consider using organic insecticides instead of chemical ones. These are safer for the environment and do not harm the farmer or the farm. [2] 2. Manual collection: Walk in the field and manually collect insects in plastic bags or use a sweep net to catch them. This can help reduce their population. [2] 3. Identify pests and defenders: Learn to identify the pests and beneficial insects in your field. This will help you understand the interactions between them and make informed decisions about pest control. [2] 4. Crop management: Analyze the field situation and make crop management recommendations based on your observations. This can include practices like crop rotation, intercropping, and using resistant varieties. [2] \n\nRemember, it's always a good idea to consult with local agricultural experts or extension agents for specific recommendations based on your location and crop.  \n\n2. Approved - AESA based IPM Chillies - MoAFW.pdf, page 16 https://gooey.ai/2/Alv1",
    //           ],
    //           output_audio: [
    //             "https://storage.googleapis.com/dara-c1b52.appspot.com/daras_ai/media/655e01b8-7eeb-11ee-9455-02420a0001b5/google_tts_gen.mp3",
    //           ],
    //           output_video: [
    //             "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    //           ],
    //           raw_input_text:
    //             "How can I protect crop from insects. Show me some videos.",
    //           raw_tts_text: null,
    //           raw_output_text: [
    //             "I'm sorry, but I couldn't find any specific videos on protecting crops from insects. However, I can provide you with some general tips. To protect your crops from insects, you can:\n\n1. Use organic insecticides: Consider using organic insecticides instead of chemical ones. These are safer for the environment and do not harm the farmer or the farm.2. Manual collection: Walk in the field and manually collect insects in plastic bags or use a sweep net to catch them. This can help reduce their population.3. Identify pests and defenders: Learn to identify the pests and beneficial insects in your field. This will help you understand the interactions between them and make informed decisions about pest control.4. Crop management: Analyze the field situation and make crop management recommendations based on your observations. This can include practices like crop rotation, intercropping, and using resistant varieties.\n\nRemember, it's always a good idea to consult with local agricultural experts or extension agents for specific recommendations based on your location and crop.",
    //           ],
    //           references: [
    //             {
    //               url: "https://gooey.ai/2/OJXG",
    //               title: "T-guard",
    //               snippet:
    //                 "Video Meta Data\nsubject=T-guard\ncategory=\nsubcategory=\ntopic=\nsubtopic=\ncountry=India\nlanguage=Hindi\nstate=Madhya Pradesh\nSummary=\n1. Apply a date sheet to the crop no matter how big it is to ensure better yields.\n2. Consider the amount of rain required for the crops and take necessary precautions.\n3. Use a pesticide that can destroy pests on the farm.\n4. Planting such pesticide once will help in destroying pests of other fields as well.\n5. Save money for household work by taking necessary precautions and using effective pesticides.\nTranscript=\nZara My name is Bhagwan Singh Pawar My name is only a resident of my village One more one more rope in the country\n\n from whom it is good\n\n\n\n To whom you will get this vehicle in SSC Hiran Nagar\n\n One who can see what will happen if he applies at least a date sheet to the crop no matter how big his crop is, the famous thing by remembering him\n\n How much is needed like rain service What are the other precautions in this Will eat our son's fruit first Will eat this message There is one drawback After applying at least 10 to 12\n\n One has to suffer, it takes one's own money for household work.\n\n Money is saved and I am sure of my farm, I would like to give this message to all my farmer brothers that everyone should plant it once, it will destroy the pests of their farm and like one farm after another. If I remain in this field, then the pests of other fields will not be able to return to their fields, so everyone should have sung this song to save their money in the car and do their household chores. There is savings and whatever is done in your farm will also be destroyed, so it is a request to all that Sir, you have given such a good information about us and our ghat, for this you should be thanked.\n\n...\n\nVideo Meta Data\nsubject=Application of Bio-Insecticide\ncategory=Agriculture\nsubcategory=Pest and disease Management\ntopic=Pest Control\nsubtopic=Organic\ncountry=India\nlanguage=Hindi\nstate=Bihar\nSummary=\n1. Use organic fertilizers and medicines instead of chemical ones.\n2. Use organic insecticides for long-term effects that do not harm the farm or the farmer.\n3. Use protective gear like plastic gloves, masks, and glasses while spraying organic medicine.\n4. Spray organic medicine in the morning or evening, avoiding the afternoon sun and wind direction.\n5. Read and follow the instructions carefully while spraying organic medicine to avoid any harm to oneself or the farm.\n6. Reduce or avoid the use of chemical fertilizers to avoid their harmful effects on the farm and environment.\nTranscript=\nHello, I am Anand Kumar Singh from Asha Sansthan, today I have come to the program of the city block, the residents of this area have started using organic fertilizers and medicines instead of chemical fertilizers and medicines, today I am a progressive farmer. Going to meet Mohammad Kamaluddin sir who is going to do new use of organic medicines in his farm today let's meet him what he is doing\n\n Hello Kamal Bhai, I am from Ananda Sanstha, Hello, how did you come, I have heard that today you are going to use organic pesticides in your field, in this connection I have come to talk to you.\n\nBrother, you are going to use your organic insecticide today, Anand Babu, now the time has come for the release of cannabis, after the release of the paddy head, the juice to the skeet, which speaks dirty, they suck the legislation of our area. Don't take it for that we are organic insecticide medicine we will use it's name it's Goddess Arab's coming brother give it to me brother which is an organic insecticide subject 1 gram contains 10 crores of eggs it's going to go to our fields After that, we kill or make sick the pests that harm the crop, so that our crop is safe and remains healthy.\n\nBrother, today there are many chemical insecticides available in the market, then you want to use organic insecticides.",
    //               score: 0.9756742464304602,
    //             },
    //             {
    //               url: "https://gooey.ai/2/Alv1",
    //               title:
    //                 "Approved - AESA based IPM Chillies - MoAFW.pdf, page 16",
    //               snippet:
    //                 "While walking in the field, manually collect insects in plastic bags. Use a sweep net to\ncollect additional insects. Collect plant parts with disease symptoms.\nFind a shady place to sit as a group in a small circle for drawing and discussion.\nIf needed, kill the insects with some chloroform (if available) on a piece of cotton.\nEach group will first identify the pests, defenders and diseases collected.\nEach group will then analyze the field situation in detail and present their observations\nand analysis in a drawing (the AESA drawing).\nEach drawing will show a plant representing the field situation. The weather condition,\nwater level, disease symptoms, etc. will be shown in the drawing. Pest insects will be\ndrawn on one side. Defenders (beneficial insects) will be drawn on another side. Write\nthe number next to each insect. Indicate the plant part where the pests and defenders\nwere found. Try to show the interaction between pests and defenders.\nEach group will discuss the situation and make a crop management recommendation.\nThe small groups then join each other and a member of each group will now present their\nanalysis in front of all participants.\nThe facilitator will facilitate the discussion by asking guiding questions and makes sure\nthat all participants (also shy or illiterate persons) are actively involved in this process.\nFormulate a common conclusion. The whole group should support the decision on what\nfield management is required in the AESA plot.\nMake sure that the required activities (based on the decision) will be carried out.\nKeep the drawing for comparison purpose in the following weeks.\n\n16",
    //               score: 0.9523809523809523,
    //             },
    //           ],
    //           final_search_query:
    //             "To protect crops from insects, you can watch videos that provide information on effective methods.",
    //           final_keyword_query: null,
    //         },
    //       }),
    //     2000
    //   );
    // });
    setResponse(result);

    setChats((chats) => chats.concat(result));
    setIsLoading(false);
    const thread = JSON.stringify(chats);
    sessionStorage.setItem("thread", thread);
  };
  return (
    <div className="flex h-screen max-w-full flex-1 flex-col overflow-hidden relative">
      <main className="h-full w-full flex-1 overflow-auto transition-width">
        <div className="flex h-full flex-col">
          <div className="flex-1 overflow-y-auto">
            <div className="relative h-full">
              {chats?.length !== 0 && (
                <div className="flex flex-col text-sm dark:bg-zinc-800 pb-16">
                  <ChatList items={chats} isLoading={isLoading} />
                </div>
              )}
            </div>
          </div>
        </div>
        <ChatInput onSubmitCallback={getResult} isLoading={isLoading} />
      </main>
    </div>
  );
};

export default ChatPanel;
