import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMarker } from '@fortawesome/free-solid-svg-icons';

import { IconClickType } from '../../../types';

export const EditIcon: React.FC<IconClickType> = ({ onClick }) => (
  <FontAwesomeIcon
    icon={faMarker}
    size="xs"
    className="cursor-pointer m-1 h-8"
    onClick={onClick}
  />
);
