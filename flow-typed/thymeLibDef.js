declare type reportType = {
  id: string,
  name: string,
  from: string,
  to: string,
  createdAt: string,
};

declare type projectType = {
  id: string,
  parent: string | null,
  name: string,
  createdAt: string,
  updatedAt: string,
};

declare type projectTreeType = projectType & { nameTree: Array<string> };
declare type projectTreeWithTimeType = projectTreeType & { time: number, entries: Array<timeType> };

declare type timePropertyType = {
  project: string | null,
  date: string,
  start: string,
  end: string,
  notes: string,
}

declare type tempTimePropertyType = {
  tracking: boolean,
} & timePropertyType;

declare type timeType = {
  id: string,
  createdAt: string,
  updatedAt: string,
} & timePropertyType;

declare type dateRanges = 'today' | 'week' | 'month' | 'older';

declare type RouterLocation = {
  pathname: string,
  search: string,
  hash: string,
  state?: any,
  key?: string
};

declare type RouterMatch = {
  isExact: boolean,
  params: any,
  path: string,
  url: string,
};
