export interface ModalType {
  updateIssueArr: [
    {
      id: string;
      title: string;
      state: string;
      url: string;
      created: string;
      updated: string;
    }
  ];
  isModalOpen: {
    isOpen: boolean;
    isEdit: boolean;
  };
}

export interface TableType {
  issues: [
    {
      id: string;
      title: string;
      state: string;
      url: string;
      created: string;
      updated: string;
    }
  ];
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
