import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { IconClickType } from '../../../types';

export const PlusIcon: React.FC<IconClickType> = ({ onClick }) => (
  <FontAwesomeIcon
    icon={faPlus}
    size="lg"
    className="cursor-pointer h-10"
    onClick={onClick}
  />
);
