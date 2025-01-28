import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.GENAI_API_KEY;

const getPrompt = (query: string) => {
  return `
Question: ${query}

answer the question based on given data of Raumil. If data does not answer, reply something with sarcasm. Dont say that data does not have answer. 
Raumil Dhandhukia
Sunnyvale, CA
 (602) 706-4824 | raumild@gmail.com | LinkedIn - https://www.linkedin.com/in/raumild/  | GitHub - https://github.com/raumildhandhukia | Portfolio - www.raumild.com
EDUCATION
Master of Science in Software Engineering	May 2024
Arizona State University	Tempe, AZ
Coursework: Software Design, Cloud Computing, Algorithms, Compiler Design, Data Structures (GPA: 4.00/4.00)	
 
Bachelor of Engineering in Computer Engineering	May 2021
Gujarat Technological University	Gujarat, India
Coursework: Web Development, Operating Systems, Java, Analysis Of Algorithms, OOP (GPA: 9.03/10.00)

HOBBIES:
Travelling, Weight Lifting, Gaming, Leetcoding, Thriller Movies

WORK EXPERIENCE
SowFin	June 2024 - Present
Full Stack Developer	
Created Financial Analysis microservice using Python, FastAPI and SQLAlchemy, supporting AI-driven analytics
Integrated Qdrant vector search to index embedded Form 10-K documents, enabling AI-driven competitor analysis
Implemented CrewAI framework, managed AI agents, orchestrated tasks for financial and competitive analysis
Visualized competitor analysis and valuation reports with React and Recharts for strategic decision-making

Celect AI	May 2023 - May 2024 
Software Developer Intern	
Implemented responsive UI for the recruitment platform using Next.js, React, TypeScript and shadcn-ui
Implemented a Pub/Sub system for AI-driven candidate processing using Azure Service Bus and Azure Functions
Developed role-specific dashboards using Next.js and React, improved data visualization and user productivity
Optimized performance by reducing API calls using React Query, achieving a 60% reduction in page load time
Integrated REST APIs with Next.js frontend using tRPC, enhanced type safety and streamlined data fetching

Setu Consulting Services	May 2021 - July 2022
Software Developer	
Secured an 80% reduction in discrepancies and enhanced inventory transfer accuracy by developing robust Inventory Count system using Python, React simplifying inventory systems for over 100+ enterprise warehouses
Engineered a customer segmentation system using RFM analysis, processing 100,000+ customer records with Python and PostgreSQL stored procedures, enabling targeted marketing campaigns, increasing customer retention by 60%
Developed UI for for manufacturing system using React and D3.js with interactive component tree visualization, automated cycle detection, real-time quantity tracking, and error handling
Integrated Shopify, WooCommerce, and EDI with ERP system utilizing Webhooks and REST APIs

Emipro Technologies	 Jan 2021 - April 2021 
Software Developer Intern	
Composed Stored Procedures in PostgreSQL for predictive cash flow by analyzing historical financial data
Developed a cash flow analysis module with configurable parameters for customized insights using Python and React

PROJECTS
Inbox Radar AI | Link | Next.js, React, TypeScript, Gmail API, OpenAI API, Stripe, PostgreSQL, Prisma, TailwindCSS, Vercel
Developed an AI SaaS platform featuring AI-powered email suggestions, autocompletion, labeling and insights; Supported email operations including compose, thread replies, labeling and fully integrated with Gmail; integrated Stripe via Webhooks; implemented Single Sign-On (SSO) using Auth.js

Cloud Based Auto Scaling Image Recognition Service  | AWS(EC2, Lambda, SQS, S3, DynamoDB), Python, Flask, Docker
Engineered an elastic and event-driven AWS architecture for image recognition using Python, leveraging EC2, Lambda, SQS, DynamoDB and S3 to streamline image processing and output, with scaling in and out on demand

SKILLS SUMMARY
Languages/Databases: Python, Java, TypeScript, JavaScript, C, C++, PostgreSQL, MongoDB, HTML5, CSS
Libraries/Frameworks: Next.js, React, Node.js, FastAPI, Redis, Auth.js, Socket.io, REST API
Tools: Git, Docker, AWS, Microsoft Azure, Vercel, Resend, Unity, Cypress, Google Analytics`;
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
