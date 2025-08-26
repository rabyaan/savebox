export interface SaveRequest {
  source: 'url' | 'youtube' | 'pdf' | 'paste';
  url?: string;
  title?: string;
  rawText?: string;
  file?: File;
}

export interface SaveResponse {
  success: boolean;
  itemId?: string;
  error?: string;
  quota?: {
    used: number;
    limit: number;
  };
}

export interface SearchRequest {
  query: string;
  limit?: number;
  includeActions?: boolean;
}

export interface SearchResponse {
  answer: string | 'NOT_FOUND';
  sources: SearchSource[];
  actions: string[];
  confidence?: number;
}

export interface SearchSource {
  title: string;
  url: string;
  snippet: string;
  itemId: string;
}

export interface ClusterResponse {
  id: string;
  name: string;
  description: string;
  itemCount: number;
  items: ClusterItem[];
  confidence: number;
}

export interface ClusterItem {
  id: string;
  title: string;
  url: string | null;
  snippet: string;
  source: string;
}

export interface ProcessingStatus {
  itemId: string;
  status: 'pending' | 'processing' | 'done' | 'failed';
  progress?: number;
  currentStep?: 'snapshot' | 'chunking' | 'embedding' | 'clustering';
  error?: string;
}