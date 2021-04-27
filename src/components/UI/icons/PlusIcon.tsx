import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { IconClickType } from '../../../types';

export const PlusIcon: React.FC<IconClickType> = ({ onClick }) => (
  <FontAwesomeIcon
    icon={faPlus}
    size="xs"
    className="cursor-pointer m-2"
    onClick={onClick}
  />
);
