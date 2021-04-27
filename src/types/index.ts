export interface ModalType {
  isModalOpen: boolean;
}

export interface TextFieldType {
  type?: string;
  name?: string;
  placefolder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ButtonType {
  children: string;
  type: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

export interface IconClickType {
  onClick: React.MouseEventHandler<SVGSVGElement>;
}
