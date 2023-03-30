export interface TagProps {
  title: string | unknown;
  name: string;
  fullPath: string;
  query?: any;
  ignoreCache?: boolean | unknown;
}

export interface TabBarState {
  tagList: TagProps[];
  cacheTabList: Set<string>;
}
