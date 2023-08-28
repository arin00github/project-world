export interface notionProperties {
  id: string;
  type: string;
  title?: propertyUnit[];
  rich_text?: propertyUnit[];
  multi_select?: propertyUnit2[];
}

export interface propertyUnit {
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
  };
  href: string | null;
  plain_text: string;
  text: { content: string; link: string | null };
  type: string;
}

export interface propertyUnit2 {
  id: string;
  name: string;
  color: string;
}

export interface pageUnit {
  archive: boolean;
  cover: string | null;
  created_by: { object: string; id: string };
  created_time: string;
  icon: string | null;
  id: string;
  last_edited_by: { object: string; id: string };
  last_edited_time: string;
  parent: { type: string; database_id: string };
  properties: Record<string, notionProperties>;
  object: string;
  public_url: string | null;
  url: string;
}
