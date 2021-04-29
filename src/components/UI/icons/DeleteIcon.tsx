import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { IconClickType } from '../../../types';

export const DeleteIcon: React.FC<IconClickType> = ({ onClick }) => (
  <FontAwesomeIcon
    icon={faTrash}
    size="xs"
    className="cursor-pointer m-3 h-8"
    onClick={onClick}
  />
);
