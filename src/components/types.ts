export interface LaneData {
  shouldMarkItemsComplete?: boolean;
}

export interface Lane {
  id: string;
  title: string;
  data: LaneData;
  items: Item[];
}

export interface ItemData {
  isComplete?: boolean;
}

export interface Item {
  id: string;
  title: string;
  data: ItemData;
}

export interface Board {
  lanes: Lane[];
  archive: Item[];
}

export interface BoardModifiers {
  addItemToLane: (laneIndex: number, item: Item) => void;
  addLane: (lane: Lane) => void;
  archiveItem: (laneIndex: number, itemIndex: number, item: Item) => void;
  archiveLane: (laneIndex: number) => void;
  deleteItem: (laneIndex: number, itemIndex: number) => void;
  deleteLane: (laneIndex: number) => void;
  updateItem: (laneIndex: number, itemIndex: number, item: Item) => void;
  updateLane: (laneIndex: number, lane: Lane) => void;
}
