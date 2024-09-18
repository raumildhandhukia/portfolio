"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import WordFadeIn from "./ui/FadeIn";

const ask = async (query: string) => {
  const res = await fetch("/api/ask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const data = await res.text();
  if (res.ok) {
    return {
      response: data,
      success: true,
    };
  } else {
    return {
      response: "Sorry, there was an error processing your request.",
      success: false,
    };
  }
};

export function AskRaumil() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAsk = async () => {
    if (question.trim() === "") return;

    setIsLoading(true);
    setAnswer("");

    try {
      const { response, success } = await ask(question);
      if (success) {
        setAnswer(response);
        setQuestion("");
      } else {
        setAnswer("Sorry, there was an error processing your request.");
      }
    } catch (error) {
      console.error("Error fetching response:", error);
      setAnswer("Sorry, there was an error processing your request.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[100vw] mx-auto p-4 mt-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        Ask me anything
      </h1>

      <div className="flex space-x-2 mb-4 mt-6">
        <Input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask anything about me (e.g. skills, experience, contact, social media, hobbies)"
          className="flex-1 focus:outline-none text-md" // Ensure the font-size is 16px or larger
        />
        <Button onClick={handleAsk} disabled={isLoading}>
          <Send className="h-4 w-4" />
        </Button>
      </div>

      {isLoading ? (
        <div className="mt-4 p-4 bg-black-200 rounded-2xl shadow-lg animate-fade-in">
          <div className="space-y-2">
            <Skeleton className="h-3 w-3/4 bg-gradient-to-r from-blue-300 to-blue-300 opacity-60" />
            <Skeleton className="h-3 w-full bg-gradient-to-r from-red-400 to-purple opacity-60" />
            <Skeleton className="h-3 w-5/6 bg-gradient-to-r from-pink-500 to-pink-300 opacity-60" />
            <Skeleton className="md:hidden h-3 w-3/4 bg-gradient-to-r from-blue-300 to-blue-300 opacity-60" />
            <Skeleton className="md:hidden h-3 w-full bg-gradient-to-r from-red-400 to-purple opacity-60" />
            <Skeleton className="md:hidden h-3 w-5/6 bg-gradient-to-r from-pink-500 to-pink-300 opacity-60" />
          </div>
        </div>
      ) : answer ? (
        <div className="mt-4 p-4 bg-black-200 rounded-2xl shadow-lg animate-fade-in">
          <p className="text-purple">
            <WordFadeIn words={answer} className="text-md" />
          </p>
        </div>
      ) : null}
    </div>
  );
}
