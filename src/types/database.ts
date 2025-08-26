export interface Database {
  public: {
    Tables: {
      saved_items: {
        Row: {
          id: string;
          user_id: string;
          source: 'url' | 'youtube' | 'pdf' | 'paste' | 'bookmarklet';
          url: string | null;
          title: string | null;
          summary: string | null;
          text_snapshot: string | null;
          html_snapshot: string | null;
          thumbnail_url: string | null;
          created_at: string;
          saved_at: string;
          status: 'pending' | 'processing' | 'done' | 'failed';
          size_bytes: number;
          canonical_hash: string | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          source: 'url' | 'youtube' | 'pdf' | 'paste' | 'bookmarklet';
          url?: string | null;
          title?: string | null;
          summary?: string | null;
          text_snapshot?: string | null;
          html_snapshot?: string | null;
          thumbnail_url?: string | null;
          created_at?: string;
          saved_at?: string;
          status?: 'pending' | 'processing' | 'done' | 'failed';
          size_bytes?: number;
          canonical_hash?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          source?: 'url' | 'youtube' | 'pdf' | 'paste' | 'bookmarklet';
          url?: string | null;
          title?: string | null;
          summary?: string | null;
          text_snapshot?: string | null;
          html_snapshot?: string | null;
          thumbnail_url?: string | null;
          created_at?: string;
          saved_at?: string;
          status?: 'pending' | 'processing' | 'done' | 'failed';
          size_bytes?: number;
          canonical_hash?: string | null;
        };
      };
      item_chunks: {
        Row: {
          id: string;
          item_id: string;
          chunk_index: number;
          chunk_text: string;
          chunk_summary: string | null;
          embedding: number[] | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          item_id: string;
          chunk_index: number;
          chunk_text: string;
          chunk_summary?: string | null;
          embedding?: number[] | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          item_id?: string;
          chunk_index?: number;
          chunk_text?: string;
          chunk_summary?: string | null;
          embedding?: number[] | null;
          created_at?: string;
        };
      };
      clusters: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          description: string | null;
          item_ids: string[];
          embedding: number[] | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          name: string;
          description?: string | null;
          item_ids?: string[];
          embedding?: number[] | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          name?: string;
          description?: string | null;
          item_ids?: string[];
          embedding?: number[] | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      digests: {
        Row: {
          id: string;
          user_id: string;
          title: string;
          content: string;
          pdf_url: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          title: string;
          content: string;
          pdf_url?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          title?: string;
          content?: string;
          pdf_url?: string | null;
          created_at?: string;
        };
      };
      user_quotas: {
        Row: {
          user_id: string;
          used_items: number;
          limit_items: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          used_items?: number;
          limit_items?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          user_id?: string;
          used_items?: number;
          limit_items?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}