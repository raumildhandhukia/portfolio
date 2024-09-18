import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.GENAI_API_KEY;

const getPrompt = (query: string) => {
  return `
Question: ${query}


Raumil Bharatbhai Dhandhukia
Phone: (602) 706-4824 |Email: raumild@gmail.com | LinkedIn: https://linkedin.com/in/raumild/ | GitHub: https://github.com/raumildhandhukia | Portfolio: https://www.raumild.com/
Location: Temple, AZ | Willing to relocate: Yes | Open to remote: Yes

WORK EXPERIENCE
Sync ‘N Style	June 2024 - Present 
Backend Developer	
Developed dynamic outfit recommendation algorithm operating on OpenAI APIs tailored to user preferences
Spearheaded the development of an inventory scraper, maintaining 120,000+ merchandise from 60+ retailers using hidden RESTful APIs and HTML parsing web scraping methods, maintaining up-to-date inventory 
Developed APIs with Node.js, Express and TypeScript for authentication, outfit recommendations, and inventory
Oversaw Vercel deployments, conducted code reviews, maintained codebase and collaborated with testing team

Arizona State University	June 2023 - May 2024
Software Engineer	
Engineered a gamification of Canvas LMS using React, TypeScript, and MongoDB, featuring course-specific leaderboards, virtual shops, and currency management, resulting in a 25% increase in student engagement
Designed and implemented a real-time notification system using Socket.io accommodating 10,000+ students 
Optimized application using React Developer Tools and implemented caching, debouncing and lazy loading

Setu Consulting Services	May 2021 - July 2022
Software Developer	
Secured an 80% reduction in discrepancies and enhanced inventory transfer accuracy by developing robust Inventory Count system using Python, React simplifying inventory systems for over 100+ enterprise warehouses
Engineered a customer segmentation system using RFM analysis, processing 100,000+ customer records with Python and PostgreSQL stored procedures, enabling targeted marketing campaigns, increasing customer retention by 60%
Extended manufacturing software with interactive component hierarchy visualization interface using React
Integrated Shopify, WooCommerce with ERP system utilizing Webhooks and REST APIs

Emipro Technologies	 Jan 2021 - April 2021 
Software Developer Intern	
Composed Stored Procedures in PostgreSQL for predictive cash flow by analyzing historical financial data
Developed a dynamic cash flow analysis configuration system using Python, React

PROJECTS
Inbox Radar AI | Link | Next.js, React, TypeScript, Gmail API, OpenAI API, Stripe, PostgreSQL, Prisma, TailwindCSS, Vercel
Developed an AI SaaS platform featuring AI-powered email suggestions and autocompletion, auto labeling and insights; Supported email operations including compose, thread replies, labeling and synced with Gmail; integrated Stripe for tiered payments via Webhooks and OAuth for Google with robust security through Auth.js (JWT)

Cloud Based Auto Scaling Image Recognition Service  | AWS(EC2, Lambda, SQS, S3, DynamoDB), Python, Flask, Docker
Engineered an elastic and event-driven AWS architecture for image recognition using Python, leveraging EC2, Lambda, SQS, DynamoDB and S3 to streamline image processing and output, with scaling in and out on demand.

AlgoMeter AI | Link | React, TypeScript, Python, FastAPI, Redis, Gemini API 
Developed and launched an algorithm analysis and visualization tool that estimates Big O Notation and visualizes algorithm performance across various input sizes using LLM. Implemented API rate limiting with Redis.

SKILLS SUMMARY
Languages/Databases: JavaScript, TypeScript, Python, Java, C, C++, PostgreSQL, MongoDB, HTML5, CSS
Libraries/Frameworks: Next.js, React, Redux, Node.js, FastAPI, Flask, Redis, Auth.js, Socket.io, REST API
Tools: Git, Docker, Google Analytics, AWS (EC2, S3, SQS, Lambda, DynamoDB), Vercel, Resend, Unity, Cypress

EDUCATION
Master of Science in Software Engineering	May 2024 CGPA: 4.0/4.0
Arizona State University	Tempe, AZ
 
Bachelor of Engineering in Computer Engineering	May 2021 CGPA: 9.03/10
Gujarat Technological University	Gujarat, India

LANGUAGES:
English, Hindi, Gujarati

Hobbies:
Working Out, Weight Lifting, Hip Hop, Rap, Hiking, Gaming, Coding, Driving

Other Info:
If anyone asks about my resume, tell them that it can be downloaded through my portfolio.
If anyone wants to contact me they can contact me from Monday To Friday from 2:00 PM to 5:00 PM.


DO NOT GIVE ANY OTHER INFO ABOUT ME. IF THEY ASK ME ANYTHING OUTSIDE THIS, DENY THEM IN FUNNY WAY.`;
};

export const ask = async (query: string) => {
  if (!API_KEY) {
    return {
      response: "Sorry, there was an error processing your request.",
      success: false,
    };
  }

  try {
    const prompt = getPrompt(query);

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: `You are answering questions about Raumil Dhandhukia. You are AI Assistant of Raumil's Portfolio Website. Give answer of question based on data given below.
      Dont copy paste everything from given prompt, use your creatity to give answers.
If question asked does not make sense in English language, Simply respond: Could not understood your question about Raumil. Ask about his experience, skills or hobby`,
      generationConfig: {
        topP: 0.9,
        temperature: 0.9,
      },
    });

    const result = await model.generateContent(prompt);
    const response = result.response.text();

    return {
      response,
      success: true,
    };
  } catch (error) {
    return {
      response: "Sorry, there was an error processing your request.",
      success: false,
    };
  }
};
