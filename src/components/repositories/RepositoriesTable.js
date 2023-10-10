function RepositoriesTable({ label, repositories, id }) {
  const rendered =
    repositories &&
    repositories.map((repo, i) => {
      return (
        <div key={repo.id} className='p-0.5'>
          <a
            className='text-blue-500'
            href={`https://github.com/${repo.full_name}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            {repo.full_name}
          </a>
        </div>
      );
    });

  return (
    <div className='border p-4 rounded'>
      <h1 id={id || ''} className='text-lg font-bold border-b mb-1'>
        {label}
      </h1>
      {rendered}
    </div>
  );
}

export default RepositoriesTable;
