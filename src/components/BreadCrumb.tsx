type Props = {
  nodes: {
    title: string;
    url: string;
  }[];
};

export const BreadCrumb = ({ nodes }: Props) => {
  return (
    <ol className='flex items-center'>
      {[{ title: 'Home', url: '/' }, ...nodes].map((node, i) => (
        <li key={node.url} className='flex items-center'>
          {i > 0 && (
            <span aria-hidden='true' className='select-none px-2'>
              &gt;
            </span>
          )}

          <a
            className='text-indigo-400 whitespace-nowrap hover:underline focus:outline-none focus-visible:ring-2'
            href={node.url}
          >
            {node.title}
          </a>
        </li>
      ))}
    </ol>
  );
};
