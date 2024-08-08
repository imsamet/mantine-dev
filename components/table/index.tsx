import Button from '../elements/button';
import Heading from '../elements/heading';

type Props = {
  title?: string;
  table: {
    head: Record<string, string>;
    body: Record<string, string | number | null>[];
  };
  actionButtonLabel?: string;
  onClick?: () => void;
};

const Table: React.FC<Props> = ({ title, table, actionButtonLabel, onClick }) => {
  return (
    <div className="border border-gray-300 rounded-xl overflow-hidden">
      {title && (
        <div className="flex flex-row items-center justify-between p-8 pb-4 border-b border-gray-300">
          <Heading type="h2">{title}</Heading>
          {actionButtonLabel && <Button onClick={onClick} label={actionButtonLabel} />}
        </div>
      )}
      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm text-left">
          <thead className="text-base">
            <tr className="border-b border-gray-300">
              {Object.values(table.head).map((header, index) => (
                <th key={index} scope="col" className="px-6 pt-4 pb-7">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.body.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b border-gray-300 last:border-none hover:bg-gray-100 transition-colors"
              >
                {Object.keys(table.head).map((key, colIndex) => (
                  <td key={colIndex} className="px-6 py-4 text-gray-600 font-medium ">
                    {row[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
