import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { IconClickType } from '../../../types';

export const DeleteIcon: React.FC<IconClickType> = ({ onClick }) => (
  <FontAwesomeIcon
    icon={faTrash}
    size="lg"
    className="cursor-pointer h-8 mx-auto"
    onClick={onClick}
  />
);
