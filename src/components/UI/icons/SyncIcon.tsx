import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

import { IconClickType } from '../../../types';

export const SyncIcon: React.FC<IconClickType> = ({ onClick }) => (
  <FontAwesomeIcon
    icon={faSync}
    size="lg"
    className="cursor-pointer h-10 transition duration-300 ease-in-out hover:text-red-500"
    onClick={onClick}
  />
);
