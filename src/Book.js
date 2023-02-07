const Book = (props) => {
  const { author, title, image, link, number } = props;
  return (
    <article className='book'>
      <a href={link} target='_blank' rel='noreferrer'>
        <img src={image} alt={title} />
      </a>
      <h2>{title}</h2>
      <h4>{author}</h4>
      <span className='number'>{`# ${number + 1}`}</span>
    </article>
  );
};

export default Book;
