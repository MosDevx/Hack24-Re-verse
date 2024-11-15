// types.ts
export interface Activity {
    id: string;
    name: string;
    participants: number;
    messages: number;
    description: string;
    progress: string;
    resources: string[];
  }
  
  export interface Community {
    id: string;
    profileImage: string;
    name: string;
    members: number;
    createdAt: string;
    description?: string;
    activities?: Activity[];
  }
  