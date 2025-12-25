export type Id = string;

export type ChatHistory = {
  id: Id;
  title: string;
  updatedAt: string;
};

export type Assistant = {
  id: Id;
  name: string;
  description?: string;
};
