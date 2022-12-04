import usePost from './usePost';

function Content () {
    const { post, isLoading } = usePost(1);

    if (isLoading) return <div>Loading...</div>

    return <div>
      <p>{post.id}</p>
      <p>{post.title}</p>
    </div>
  }

  export default Content;