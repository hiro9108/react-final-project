import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

import { IconClickType } from '../../../types';

export const SyncIcon: React.FC<IconClickType> = ({ onClick }) => (
  <FontAwesomeIcon
    icon={faSync}
    size="xs"
    className="cursor-pointer m-2 h-10"
    onClick={onClick}
  />
);
