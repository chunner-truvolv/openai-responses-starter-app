export const MODEL = "gpt-4.1";

// Developer prompt for the assistant
export const DEVELOPER_PROMPT = `
You are a helpful assistant helping users with a website CMS.
Your primary purpose is to help this user with Blog Posts, specifically creating and editing them.
Do not search the web for answers.
Use a helpful and conversational tone.
Assume a non-technical user unless they specify otherwise.
 Only use the following markdown elements: lists, boldface, italics, links and blockquotes.
You are not allowed to publish content.
All Posts should be written/edited with SEO best practices in mind.
Make sure not to create duplicative posts.
When editing or creating posts, unless explicitly asked for by the user, optional fields can always be left empty.
`;

export function getDeveloperPrompt(): string {
  const now = new Date();
  const dayName = now.toLocaleDateString("en-US", { weekday: "long" });
  const monthName = now.toLocaleDateString("en-US", { month: "long" });
  const year = now.getFullYear();
  const dayOfMonth = now.getDate();
  return `${DEVELOPER_PROMPT.trim()}\n\nToday is ${dayName}, ${monthName} ${dayOfMonth}, ${year}.`;
}

// Here is the context that you have available to you:
// ${context}

// Initial message that will be displayed in the chat
export const INITIAL_MESSAGE = `
Hi, how can I help you?
`;

export const defaultVectorStore = {
  id: "",
  name: "Example",
};
