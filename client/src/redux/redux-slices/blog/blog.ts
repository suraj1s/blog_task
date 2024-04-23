export interface IBlog {
  id: string;
  author: string;
  created_at: string;
  updated_at: string;
  title: string;
  content: string;
}


export interface ICreateBlog {
  title: string;
  content: string;
}

export interface IUpdateBlog {
  id: string;
  data : {
    title?: string;
    content?: string;
  }
}


export interface IBlogTypes {
  count: number;
  next: null;
  previous: null;
  results: IBlog[];
}

export interface IGetBlog {
  currentPage?: number;
  searchQuery?: string | null;
}
