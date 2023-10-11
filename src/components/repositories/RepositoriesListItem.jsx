import { MarkGithubIcon } from '@primer/octicons-react';
import FileIcon from '../FileIcon';
import RepositoriesSummary from './RepositoriesSummary';

function RepositoriesListItem({ repository }) {
  const { full_name, language, description, owner, name } = repository;

  return (
    <div className='py-3 border-b flex'>
      <FileIcon name={language} className='shrink w-6 pt-1' />
      <div>
        <a
          href={`https://github.com/${full_name}`}
          className='text-xl'
          target='_blank'
          rel='noopener noreferrer'
        >
          {owner.login}/<span className='font-bold'>{name}</span>
        </a>
        <p className='text-gray-500 italic py-1'>{description}</p>
        <RepositoriesSummary repository={repository} />
      </div>
      <div className='grow flex items-center justify-end pr-2'>
        <a
          href={repository.html_url}
          aria-label='github repository'
          target='_blank'
          rel='noopener noreferrer'
        >
          <MarkGithubIcon />
        </a>
      </div>
    </div>
  );
}

export default RepositoriesListItem;
