
import Tooltip from '@mui/material/Tooltip';

export default function BasicTooltip({toolTipText , children}) {
  return (
    <Tooltip title={toolTipText} placement='bottom'>
      {children}
    </Tooltip>
  );
}