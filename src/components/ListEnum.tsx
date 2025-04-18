import classNames from "classnames";

type ListType = "success" | "failure" | "neutral" | "warning";
type ListStyle = "disc" | "none";
export default function ListEnum({ 
  title,
  children,
  type = 'neutral',
  listStyle = 'disc',
  classes = {}
}: { 
  title?: string, 
  children: React.ReactNode,
  type?: ListType,
  listStyle?: ListStyle,
  classes?: { container?: string; title?: string; content?: string }
}) {
  return (
    <div className={classes.container}>
      {title && (
        <div 
          className={classNames(
            'font-bold',
            {
              'text-green-600': type === 'success',
              'text-red-600': type === 'failure',
              'text-orange-500': type === 'warning',
            },
            classes.title,
          )}>
          {title}
        </div>
      )}
      <ul 
        className={classNames(
          'list-inside text-sm text-gray-800',
          {
            'list-none': listStyle === 'none',
            'list-disc': listStyle === 'disc',
          },
          classes.content,
        )}
      >
        {children}
      </ul>
    </div>
  );
}