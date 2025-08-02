import tableTwig from './table.twig';
import tableData from './table.yml';

/**
 * Tables
 */
export default {
  title: 'Atoms/Tables',
  parameters: {
    layout: 'padded',
  },
};

export const BasicTable = () => tableTwig(tableData);
