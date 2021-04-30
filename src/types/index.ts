export interface DataType {
  id: string;
  title: string;
  state: string;
  url: string;
  created: string;
  updated: string;
}

export interface ModalType {
  updateIssueArr: DataType[];
  isModalOpen: {
    isOpen: boolean;
    isEdit: boolean;
  };
}

export interface TableType {
  issues: DataType[];
  syncIssueHandler: () => void;
  createIssueHandler: () => void;
  editIssueHandler: (id: string) => void;
  deleteIssueHandler: (id: string) => void;
}

export interface FormType {
  onSubmitHandler;
  onCancelHandler: () => void;
  textId?: string;
  textTitle?: string;
  textState?: string;
  textUrl?: string;
  textCreated?: string;
  textUpdated?: string;
}

export interface TextFieldType {
  type: string;
  name?: string;
  placefolder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export interface ButtonType {
  children: string;
  type: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

export interface IconClickType {
  onClick: React.MouseEventHandler<SVGSVGElement>;
}

export interface PagenationType {
  userDataLength: number;
  pagePerUnit: number;
  paginationClickHandler: (el: number) => void;
}
